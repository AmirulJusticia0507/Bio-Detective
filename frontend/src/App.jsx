import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])
  return (
    <div className="app">
      <h1>Bio-Detective</h1>
      <button onClick={() => setDark(d => !d)}>{dark ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  )
}
export default App
