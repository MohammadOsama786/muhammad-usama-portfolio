import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 700)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <a className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`} href="#home" aria-label="Back to top">
      ↑
    </a>
  )
}
