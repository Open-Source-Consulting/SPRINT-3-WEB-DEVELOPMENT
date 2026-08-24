export default function CameraHeader() {
  return (
    <header>
      <div className="header-group">
        <button className="icon-btn" aria-label="Configurações">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button className="icon-btn primary" aria-label="Flash">
          <span className="material-symbols-outlined">flash_on</span>
        </button>
      </div>
      <div className="header-group">
        <button className="status-badge" aria-label="Configurações HDR">
          <span className="badge-text-hdr">HDR</span>
        </button>
        <button className="status-badge" aria-label="Resolução e taxa de quadros">
          <span className="badge-resolution">
            <span className="res-main">4K</span>
            <span className="res-sub">60</span>
          </span>
        </button>
      </div>
    </header>
  )
}
