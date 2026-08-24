import { useState } from 'react'
import AiSuggestionsSheet from './AiSuggestionsSheet.jsx'

export default function GalleryOverlay({ isOpen, image, onClose }) {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  function handleClose() {
    setIsSheetOpen(false)
    onClose()
  }

  return (
    <section className={`gallery-overlay ${isOpen ? 'gallery-overlay-visible' : ''}`}>
      <div className="gallery-panel">
        <div className="gallery-header">
          <button className="gallery-close-btn" aria-label="Voltar para câmera" onClick={handleClose}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <span className="gallery-title">Galeria</span>
          <div className="gallery-header-spacer" aria-hidden="true" />
        </div>
        <div className="gallery-content">
          <img className="gallery-large-img" src={image} alt="Foto em exibição" />
        </div>
        <div className="gallery-footer">
          <button className="action-btn primary" onClick={() => setIsSheetOpen(true)}>
            <span className="material-symbols-outlined">auto_awesome</span>
            Sugestões IA
          </button>
        </div>
        <AiSuggestionsSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} />
      </div>
    </section>
  )
}
