'use client'

import { useEffect, useState } from 'react'

export type DeviceTier = 'low' | 'medium' | 'high'

export function useDeviceTier(): DeviceTier {
  const [tier, setTier] = useState<DeviceTier>('medium')

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')

    if (!gl) {
      setTier('low')
      return
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    const renderer = debugInfo
      ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
      : ''

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    const isLowEnd = /Intel HD Graphics|Mali|Adreno 5|PowerVR/i.test(renderer)
    const memory = (navigator as any).deviceMemory || 8

    if (isMobile || isLowEnd || memory <= 4) {
      setTier('low')
    } else if (memory >= 8 && !isMobile) {
      setTier('high')
    } else {
      setTier('medium')
    }
  }, [])

  return tier
}
