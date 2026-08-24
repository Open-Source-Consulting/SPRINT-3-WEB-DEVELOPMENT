import MoreModesGrid from './MoreModesGrid.jsx'

export default function Viewfinder({ isMoreScreen, cameraImage, isFrontCamera }) {
  return (
    <div className="viewfinder-layer">
      {isMoreScreen ? (
        <MoreModesGrid />
      ) : (
        <img
          src={cameraImage}
          alt={isFrontCamera ? 'Visão da câmera frontal' : 'Visão da câmera traseira'}
          className="camera-view"
          style={{ transform: isFrontCamera ? 'scaleX(-1)' : 'scaleX(1)' }}
        />
      )}
      <div className="scanline" aria-hidden="true" />
      <div className="viewfinder-overlay" aria-hidden="true" />
    </div>
  )
}
