
📄 System Concept & Technical Specification Document
Nama Proyek: ForensiLab AI / Bio-Detective

Jenis Sistem: Gamifikasi Edukasi Interaktif Web-based

Target Pengguna: Siswa SMA, Mahasiswa (Sains/Farmasi/Kimia/Biologi), & Masyarakat Umum

1. Pendahuluan & Ringkasan Eksekutif
   1.1 Latar Belakang
   Metode pembelajaran sains (khususnya Kimia dan Biokimia) di Indonesia mayoritas berbasis teori, hafalan rumus, dan teks hafalan. Banyak institusi pendidikan menghadapi keterbatasan alat laboratorium fisik dan risiko keamanan eksperimen. Sistem ini menghadirkan simulasi laboratorium forensik interaktif berbasis narasi investigasi untuk meningkatkan pemahaman prinsip sains secara intuitif.

1.2 Tujuan Sistem
Mengubah materi reaksi kimia, toksikologi, dan biokimia menjadi puzzle mechanics kontekstual.

Menyediakan wadah eksperimen simulasi tanpa risiko bahaya fisik (aman & fleksibel).

Melatih pemikiran kritis (critical thinking) melalui analisis penalaran bukti sains (deduksi forensik).

2. Fitur & Modul Utama (Functional Requirements)
   2.1 Modul Manajemen Kasus & Narasi (Case Engine)
   Story Progressing System: Alur cerita bercabang sederhana (branching/linear narrative) berdasarkan ketepatan analisis uji sains.

Daftar Tersangka & Alibi: Profil tersangka beserta log alibi yang diperbarui seiring ditemukannya fakta laboratorium.

2.2 Modul Virtual Laboratory (Eksperimentasi Interaktif)
Modul ini berisi mini-games mekanika sains nyata:

Toksikologi & Uji Reagen Kimia:

Fitur penetesan reagen ke sampel uji.

Animasi perubahan warna (endapan, perubahan pH, atau pembentukan gas).

Penjelasan visual skala mikroskopis/molekuler saat reaksi berlangsung.

Kromatografi Lapis Tipis (TLC) & Spektroskopi Visual:

Fitur pemisahan pigmen/senyawa pada kertas saring/pelarut.

Pembandingan nilai
R
f
R
f

  (Retention Factor) sampel TKP vs sampel tersangka.

Serologi & Uji Bercak Darah / DNA:

Uji aglutinasi ABO/Rhesus.

Pencocokan pola elektroforesis gel DNA (DNA Fingerprinting).

2.3 Modul Papan Bukti & Deductive Board (Deduction Engine)
Visual Graph/Node Canvas: Antarmuka drag-and-drop tempat pemain menghubungkan:

[Sampel Bukti Labs]
⟶
[Fakta Sains]
⟶
[Penyangkalan Alibi Tersangka]
[Sampel Bukti Labs]⟶[Fakta Sains]⟶[Penyangkalan Alibi Tersangka]
Validation Check: Sistem memeriksa logis tidaknya hubungan node sebelum vonis akhir diproses.

2.4 Modul Feedback Edukasi Dynamic (Learning Hub)
Glossary & Science Handbook: Ensklopedia mini berisi teori dasar kimia/biologi yang terkait dengan kasus yang sedang dimainkan.

Post-Mortem Analysis (Pembahasan Eksperimen): Penjelasan rinci mengapa suatu uji reaksi berhasil/gagal serta relevansi rumus reaksinya.

3. Arsitektur Teknis & Stack Teknologi
   +-----------------------------------------------------------------------+
   |                             FRONTEND LAYER                            |
   |  - Framework: Vue 3 / React.js (Vite)                                 |
   |  - Interactive Canvas: HTML5 Canvas / Pixi.js (Simulasi Lab & Node)   |
   |  - UI Component/Styling: Tailwind CSS                                 |
   +-----------------------------------------------------------------------+
   | (REST API / WebSocket)
   +-----------------------------------------------------------------------+
   |                             BACKEND LAYER                             |
   |  - Engine Core: Node.js (Express/NestJS) atau Python (FastAPI)        |
   |  - Game Logic: Rules engine untuk validasi uji kimia & vonis          |
   |  - Authentication: JWT Auth                                           |
   +-----------------------------------------------------------------------+
   |
   +-----------------------------------------------------------------------+
   |                            DATABASE LAYER                             |
   |  - PostgreSQL / MongoDB: Menyimpan kasus, node bukti, reagen, user    |
   |    progress, dan skor/pencapaian.                                     |
   +-----------------------------------------------------------------------+
4. Rencana Kasus Perdana (MVP Pilot Case)
   Judul Kasus: "Sianida dalam Cangkir Kopi"

Tujuan Edukasi: Memahami uji kromatografi sederhana, konsep inhibisi enzim (respirasi selular oleh sianida), dan analisis pH.

Tersangka:

Barista Kafe (Punya akses bahan pembersih mesin kopi bertoksisitas tinggi).

Rekan Bisnis (Membeli racun sianida industri cair).

Pelayan Kafe (Memiliki konflik pribadi).

Siklus Permainan MVP:

Ambil sampel sisa kopi di meja TKP.

Lakukan uji perubahan warna reagen FeSO₄ + FeCl₃ (Uji Biru Prusia untuk Sianida).

Cocokkan bercak racun dari botol di saku Rekan Bisnis via kromatografi.

Hubungkan hasil lab di Papan Bukti untuk membuktikan Rekan Bisnis sebagai pelaku.
