export default function CameraFooter({ isMoreScreen, galleryPreview, onCapture, onFlip, onOpenAi, onOpenGallery }) {
  return (
    <footer>
      <button className="gallery-btn" aria-label="Abrir galeria" onClick={onOpenGallery}>
        <img alt="Prévia da foto recente" className="gallery-img" src={galleryPreview} />
      </button>

      <div
        className="shutter-container"
        style={isMoreScreen ? { opacity: 0, pointerEvents: 'none' } : undefined}
      >
        <div className="shutter-glow" aria-hidden="true" />
        <button className="shutter-btn" aria-label="Tirar foto" onClick={onCapture}>
          <span className="shutter-inner">
            <span className="shutter-core" />
          </span>
        </button>
      </div>

      <div className="flip-wrapper">
        <button className="flip-btn" aria-label="Trocar câmera" onClick={onFlip}>
          <span className="material-symbols-outlined">flip_camera_ios</span>
        </button>
        <button className="ai-btn" aria-label="Abrir JOVI AI" onClick={onOpenAi}>AI</button>
      </div>
    </footer>
  )
}
