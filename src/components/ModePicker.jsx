import { useEffect, useRef } from 'react'
import { cameraModes } from '../data/cameraModes.js'

export default function ModePicker({ activeMode, onSelectMode }) {
  const activeRef = useRef(null)

  useEffect(() => {
    activeRef.current?.scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }, [activeMode])

  return (
    <nav className="mode-picker" aria-label="Modos da câmera">
      <div className="mode-list">
        {cameraModes.map((mode) => (
          <button
            className={`mode-item ${activeMode === mode ? 'active' : ''}`}
            key={mode}
            onClick={() => onSelectMode(mode)}
            ref={activeMode === mode ? activeRef : null}
            type="button"
          >
            {mode}
          </button>
        ))}
      </div>
    </nav>
  )
}
