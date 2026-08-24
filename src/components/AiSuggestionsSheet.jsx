export default function AiSuggestionsSheet({ isOpen, onClose }) {
  return (
    <div className={`gallery-ai-sheet ${isOpen ? 'gallery-ai-sheet-visible' : ''}`}>
      <div className="sheet-drag-handle" />
      <div className="sheet-header">
        <span className="material-symbols-outlined sheet-icon">auto_awesome</span>
        <span className="sheet-title">JOVI AI - Análise de Foto</span>
        <button className="sheet-close-btn" aria-label="Fechar sugestões" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="sheet-body">
        <Suggestion icon="lightbulb" title="Iluminação">
          A luz de fundo está um pouco estourada. Na próxima captura, posicione o assunto a favor
          da luz ou ative o HDR para equilibrar as sombras.
        </Suggestion>
        <Suggestion icon="grid_on" title="Composição">
          O objeto centralizado ficou ótimo, mas a regra dos terços pode trazer mais profundidade
          para a imagem.
        </Suggestion>
        <Suggestion icon="psychology" title="Dica da JOVI AI">
          Dê um toque longo na tela para travar o foco e a exposição antes de disparar.
        </Suggestion>
      </div>
    </div>
  )
}

function Suggestion({ icon, title, children }) {
  return (
    <div className="suggestion-group">
      <div className="suggestion-header">
        <span className="material-symbols-outlined text-primary">{icon}</span>
        <strong>{title}</strong>
      </div>
      <p className="suggestion-text">{children}</p>
    </div>
  )
}
