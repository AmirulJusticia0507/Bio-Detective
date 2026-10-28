const BASE=import.meta.env.VITE_CHEMSPHERE_API_URL||'http://localhost:4000/api/v1'; export async function getElements(){const r=await fetch(BASE+'/elements');return r.json();}
