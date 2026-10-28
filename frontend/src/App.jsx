import { useEffect, useState } from 'react'
import { cases } from './data/cases'
import ReagentLab from './labs/ReagentLab'
import TlcLab from './labs/TlcLab'
import SerologyLab from './labs/SerologyLab'
import DeductionBoard from './components/DeductionBoard'
import LearningHub from './components/LearningHub'
import ChemSpherePanel from './components/ChemSpherePanel'
import CaseFile from './components/CaseFile'
import ModuleFile from './components/ModuleFile'
import { modules } from './data/modules'
import './App.css'

const MODULES = Object.fromEntries(modules.map((m) => [m.id, m]))

function ModuleCard({ id, label, children, onOpen, hint = '🔍 Klik untuk melihat detail modul' }) {
  const open = () => {
    if (onOpen) return onOpen()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  const onKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      open()
    }
  }
  return (
    <div className="card reveal" id={id} tabIndex={0} role="button" aria-label={label} onClick={open} onKeyDown={onKey}>
      {children}
      {onOpen && <p className="card-hint">{hint}</p>}
    </div>
  )
}

function App() {
  const [dark, setDark] = useState(true)
  const [activeCase, setActiveCase] = useState(null)
  const [activeId, setActiveId] = useState(cases[0]?.id)
  const [openModule, setOpenModule] = useState(null)
  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  const c = cases.find((x) => x.id === activeId) ?? cases[0]
  return (
    <div className="app">
      <nav className="nav">
        <span className="brand">Bio-Detective</span>
        <button className="ghost" onClick={() => setDark(d => !d)}>{dark ? 'Light' : 'Dark'}</button>
      </nav>
      <header className="hero">
        <p className="eyebrow hero-anim hero-anim-1">01 / Forensic Lab Simulator</p>
        <h1 className="hero-anim hero-anim-2">Developer who ships<br/>lab simulations.</h1>
        <p className="sub hero-anim hero-anim-3">Gamified forensic science for students &amp; curious minds.</p>
        <div className="cta hero-anim hero-anim-4">
          <a className="btn" href="#work">Start Case</a>
          <a className="btn ghost" href="#work">View Modules</a>
        </div>
        <div className="case-switch">
          {cases.map((x) => (
            <button
              key={x.id}
              className={x.id === activeId ? 'case-btn active' : 'case-btn'}
              onClick={() => setActiveId(x.id)}
            >
              {x.title}
            </button>
          ))}
        </div>
      </header>
      <section id="work" className="section">
        <h2 className="sec-title">[Work]</h2>
        <div className="grid">
          <ModuleCard id="module-case" label={`Open case: ${c.title}`} hint="🔍 Klik untuk membuka berkas kasus" onOpen={() => setActiveCase(c)}>
            <h3>{c.title}</h3><p>Case narrative &amp; suspects.</p>
            <ul className="suspects">{c.suspects?.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
          </ModuleCard>
          <ModuleCard id="module-reagent" label="Open Reagent Lab" onOpen={() => setOpenModule(MODULES['module-reagent'])}>
            <h3>Reagent Lab</h3><ReagentLab />
          </ModuleCard>
          <ModuleCard id="module-tlc" label="Open TLC Lab" onOpen={() => setOpenModule(MODULES['module-tlc'])}>
            <h3>TLC Lab</h3><TlcLab />
          </ModuleCard>
          <ModuleCard id="module-serology" label="Open Serology Lab" onOpen={() => setOpenModule(MODULES['module-serology'])}>
            <h3>Serology</h3><SerologyLab />
          </ModuleCard>
          <ModuleCard id="module-deduction" label="Open Deduction Board" onOpen={() => setOpenModule(MODULES['module-deduction'])}>
            <h3>Deduction Board</h3><DeductionBoard />
          </ModuleCard>
          <ModuleCard id="module-learning" label="Open Learning Hub" onOpen={() => setOpenModule(MODULES['module-learning'])}>
            <h3>Learning Hub</h3><LearningHub />
          </ModuleCard>
          <ModuleCard id="module-chemsphere" label="Open ChemSphere" onOpen={() => setOpenModule(MODULES['module-chemsphere'])}>
            <h3>ChemSphere</h3><ChemSpherePanel />
          </ModuleCard>
        </div>
      </section>
      {activeCase && <CaseFile caseFile={activeCase} onClose={() => setActiveCase(null)} />}
      {openModule && <ModuleFile module={openModule} onClose={() => setOpenModule(null)} />}
      <section className="stats">
        <div><b>3+</b><span>Modules</span></div>
        <div><b>25+</b><span>Compounds</span></div>
        <div><b>100%</b><span>Interactive</span></div>
      </section>
    </div>
  )
}
export default App
