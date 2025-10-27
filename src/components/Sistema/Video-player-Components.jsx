"use client"

import { useRef, useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Subtitles } from "lucide-react"

export default function VideoPlayerComponents({
  src = "img/Sistema/videomaria.mp4",
  poster = "",
}) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const containerRef = useRef(null)
  const inactivityTimeoutRef = useRef(null)

  // Efeito para controles de inatividade
  useEffect(() => {
    const resetInactivityTimer = () => {
      setShowControls(true)
      
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current)
      }
      
      if (isPlaying) {
        inactivityTimeoutRef.current = setTimeout(() => {
          setShowControls(false)
        }, 100) // 2 segundos de inatividade
      }
    }

    const handleUserActivity = () => {
      resetInactivityTimer()
    }

    // Eventos para detectar atividade do usuário
    const events = ['mousemove', 'mousedown', 'click', 'touchstart', 'keydown']
    events.forEach(event => {
      document.addEventListener(event, handleUserActivity)
    })

    resetInactivityTimer() // Iniciar o timer

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserActivity)
      })
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current)
      }
    }
  }, [isPlaying])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => setCurrentTime(video.currentTime)
    const handleLoadedMetadata = () => setDuration(video.duration)
    const handleEnded = () => setIsPlaying(false)

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("ended", handleEnded)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
    setShowControls(true) // Mostrar controles ao clicar
  }

  const handleProgressChange = (e) => {
    const value = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = value
      setCurrentTime(value)
    }
    setShowControls(true) // Mostrar controles ao interagir
  }

  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.volume = value
      setVolume(value)
      setIsMuted(value === 0)
    }
    setShowControls(true) // Mostrar controles ao interagir
  }

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted
      videoRef.current.muted = newMutedState
      setIsMuted(newMutedState)
      if (newMutedState) {
        setVolume(0)
      } else {
        setVolume(videoRef.current.volume || 1)
      }
    }
    setShowControls(true) // Mostrar controles ao interagir
  }

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleVideoClick = (e) => {
    e.stopPropagation()
    togglePlay()
  }

  const handleContainerClick = () => {
    setShowControls(true)
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current)
    }
    if (isPlaying) {
      inactivityTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 2000)
    }
  }

  return (
    <div
      ref={containerRef}
     className="relative w-full h-auto bg-transparent rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
      onClick={handleContainerClick}
    >
      <video 
      
       
        ref={videoRef} 
        src={src} 
        poster={poster} 
        className="w-full h-full object-cover" 
        onClick={handleVideoClick}
      />

      {/* Play button overlay (shown when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px]">
          <button
            onClick={togglePlay}
            className="w-20 h-20 rounded-full bg-azul-style hover:bg-blue-800 text-white shadow-2xl transition-all hover:scale-110 flex items-center justify-center"
          >
            <Play className="w-10 h-10 ml-1" fill="currentColor" />
          </button>
        </div>
      )}

      {/* Controls */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 transition-all duration-300 ${
          showControls || !isPlaying ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Progress bar */}
        <div className="mb-4">
          <input
            type="range"
            value={currentTime}
            max={duration || 100}
            step={0.1}
            onChange={handleProgressChange}
            className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-azul-style [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
            style={{
              background: `linear-gradient(to right, #ffff 0%, #fff ${duration ? (currentTime / duration) * 100 : 0}%, #4b5563 ${duration ? (currentTime / duration) * 100 : 0}%, #4b5563 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-white/80 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Control buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={togglePlay}
              className="p-2 text-white hover:bg-white/20 rounded-md transition-colors"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" fill="currentColor" />}
            </button>

            <div className="flex items-center gap-2 group/volume">
              <button 
                onClick={toggleMute}
                className="p-2 text-white hover:bg-white/20 rounded-md transition-colors"
              >
                {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <div className="w-0 group-hover/volume:w-24 overflow-hidden transition-all duration-300">
                <input
                  type="range"
                  value={volume}
                  max={1}
                  step={0.01}
                  onChange={handleVolumeChange}
                  className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-azul-style [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
                  style={{
                    background: `linear-gradient(to right, #0D6DFF 0%, #0D6DFF ${volume * 100}%, #4b5563 ${volume * 100}%, #4b5563 100%)`
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 text-white hover:bg-white/20 rounded-md transition-colors">
              <Subtitles className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}