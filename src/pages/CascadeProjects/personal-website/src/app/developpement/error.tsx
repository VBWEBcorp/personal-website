'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040911] via-[#071018] to-[#0A1525] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold text-white">Une erreur est survenue</h2>
        <p className="text-gray-300">Nous nous excusons pour ce désagrément.</p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
