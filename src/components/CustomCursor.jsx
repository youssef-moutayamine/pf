import React, { useEffect, useRef, useState } from 'react'

const CustomCursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const rafRef = useRef(0)
  const [visible, setVisible] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                            window.innerWidth <= 768
      setIsMobile(isMobileDevice)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Don't initialize cursor on mobile devices
    if (isMobile) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onEnter = () => setVisible(true)
    const onLeave = () => setVisible(false)

    const render = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      rafRef.current = requestAnimationFrame(render)
    }

    rafRef.current = requestAnimationFrame(render)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseenter', onEnter)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseenter', onEnter)
      window.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  // Don't render cursor on mobile devices
  if (isMobile) return null

  return (
    <>
             <div
         ref={ringRef}
         className={`pointer-events-none fixed z-[70] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-opacity duration-150 border-violet-500/70 dark:border-violet-400/70`}
         style={{ width: 40, height: 40, opacity: visible ? 1 : 0 }}
       />
       <div
         ref={dotRef}
         className={`pointer-events-none fixed z-[71] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500 dark:bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-opacity duration-150`}
         style={{ width: 20, height: 20, opacity: visible ? 1 : 0 }}
       />
    </>
  )
}

export default CustomCursor


