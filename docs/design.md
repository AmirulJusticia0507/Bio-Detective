# Design

## Visual & UX
- Tema laboratorium forensik, gelap-netral dengan aksen warna reaksi (indikator pH, endapan).
- Dukungan Dark Mode (toggle + preferensi sistem) dengan token warna Tailwind.
- Layout: panel kasus/narasi, area lab interaktif, Deduction Board drag-and-drop, Learning Hub.
- Feedback visual: animasi perubahan warna, skala molekuler, pemisahan pigmen TLC.
- Responsif untuk desktop/tablet; canvas skalabel. PWA: installable, offline cache aset.

## Mekanika
- Story Progressing bercabang sederhana berdasarkan ketepatan analisis.
- Daftar tersangka & alibi yang diperbarui saat fakta ditemukan.
- Validation Check pada node bukti sebelum vonis akhir.
- Glossary & Post-Mortem Analysis untuk pembelajaran.

## Aksesibilitas & Keamanan
- Tidak ada bahaya fisik (simulasi).
- Teks edukasi ringkas; dukung bahasa Indonesia.
