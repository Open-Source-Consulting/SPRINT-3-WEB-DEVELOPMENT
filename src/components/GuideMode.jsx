import { useEffect, useRef, useState } from 'react'
import { guidedPlans } from '../data/aiContent.js'
import { classifySubject } from '../utils/subjectClassifier.js'
import FormattedText from './FormattedText.jsx'

export default function GuidedMode({ onFlash }) {
  const [step, setStep] = useState(1)
  const [input, setInput] = useState(() => localStorage.getItem('jovi.guidedInput') ?? '')
  const [subject, setSubject] = useState('objeto')
  const [isScanning, setIsScanning] = useState(false)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('jovi.guidedInput', input)
  }, [input])

  useEffect(() => () => clearInterval(intervalRef.current), [])

  function continueToScan() {
    setSubject(classifySubject(input))
    setStep(2)
    setProgress(0)
    setIsScanning(false)
  }

  function startScan() {
    setIsScanning(true)
    let currentProgress = 0
    intervalRef.current = setInterval(() => {
      currentProgress = Math.min(currentProgress + 2, 100)
      setProgress(currentProgress)
      if (currentProgress === 36 || currentProgress === 76) onFlash()
      if (currentProgress === 100) {
        clearInterval(intervalRef.current)
        setTimeout(() => setStep(3), 500)
      }
    }, 50)
  }

  const status = progress <= 15
    ? 'Iniciando câmera...'
    : progress <= 45
      ? 'Analisando o objetivo...'
      : progress <= 70
        ? 'Analisando a iluminação...'
        : progress <= 90
          ? 'Calculando o enquadramento...'
          : 'Gerando plano de captura...'

  return (
    <div className="ai-guided-view ai-view-visible">
      {step === 1 && (
        <div className="guided-step">
          <h2 className="ai-guided-title">O que você deseja fotografar?</h2>
          <p className="ai-guided-subtitle">
            Descreva seu objetivo para receber instruções personalizadas.
          </p>
          <div className="guided-input-box">
            <textarea
              className="guided-textarea"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ex: Uma foto de um prato ou uma selfie na praia..."
            />
            <button className="action-btn primary" onClick={continueToScan}>
              <span className="material-symbols-outlined">arrow_forward</span>
              Continuar
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="guided-step">
          <h2 className="ai-guided-title">Análise de Ambiente</h2>
          {!isScanning ? (
            <div className="scan-permission-box">
              <span className="material-symbols-outlined scan-icon-large">photo_camera_back</span>
              <p className="ai-guided-text">
                A JOVI AI analisará iluminação e distância para montar o plano da foto.
              </p>
              <button className="action-btn primary" onClick={startScan}>
                <span className="material-symbols-outlined">check_circle</span>
                Permitir Escaneamento
              </button>
            </div>
          ) : (
            <div className="scanning-status-box">
              <div className="spinner-glow" />
              <p className="scan-status-text">{status}</p>
              <div className="scan-progress-bar">
                <div className="scan-progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="guided-step">
          <h2 className="ai-guided-title">Como Configurar a Câmera</h2>
          <p className="ai-guided-subtitle">Siga o passo a passo para preparar o disparo:</p>
          <div className="plan-steps-container">
            {guidedPlans[subject].map((planStep, index) => (
              <div className="guided-step-item" key={planStep}>
                <div className="step-badge">{index + 1}</div>
                <div className="step-text-card"><FormattedText text={planStep} /></div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}