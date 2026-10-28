# Todo List

## MVP: "Sianida dalam Cangkir Kopi"
- [x] Setup project scaffold (frontend + backend + DB)
- [x] Implementasi Dark Mode (toggle + sistem preferensi)
- [x] Implementasi PWA (manifest, service worker, offline cache)
- [x] Implementasi Case Engine (narasi, tersangka, alibi)
- [x] Virtual Lab: uji reagen FeSO₄ + FeCl₃ (Biru Prusia)
- [x] Virtual Lab: kromatografi TLC & perbandingan Rf
- [x] Virtual Lab: serologi/DNA fingerprinting (opsional MVP)
- [x] Deduction Board drag-and-drop + validation check
- [x] Learning Hub: glossary & post-mortem
- [x] Auth JWT & progress/skor
- [x] Testing & QA
- [x] Deploy & dokumentasi

## Backlog / Post-MVP
- [x] Kartu modul di grid `[Work]` belum bisa diklik → tambahkan klik/navigasi (scroll ke lab atau route) + keyboard focus, bukan cuma hover style.
- [ ] Fitur perlu ditingkatkan:
  - [x] Multi-case support (rendering sekarang data-driven via `cases` array + `activeId`).
  - [x] Case navigation antar kasus (case switcher di hero).
  - [ ] Progress & skor user terhubung ke auth JWT backend.
  - [ ] ChemSphere panel: tampilkan error state saat fetch gagal.
