const BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'
const TOKEN_KEY = 'bd_token'

export const getToken = () => localStorage.getItem(TOKEN_KEY) || ''
export const setToken = (t) => localStorage.setItem(TOKEN_KEY, t)
export const authHeaders = () => ({ Authorization: `Bearer ${getToken()}` })

export async function saveProgress({ user, caseId, score }) {
  const r = await fetch(`${BASE}/progress`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeaders() },
    body: JSON.stringify({ user, caseId, score }),
  })
  if (!r.ok) throw new Error('Failed to save progress')
  return r.json()
}

export async function getProgress(user) {
  const r = await fetch(`${BASE}/progress/${user}`, { headers: authHeaders() })
  if (!r.ok) throw new Error('Failed to load progress')
  return r.json()
}
