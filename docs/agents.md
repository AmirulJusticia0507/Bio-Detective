# Agents

Dokumentasi peran agen yang terlibat dalam pengembangan dan operasional Bio-Detective.

## 1. Product Agent
- Menentukan fitur, ruang lingkup MVP, dan prioritas kasus (pilot "Sianida dalam Cangkir Kopi").
- Menjaga kesesuaian edukasi sains dengan target SMA/mahasiswa/masyarakat umum.

## 2. Game Design Agent
- Merancang mekanika mini-games (uji reagen, TLC, serologi/DNA fingerprinting).
- Menyusun narasi bercabang, daftar tersangka, alibi, dan siklus permainan.

## 3. Frontend Agent
- Implementasi UI dengan Vue 3/React + Vite, Tailwind CSS.
- Integrasi canvas interaktif (HTML5 Canvas/Pixi.js) untuk simulasi lab dan Deduction Board drag-and-drop.

## 4. Backend Agent
- Membangun engine core (Node.js Express/NestJS atau Python FastAPI).
- Rules engine validasi uji kimia & vonis; autentikasi JWT; REST API/WebSocket.

## 5. Data Agent
- Skema database PostgreSQL/MongoDB: kasus, node bukti, reagen, progress user, skor/pencapaian.
- Migrasi dan seeding data kasus/reagen.

## 6. QA Agent
- Pengujian fungsional mini-games, validasi node Deduction Board, dan regresi.
- Uji performa canvas dan responsivitas UI.

## 7. DevOps Agent
- Build/deploy, environment config, CI/CD, monitoring.

## Aturan Eksekusi Task
- Setiap task selesai wajib langsung `git commit` dan `git push` tanpa menunggu konfirmasi user.
- Setelah push, langsung lanjut ke task berikutnya tanpa meminta konfirmasi.
- Commit message ringkas dan deskriptif sesuai perubahan.
