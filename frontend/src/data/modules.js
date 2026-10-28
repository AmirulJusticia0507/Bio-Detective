export const modules=[
  {
    id:'module-reagent',
    icon:'⚗️',
    badge:'LAB 01',
    title:'Reagent Lab',
    tagline:'Uji Biru Prusia',
    category:'Kimia Analitik',
    desc:'Ruang kerja pertama detektif kimia. Teteskan FeSO₄ lalu FeCl₃ ke ekstrak sampel — jika ion sianida menyusup di dalamnya, senyawa biru prusia yang ikonik akan muncul, tes yang sama dipakai saat mencium "aroma bitter almond" di TKP.',
    tasks:['Ambil dan siapkan ekstrak sampel sisa kopi','Teteskan reagen FeSO₄ ke tabung reaksi','Tambahkan FeCl₃ dan amati perubahan warna','Catat hasil: biru prusia = indikasi CN⁻'],
    science:['CN⁻ bereaksi dengan Fe³⁺ membentuk kompleks Fe₄[Fe(CN)₆]₃ yang berwarna biru pekat','Reaksi ini kualitatif: hanya menunjukkan ada/tidaknya sianida, bukan jumlahnya','Sianida mematikan dengan meracuni sitokrom c oksidase sehingga sel tak bisa memakai oksigen']
  },
  {
    id:'module-tlc',
    icon:'🧪',
    badge:'LAB 02',
    title:'TLC Lab',
    tagline:'Kromatografi Lapis Tipis',
    category:'Kimia Analitik',
    desc:'Ampul kopi di TKP sudah terpetakan, kini saatnya mengonfrontasi tersangka. Titikkan setiap sampel pada plat lapis tipis, biarkan fase gerak mengangkat zatnya, lalu bandingkan jarak tempuhnya. Sampel yang berjalan sejauh sianida murni akan mulai berbicara.',
    tasks:['Titikkan sampel TKP dan sampel tersangka pada plat TLC','Jalankan fase gerak dan biarkan zat naik','Bandingkan nilai Rf sampel vs sianida kontrol','Tentukan sampel dari siapa yang cocok (match)'],
    science:['Rf = jarak zat ÷ jarak pelarut; nilainya konstan untuk zat yang sama pada kondisi kromatografi yang sama','Fenomena kapileritas memindahkan sampel seperti tinta yang merambat naik di tisu','TLC memisahkan zat, tetapi tidak mengukurnya secara kuantitatif — untuk itu ada HPLC/GC-MS']
  },
  {
    id:'module-serology',
    icon:'🧬',
    badge:'LAB 03',
    title:'Serology Lab',
    tagline:'Serologi & DNA Fingerprint',
    category:'Biologi Forensik',
    desc:'Sianida menjawab "apa", kini bukti harus menunjuk "siapa". Uji aglutinasi ABO/Rh mempersempit golongan darah, dan sidik jari DNA memetakan pola pita yang unik untuk tiap orang — jejak biologis yang nyaris mustahil dipalsukan.',
    tasks:['Uji aglutinasi ABO/Rh pada sampel darah di TKP','Bandingkan pola pita DNA tersangka vs sampel TKP','Tandai pita-pita DNA yang cocok','Susun kesimpulan biologis untuk Deduction Board'],
    science:['Aglutinin anti-A/anti-B membuat darah menggumpal sesuai antigen di permukaan sel darah merah','DNA dipotong enzim restriksi lalu dipisahkan dengan elektroforesis — pola pita jadi "sidik jari" tubuh','Kecuali kembar identik, tak ada dua orang dengan pola DNA yang persis sama']
  },
  {
    id:'module-deduction',
    icon:'🕸️',
    badge:'PAPAN 01',
    title:'Deduction Board',
    tagline:'Papan Deduksi',
    category:'Logika & Vonis',
    desc:'Papan gabus detektif: silangkan tersangka, alibi, motif, dan bukti lab. Seret node, hubungkan jalur penalaran, lalu runtuhkan temuannya — karena bukti tanpa logika hanya kumpulan warna di tabung.',
    tasks:['Seret node bukti, tersangka, dan hasil lab ke papan','Hubungkan jalur: motif → kesempatan → bukti','Periksa konsistensi alibi dengan urutan waktu','Ajukan vonis dan lihat apakah papan menvalidasinya'],
    science:['Penalaran forensik menuntut rantai konsisten: motive, opportunity, means, dan bukti fisik','Satu bukti yang bertentangan cukup untuk membatalkan vonis — itulah mengapa alibi diperiksa ulang','Papan deduksi memodelkan cara penyidik nyata menyusun kasus sebelum diserahkan ke pengadilan']
  },
  {
    id:'module-learning',
    icon:'📚',
    badge:'BELAJAR 01',
    title:'Learning Hub',
    tagline:'Glosarium & Post-Mortem',
    category:'Edukasi',
    desc:'Arsip detektif: teori dasar dari tiap uji, istilah kimia-biologi yang muncul di kasus, dan post-mortem — bedah kesalahan penalaran setelah kasus ditutup. Bagian yang mengubah pemain menjadi peneliti.',
    tasks:['Buka glosarium istilah: CN⁻, Rf, aglutinin, dsb.','Kenali teori di balik tiap uji lab','Baca post-mortem kasus setelah game selesai','Coba kuis mini untuk mengunci pemahaman'],
    science:['Belajar lewat konteks kasus (case-based learning) nyaris selalu lebih cepat daripada menghafal definisi','Post-mortem menunjukkan di mana intuisi salah dan bukti benar','Materi disusun agar cocok untuk jenjang SMA sampai mahasiswa']
  },
  {
    id:'module-chemsphere',
    icon:'🔮',
    badge:'DATA 01',
    title:'ChemSphere',
    tagline:'Ensiklopedia Senyawa',
    category:'Database Sains',
    desc:'Ruang luas di luar modul kasus: database senyawa dan elemen untuk melihat wujud, sifat, dan peran tiap zat di lab. Sumber yang bagus untuk menenangkan intuisi — data dulu, teori kemudian.',
    tasks:['Jelajahi daftar senyawa/elemen dari API ChemSphere','Amati simbol, wujud, dan sifat tiap zat','Kenali senyawa berbahaya yang relevan dengan kasus','Bandingkan dengan definisi di Learning Hub'],
    science:['Data diambil dari API lokal (backend :4000) — pastikan backend sudah berjalan','ChemSphere memetakan senyawa secara ringkas: nama, simbol, dan kategori','Modul ini juga menunjukkan sisi sains data: API, fetch, serta state loading/error']
  }
]
