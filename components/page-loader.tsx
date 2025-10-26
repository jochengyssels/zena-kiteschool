"use client"

import { useEffect, useState } from "react"

export default function PageLoader() {
  const [loading, setLoading] = useState(true)
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    // Check if this is the first visit in this session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader")

    if (!hasSeenLoader) {
      setShouldShow(true)
      sessionStorage.setItem("hasSeenLoader", "true")
    } else {
      setLoading(false)
    }

    // Fallback timeout in case video doesn't load or end event doesn't fire
    const timer = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleVideoEnd = () => {
    setLoading(false)
  }

  if (!loading || !shouldShow) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <video
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zena-loader-simple-RUPwfzeIYbIUfI3cKiuAhvQUuHqWck.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
