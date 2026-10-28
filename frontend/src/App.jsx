import { useEffect, useState } from 'react'
import { cases } from './data/cases'
import ReagentLab from './labs/ReagentLab'
import TlcLab from './labs/TlcLab'
import SerologyLab from './labs/SerologyLab'
import DeductionBoard from './components/DeductionBoard'
import LearningHub from './components/LearningHub'
import ChemSpherePanel from './components/ChemSpherePanel'
import './App.css'

function App() {
  const [dark, setDark] = useState(true)
  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])
  const c = cases[0]
  return (
    <div className="app">
      <nav className="nav">
        <span className="brand">Bio-Detective</span>
        <button className="ghost" onClick={() => setDark(d => !d)}>{dark ? 'Light' : 'Dark'}</button>
      </nav>
      <header className="hero">
        <p className="eyebrow">01 / Forensic Lab Simulator</p>
        <h1>Developer who ships<br/>lab simulations.</h1>
        <p className="sub">Gamified forensic science for students &amp; curious minds.</p>
        <div className="cta">
          <a className="btn" href="#work">Start Case</a>
          <a className="btn ghost" href="#work">View Modules</a>
        </div>
      </header>
      <section id="work" className="section">
        <h2 className="sec-title">[Work]</h2>
        <div className="grid">
          <div className="card"><h3>{c.title}</h3><p>Case narrative &amp; suspects.</p></div>
          <div className="card"><h3>Reagent Lab</h3><ReagentLab /></div>
          <div className="card"><h3>TLC Lab</h3><TlcLab /></div>
          <div className="card"><h3>Serology</h3><SerologyLab /></div>
          <div className="card"><h3>Deduction Board</h3><DeductionBoard /></div>
          <div className="card"><h3>Learning Hub</h3><LearningHub /></div>
          <div className="card"><h3>ChemSphere</h3><ChemSpherePanel /></div>
        </div>
      </section>
      <section className="stats">
        <div><b>3+</b><span>Modules</span></div>
        <div><b>25+</b><span>Compounds</span></div>
        <div><b>100%</b><span>Interactive</span></div>
      </section>
    </div>
  )
}
export default App
