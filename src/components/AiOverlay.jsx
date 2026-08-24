import { useState } from 'react'
import AiChat from './AiChat.jsx'
import AutomaticMode from './AutomaticMode.jsx'
import GuidedMode from './GuidedMode.jsx'

const menuOptions = [
  {
    id: 'chat',
    icon: 'chat',
    title: 'Dúvidas (chatbot)',
    description: 'Converse com o assistente inteligente',
  },
  {
    id: 'guided',
    icon: 'explore',
    title: 'Modo guiado',
    description: 'Instruções passo a passo para fotos',
  },
  {
    id: 'automatic',
    icon: 'auto_awesome',
    title: 'Modo automático',
    description: 'Otimização inteligente da cena',
  },
]

export default function AiOverlay({ isOpen, onClose, onFlash }) {
  const [currentView, setCurrentView] = useState('menu')

  function finishAutomaticMode() {
    onClose()
  }

  return (
    <section className={`ai-overlay ${isOpen ? 'ai-overlay-visible' : ''}`}>
      <div className="ai-panel">
        <div className="ai-header">
          <div className="ai-header-left">
            {currentView !== 'menu' && (
              <button className="ai-back-btn" aria-label="Voltar ao menu" onClick={() => setCurrentView('menu')}>
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
            )}
            {currentView === 'menu' && <span className="ai-logo">AI</span>}
            <span className="ai-title">JOVI AI</span>
          </div>
          <button className="ai-close-btn" aria-label="Fechar JOVI AI" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {currentView === 'menu' && (
          <div className="ai-menu-view">
            <h2 className="ai-menu-title">Selecione uma opção</h2>
            <div className="ai-menu-options">
              {menuOptions.map((option) => (
                <button className="ai-menu-btn" key={option.id} onClick={() => setCurrentView(option.id)}>
                  <span className="material-symbols-outlined menu-icon">{option.icon}</span>
                  <span className="menu-btn-content">
                    <span className="menu-btn-title">{option.title}</span>
                    <span className="menu-btn-desc">{option.description}</span>
                  </span>
                  <span className="material-symbols-outlined arrow-icon">chevron_right</span>
                </button>
              ))}
            </div>
          </div>
        )}
        {currentView === 'chat' && <AiChat />}
        {currentView === 'guided' && <GuidedMode onFlash={onFlash} />}
        {currentView === 'automatic' && (
          <AutomaticMode onFinish={finishAutomaticMode} onFlash={onFlash} />
        )}
      </div>
    </section>
  )
}
