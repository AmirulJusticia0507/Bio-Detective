import { useEffect, useState } from 'react'
import { cases } from './data/cases'
import './App.css'

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  const c = cases[0]
  return (
    <div className="app">
      <h1>{c.title}</h1>
      <h3>Tersangka</h3>
      <ul>{c.suspects.map(s=><li key={s}>{s}</li>)}</ul>
      <h3>Siklus</h3>
      <ol>{c.steps.map(s=><li key={s}>{s}</li>)}</ol>
      <button onClick={() => setDark(d => !d)}>{dark ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  )
}
export default App
