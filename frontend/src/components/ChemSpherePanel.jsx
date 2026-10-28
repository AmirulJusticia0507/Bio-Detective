import { useEffect, useState } from 'react'
import { getElements } from '../lib/chemsphere'

export default function ChemSpherePanel() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    let alive = true
    getElements()
      .then((res) => { if (alive) setData(Array.isArray(res) ? res : []) })
      .catch(() => { if (alive) setError('Gagal memuat data senyawa dari ChemSphere.') })
    return () => { alive = false }
  }, [])
  return (
    <div>
      <h3>ChemSphere: Senyawa</h3>
      {error ? <p className="lab-error">{error}</p> : (
        <ul>{data.slice(0,5).map(e => <li key={e.id}>{e.name} ({e.symbol})</li>)}</ul>
      )}
    </div>
  )
}
