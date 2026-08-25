import { useEffect, useRef, useState } from 'react'
import galleryPreview from '../assets/gallery-preview.png'
import rearCamera from '../assets/imagem1.png'
import frontCamera from '../assets/imagem2.png'
import AiOverlay from './AiOverlay.jsx'
import CameraFooter from './CameraFooter.jsx'
import CameraHeader from './CameraHeader.jsx'
import GalleryOverlay from './GalleryOverlay.jsx'
import ModePicker from './ModePicker.jsx'
import Viewfinder from './Viewfinder.jsx'

const validModes = ['Night', 'Portrait', 'Photo', 'Video', 'Mais']

function readMode() {
  const stored = localStorage.getItem('jovi.activeMode')
  return validModes.includes(stored) ? stored : 'Photo'
}

function readFrontCamera() {
  return localStorage.getItem('jovi.isFrontCamera') === 'true'
}

export default function CameraApp() {
  const [activeMode, setActiveMode] = useState(readMode)
  const [isFrontCamera, setIsFrontCamera] = useState(readFrontCamera)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isFlashing, setIsFlashing] = useState(false)
  const [isAiOpen, setIsAiOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const transitionTimer = useRef(null)
  const flashTimer = useRef(null)

  const isMoreScreen = activeMode === 'Mais'
  const cameraImage = isFrontCamera ? frontCamera : rearCamera

  useEffect(() => {
    localStorage.setItem('jovi.activeMode', activeMode)
  }, [activeMode])

  useEffect(() => {
    localStorage.setItem('jovi.isFrontCamera', String(isFrontCamera))
  }, [isFrontCamera])

  useEffect(() => () => {
    clearTimeout(transitionTimer.current)
    clearTimeout(flashTimer.current)
  }, [])

  function startTransition() {
    clearTimeout(transitionTimer.current)
    setIsTransitioning(true)
    transitionTimer.current = setTimeout(() => setIsTransitioning(false), 500)
  }

  function handleModeSelect(mode) {
    setActiveMode(mode)
    startTransition()
  }

  function handleFlipCamera() {
    startTransition()
    setTimeout(() => setIsFrontCamera((current) => !current), 250)
  }

  function triggerFlash() {
    clearTimeout(flashTimer.current)
    setIsFlashing(true)
    flashTimer.current = setTimeout(() => setIsFlashing(false), 180)
  }

  return (
    <div className="app-wrapper">
      <main
        className={`app-container ${isTransitioning ? 'mode-transitioning' : ''}`}
        id="camera-app"
      >
        <Viewfinder
          cameraImage={cameraImage}
          isFrontCamera={isFrontCamera}
          isMoreScreen={isMoreScreen}
        />
        <CameraHeader />
        <ModePicker activeMode={activeMode} onSelectMode={handleModeSelect} />
        <CameraFooter
          galleryPreview={galleryPreview}
          isMoreScreen={isMoreScreen}
          onCapture={triggerFlash}
          onFlip={handleFlipCamera}
          onOpenAi={() => setIsAiOpen(true)}
          onOpenGallery={() => setIsGalleryOpen(true)}
        />
        <AiOverlay isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} onFlash={triggerFlash} />
        <GalleryOverlay
          image={galleryPreview}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
        />
        <div className={`capture-flash ${isFlashing ? 'capture-flash-visible' : ''}`} aria-hidden="true" />
      </main>
    </div>
  )
}