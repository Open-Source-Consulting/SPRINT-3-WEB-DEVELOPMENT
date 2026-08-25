import { useEffect, useRef, useState } from 'react'
import { automaticPlans } from '../data/aiContent.js'
import { classifySubject } from '../utils/subjectClassifier.js'
import FormattedText from './FormattedText.jsx'

export default function AutomaticMode({ onFinish, onFlash }) {
  const [step, setStep] = useState(1)
  const [input, setInput] = useState(() => localStorage.getItem('jovi.autoInput') ?? '')
  const [subject, setSubject] = useState('objeto')
  const [isScanning, setIsScanning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isApplied, setIsApplied] = useState(false)
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  useEffect(() => {
    localStorage.setItem('jovi.autoInput', input)
  }, [input])

  useEffect(() => () => {
    clearInterval(intervalRef.current)
    clearTimeout(timeoutRef.current)
  }, [])

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
        timeoutRef.current = setTimeout(() => {
          setStep(3)
          timeoutRef.current = setTimeout(() => setIsApplied(true), 3000)
        }, 500)
      }
    }, 50)
  }

  const status = progress <= 15
    ? 'Iniciando câmera...'
    : progress <= 45
      ? 'Analisando a cena...'
      : progress <= 70
        ? 'Medindo luz e foco...'
        : progress <= 90
          ? 'Calculando parâmetros...'
          : 'Otimização concluída...'

  function finish() {
    onFlash()
    onFinish()
  }

  return (
    <div className="ai-auto-view ai-view-visible">
      {step === 1 && (
        <div className="auto-step">
          <h2 className="ai-auto-title">O que deseja fotografar?</h2>
          <p className="ai-auto-subtitle">
            Descreva em poucas palavras para a IA otimizar a câmera.
          </p>
          <div className="auto-input-box">
            <textarea
              className="auto-textarea"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ex: Foto de uma flor com fundo desfocado..."
            />
            <button className="action-btn primary" onClick={continueToScan}>
              <span className="material-symbols-outlined">arrow_forward</span>
              Continuar
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="auto-step">
          <h2 className="ai-auto-title">Análise de Ambiente</h2>
          {!isScanning ? (
            <div className="scan-permission-box">
              <span className="material-symbols-outlined scan-icon-large">blur_on</span>
              <p className="ai-auto-text">
                A JOVI AI analisará o ambiente e aplicará as melhores configurações.
              </p>
              <button className="action-btn primary" onClick={startScan}>
                <span className="material-symbols-outlined">check_circle</span>
                Permitir e Otimizar
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
        <div className="auto-step">
          <h2 className="ai-auto-title">Otimização Inteligente</h2>
          <p className="ai-auto-subtitle">Parâmetros aplicados no dispositivo:</p>
          <div className="plan-steps-container">
            {automaticPlans[subject].map((config, index) => (
              <div className="guided-step-item" key={config}>
                <div className="step-badge">{index + 1}</div>
                <div className="step-text-card"><FormattedText text={config} /></div>
              </div>
            ))}
          </div>
          <div className="impl-status-box">
            {!isApplied ? (
              <div className="impl-loading">
                <div className="mini-spinner" />
                <span>Configurando câmera...</span>
              </div>
            ) : (
              <div className="impl-success">
                <span className="material-symbols-outlined success-icon">verified</span>
                <span>Configurações aplicadas com sucesso!</span>
              </div>
            )}
          </div>
          {isApplied && (
            <button className="action-btn primary auto-finish-btn" onClick={finish}>
              <span className="material-symbols-outlined">photo_camera</span>
              Capturar Agora
            </button>
          )}
        </div>
      )}
    </div>
  )
}