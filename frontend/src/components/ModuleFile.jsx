import { useEffect, useMemo } from 'react'
import { Typewriter, ConanGlasses } from './CaseFile'
import './CaseFile.css'

function ModuleFile({ module, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const tasks = useMemo(() => module.tasks ?? [], [module])
  const science = useMemo(() => module.science ?? [], [module])

  const goto = (targetId) => {
    onClose()
    requestAnimationFrame(() =>
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    )
  }

  return (
    <div className="cf-overlay" role="dialog" aria-modal="true" aria-label={`Detail modul: ${module.title}`}>
      <div className="cf-backdrop" onClick={onClose} />

      <article className="cf-file">
        <div className="cf-tape" aria-hidden="true" />

        <header className="cf-head">
          <ConanGlasses />
          <div className="cf-icon" aria-hidden="true">{module.icon}</div>
          <p className="cf-eyebrow">MODUL INVESTIGASI · {module.badge}</p>
          <h2 className="cf-title">{module.title}</h2>
          <p className="cf-tagline">{module.tagline}</p>
          <p className="cf-meta">
            <span>{module.category}</span>
            <span>Panel: #{module.id.replace('module-', '')}</span>
          </p>
          <span className="cf-stamp">{module.badge}</span>
        </header>

        <section className="cf-section reveal" style={{ '--d': '.15s' }}>
          <h3>▸ APA MODUL INI</h3>
          <Typewriter text={module.desc} />
        </section>

        <section className="cf-section reveal" style={{ '--d': '.3s' }}>
          <h3>YANG KAMU KERJAKAN ({tasks.length})</h3>
          <ul className="cf-tasks">
            {tasks.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </section>

        <section className="cf-section reveal" style={{ '--d': '.45s' }}>
          <h3>DI BALIK SAINS</h3>
          <ul className="cf-science">
            {science.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </section>

        <footer className="cf-actions reveal" style={{ '--d': '.6s' }}>
          <button className="cf-btn primary" onClick={() => goto(module.id)}>
            {module.icon} Masuk ke Panel {module.title}
          </button>
          <button className="cf-btn" onClick={onClose}>Tutup Modul</button>
        </footer>
      </article>
    </div>
  )
}

export default ModuleFile
