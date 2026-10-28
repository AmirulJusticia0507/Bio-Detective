# Integrasi ChemSphere

## Konsep
- ChemSphere = Mesin Simulator/Engine Laboratorium (visualisasi molekul, data senyawa, eksperimen kimia dasar).
- Bio-Detective = Gamification Layer (Mode Permainan Investigasi Forensik).

## Modul ChemSphere
- 🧪 ChemLab Sandbox: eksplorasi rumus & visualisasi senyawa.
- 🔍 Forensic Detective Mode: studi kasus berbasis cerita (Bio-Detective).
- 📘 Chemical Database & Wiki: katalog senyawa kimia untuk hint.

## Integrasi
- Game memanggil renderer/visualizer ChemSphere untuk uji forensik (reaksi molekuler, endapan Prussian Blue).
- Pemain bisa "Lihat Mekanisme Molekuler" → visualisasi 3D senyawa ChemSphere.
- Shared Component: tabung reaksi, indikator pH, animasi reaksi molekuler.
- Shared Database: data senyawa, toksisitas, nilai Rf via API ChemSphere.

## Arsitektur
```
+-----------------------------------+
|          CHEMSPHERE APP           |
+-----------------------------------+
            |
+-----------+-----------+
|                       |
[Chemistry Core]    [Forensic Game]
- Periodic Table       - Case Narrative
- 3D/Canvas Renderer <- - Evidence Board
- Reaction Calc        - Virtual Lab
```

## Konfigurasi
- Env: VITE_CHEMSPHERE_API_URL (default http://localhost:3000/api)
- Env: VITE_CHEMSPHERE_VISUALIZER_URL
