"use client"

import { useState } from "react"

export function MonevoLightboxImage({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="monevo-lightbox-trigger"
        onClick={() => setOpen(true)}
        aria-label={`Open larger image: ${alt}`}
      >
        <img src={src} alt={alt} className={className} />
      </button>
      {open && (
        <div className="monevo-lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <button type="button" className="monevo-lightbox-close" onClick={() => setOpen(false)} aria-label="Close image">×</button>
          <img src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  )
}
