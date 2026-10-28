export const cases=[
  {
    id:'cyanide',
    number:'01',
    title:'Sianida dalam Cangkir Kopi',
    status:'BELUM TERPECAHKAN',
    difficulty:'Menengah',
    location:'Kafe Haido, Lantai 2 — meja dekat jendela',
    time:'Pukul 07.40 WIB',
    narrative:"Pagi yang seharusnya biasa. Raka Wibisono, pengusaha kopi muda, tengah rapat pagi bersama rekan bisnisnya di Kafe Haido. Satu teguk latte... dan ia roboh. Gelas jatuh, kursi tersingkir, dan seluruh kafe bungkam. Petugas menemukan ampul kopi yang menyentuh bibir hanya si korban. Tiga orang paling dekat dengan gelas itu kini jadi sorotan. Tangan siapakah yang menuang racun diam-diam?",
    victim:{
      name:'Raka Wibisono',
      role:'Korban — Pengusaha kopi',
      cause:'Kegagalan napas akut akibat racun sianida (KCN)',
      note:'Ampul yang sama hanya digunakan oleh korban. Aroma bitter almond samar tercium di sisa kopi.'
    },
    suspects:[
      { name:'Barista Kafe', role:'Penyajir minuman', alibi:'Membuat latte di bar, terlihat banyak saksi.', note:'Lama kontak gelas tercepat. Akses ke gudang bahan: lembur semalam.', motive:'Berdebat soal gaji selama kafe sepi.' },
      { name:'Rekan Bisnis', role:'Mitra usaha', alibi:'Duduk di meja korban sepanjang rapat.', note:'Berdebat hangat 10 menit sebelum gelas datang. Yang terakhir menyentuh sosok korban.', motive:'Rencana kerja sama ternyata berujung sengketa kepemilikan.' },
      { name:'Pelayan Kafe', role:'Pengantar meja', alibi:'Mengantar gelas latte ke meja korban.', note:'Satu-satunya yang memegang ampul dalam perjalanan — 20 detik di jalan.', motive:'Berutang besar pada korban.' }
    ],
    evidence:[
      'Sisa kopi ditemukan mengandung ion CN⁻',
      'Uji Biru Prusia: FeSO₄ + FeCl₃ pada ekstrak sisa kopi',
      'Perbandingan Rf TLC sampel vs sianida murni',
      'Ampul hanya menyentuh bibir korban'
    ],
    steps:['Ambil sampel sisa kopi','Uji Biru Prusia','Cocokkan TLC']
  }
];

