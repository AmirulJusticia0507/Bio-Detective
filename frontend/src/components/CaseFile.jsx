import { useEffect, useMemo, useState } from 'react'
import './CaseFile.css'

const GLYPHS = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿ0123456789ABCDEF#★'

function useDecodeTitle(title, delay = 100) {
  const [text, setText] = useState(title)
  useEffect(() => {
    let raf
    const start = performance.now() + delay
    const tick = (now) => {
      const frame = Math.floor(Math.max(0, now - start) / 22)
      if (frame < title.length) {
        setText(
          title.slice(0, frame) +
            GLYPHS[Math.floor(Math.random() * GLYPHS.length)] +
            title.slice(frame + 1).replace(/[^\s]/g, ' ')
        )
        raf = requestAnimationFrame(tick)
      } else {
        setText(title)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [title, delay])
  return text
}

function Typewriter({ text, speed = 16 }) {
  const [shown, setShown] = useState('')
  useEffect(() => {
    setShown('')
    const id = setInterval(() => {
      setShown((prev) => {
        if (prev.length >= text.length) {
          clearInterval(id)
          return prev
        }
        return text.slice(0, prev.length + 2)
      })
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return (
    <p className="cf-narrative">
      {shown}
      <span className="cf-caret" aria-hidden="true" />
    </p>
  )
}

function ConanGlasses() {
  return (
    <svg className="cf-glasses" viewBox="0 0 120 44" aria-hidden="true">
      <g fill="none" stroke="#e23131" strokeWidth="4">
        <circle cx="30" cy="24" r="14" />
        <circle cx="90" cy="24" r="14" />
        <path d="M44 24h32M16 20l-9-6M104 20l9-6" />
      </g>
      <g fill="#9ff3ff">
        <rect x="24" y="16" width="7" height="3" rx="1.5" transform="rotate(-30 24 16)" className="cf-glint glint-a" />
        <rect x="84" y="14" width="6" height="3" rx="1.5" transform="rotate(25 84 14)" className="cf-glint glint-b" />
      </g>
    </svg>
  )
}

function CaseFile({ caseFile, onClose }) {
  const decodedTitle = useDecodeTitle(caseFile.title)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const evidence = useMemo(() => caseFile.evidence ?? [], [caseFile])
  const suspects = useMemo(() => caseFile.suspects ?? [], [caseFile])

  const goLab = () => {
    onClose()
    requestAnimationFrame(() =>
      document.getElementById('module-reagent')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    )
  }

  return (
    <div className="cf-overlay" role="dialog" aria-modal="true" aria-label={`Berkas kasus: ${caseFile.title}`}>
      <div className="cf-backdrop" onClick={onClose} />

      <article className="cf-file">
        <div className="cf-tape" aria-hidden="true" />

        <header className="cf-head">
          <ConanGlasses />
          <p className="cf-eyebrow">BERKAS KASUS · No. {caseFile.number ?? '??'}</p>
          <h2 className="cf-title">{decodedTitle}</h2>
          <p className="cf-meta">
            <span>{caseFile.time}</span>
            <span>{caseFile.location}</span>
            <span>Tingkat: {caseFile.difficulty}</span>
          </p>
          <span className="cf-stamp">{caseFile.status ?? 'RAHASIA'}</span>
        </header>

        <section className="cf-section reveal" style={{ '--d': '.15s' }}>
          <h3>▸ KORBAN</h3>
          <div className="cf-victim">
            <div className="cf-avatar victim" aria-hidden="true">†</div>
            <div>
              <b>{caseFile.victim.name}</b>
              <small>{caseFile.victim.role}</small>
              <p><em>Penyebab kematian:</em> {caseFile.victim.cause}</p>
              <p className="cf-note">{caseFile.victim.note}</p>
            </div>
          </div>
        </section>

        <section className="cf-section reveal" style={{ '--d': '.3s' }}>
          <h3>NARASI KEJADIAN</h3>
          <Typewriter text={caseFile.narrative} />
        </section>

        <section className="cf-section reveal" style={{ '--d': '.45s' }}>
          <h3>TERSANGKA ({suspects.length} ORANG)</h3>
          <div className="cf-suspects">
            {suspects.map((s) => (
              <div className="cf-suspect" key={s.name}>
                <div className="cf-avatar" aria-hidden="true">
                  {s.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                </div>
                <b>{s.name}</b>
                <small>{s.role}</small>
                <dl>
                  <dt>Alibi</dt>
                  <dd>{s.alibi}</dd>
                  <dt>Catatan penyidikan</dt>
                  <dd>{s.note}</dd>
                  <dt>Motif</dt>
                  <dd>{s.motive}</dd>
                </dl>
              </div>
            ))}
          </div>
        </section>

        <section className="cf-section reveal" style={{ '--d': '.6s' }}>
          <h3>BUKTI FORENSIK YANG TERSEDIA</h3>
          <ul className="cf-evidence">
            {evidence.map((e) => <li key={e}>{e}</li>)}
          </ul>
        </section>

        <footer className="cf-actions reveal" style={{ '--d': '.75s' }}>
          <button className="cf-btn primary" onClick={goLab}>🔍 Mulai Investigasi di Lab</button>
          <button className="cf-btn" onClick={onClose}>Tutup Berkas</button>
        </footer>
      </article>
    </div>
  )
}

export default CaseFile
