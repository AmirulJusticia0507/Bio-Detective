import { useEffect, useState } from 'react'
import { getElements } from '../lib/chemsphere'

export default function ChemSpherePanel() {
  const [data, setData] = useState([])
  useEffect(() => { getElements().then(setData).catch(() => setData([])) }, [])
  return (
    <div>
      <h3>ChemSphere: Senyawa</h3>
      <ul>{data.slice(0,5).map(e => <li key={e.id}>{e.name} ({e.symbol})</li>)}</ul>
    </div>
  )
}
