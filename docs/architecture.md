# Arsitektur

## Lapisan
```
+-----------------------------------------------------------------------+
| FRONTEND LAYER                                                        |
|  - Framework: Vue 3 / React.js (Vite)                                |
|  - Interactive Canvas: HTML5 Canvas / Pixi.js                        |
|  - UI: Tailwind CSS                                                  |
+-----------------------------------------------------------------------+
| (REST API / WebSocket)                                               |
+-----------------------------------------------------------------------+
| BACKEND LAYER                                                         |
|  - Engine Core: Node.js (Express/NestJS) atau Python (FastAPI)        |
|  - Game Logic: rules engine validasi uji kimia & vonis                |
|  - Auth: JWT                                                         |
+-----------------------------------------------------------------------+
| DATABASE LAYER                                                        |
|  - PostgreSQL / MongoDB: kasus, node bukti, reagen, progress, skor    |
+-----------------------------------------------------------------------+
```

## Modul
- Case Engine: narasi bercabang, tersangka, alibi.
- Virtual Lab: mini-games reagen, TLC, serologi/DNA.
- Deduction Engine: node canvas, validasi logika.
- Learning Hub: glossary, post-mortem.

## Komunikasi
- REST untuk CRUD kasus/progress; WebSocket untuk update realtime lab/board.
- Auth JWT pada setiap request terproteksi.
