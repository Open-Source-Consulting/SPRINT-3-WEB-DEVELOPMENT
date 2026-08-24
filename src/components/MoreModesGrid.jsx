import { extraModes } from '../data/cameraModes.js'

export default function MoreModesGrid() {
  return (
    <>
      <div className="grid-pattern" aria-hidden="true" />
      <div className="more-viewfinder-grid">
        <div className="modes-grid">
          {extraModes.map((mode) => (
            <button className="mode-option" key={mode.label} type="button">
              <span className="mode-icon-wrapper">
                <span className="material-symbols-outlined">{mode.icon}</span>
              </span>
              <span className="mode-label">{mode.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
