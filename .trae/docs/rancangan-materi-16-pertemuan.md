# Rancangan Materi Pembelajaran Web Programming (16 Pertemuan)

## Prinsip Penyusunan

- Pola progresif: dasar → intermediet → aplikasi/sintesis.
- Durasi tiap pertemuan: 150 menit.
- Metode campuran: ceramah, diskusi, praktik terstruktur, penugasan.
- Strategi pengajaran tanpa live coding; praktik berbasis worksheet, studi kasus, dan tugas bertahap.
- Materi JavaScript/TypeScript tidak dibahas ulang karena menjadi prasyarat dari mata kuliah Algoritma Pemrograman.
- Fokus materi: mini proyek Note App dimulai dari HTML (pertemuan 1), dilanjutkan CSS (pertemuan 2), lalu transisi ke React TypeScript + Vite (pertemuan 3), dan Express.js pada fase intermediet-lanjut.
- Evaluasi formatif rutin sebelum proyek kecil (pertemuan 1–7).

## Rencana 16 Pertemuan

- **Pertemuan 1 — HTML Dasar**
  - Tujuan terukur: Mahasiswa mampu menyusun dokumen HTML dari struktur paling dasar (`doctype`, `head`, `body`) sampai semantic layout untuk kerangka Note App.
  - Kompetensi utama: Fondasi struktur konten web yang benar dan aksesibel.
  - Aktivitas: Ceramah konsep inti, diskusi fungsi tag, praktik bertahap dari halaman kosong hingga kerangka halaman Note App.
  - Indikator penilaian: Minimal 10 tag semantik digunakan tepat; struktur heading benar; kerangka HTML Note App lulus rubrik minimal 75.
  - Alokasi waktu: Ceramah 40m, diskusi 20m, praktik 80m, refleksi 10m.
- **Pertemuan 2 — CSS Dasar**
  - Tujuan terukur: Mahasiswa mampu menerapkan CSS mulai dari pemasangan stylesheet, selector, box model, typography, hingga layout card dan form Note App yang rapi.
  - Kompetensi utama: Kemampuan styling antarmuka yang rapi dan konsisten.
  - Aktivitas: Ceramah konsep CSS dasar, diskusi contoh visual, praktik memoles kerangka HTML pertemuan 1 menjadi tampilan Note App modern minimalis.
  - Indikator penilaian: Layout responsif dasar tercapai; form dan card ter-styling baik; hasil styling konsisten dengan struktur HTML pertemuan 1; kuis CSS minimal 70.
  - Alokasi waktu: Ceramah 35m, diskusi 20m, praktik 85m, kuis 10m.
- **Pertemuan 3 — React JS + Vite untuk Note App**
  - Tujuan terukur: Mahasiswa mampu menyiapkan proyek React TypeScript dengan Vite, menjelaskan struktur proyek hasil instalasi, lalu membangun komponen Note App secara bertahap.
  - Kompetensi utama: Pemodelan UI berbasis komponen React TypeScript dengan alur pengembangan terstruktur.
  - Aktivitas: Ceramah konsep React dasar, diskusi struktur proyek Vite, praktik langkah demi langkah (buat file tipe data, komponen, integrasi, dan verifikasi tiap langkah).
  - Indikator penilaian: Project React TypeScript berjalan; struktur folder dipahami; komponen `NoteHeader`, `NoteCard`, `NoteList` terintegrasi di `App.tsx`; verifikasi fungsionalitas per langkah dilakukan.
  - Alokasi waktu: Ceramah 35m, diskusi 15m, praktik 90m, umpan balik 10m.
- **Pertemuan 4 — State, Event Handling, dan Conditional Rendering**
  - Tujuan terukur: Mahasiswa mampu memakai `useState`, `useEffect`, dan `useReducer`
  - Kompetensi utama: Interaktivitas antarmuka React.
  - Aktivitas: Ceramah fondasi state, diskusi alur perubahan data, praktik bertingkat dari form sederhana ke reducer.
  - Indikator penilaian: State berubah sesuai aksi pengguna; UI kondisional tepat; kuis formatif minimal 70.
  - Alokasi waktu: Ceramah 35m, diskusi 20m, praktik 85m, kuis 10m.
- **Pertemuan 5 — Form, Validasi, dan List Rendering di React**
  - Tujuan terukur: Mahasiswa mampu menghubungkan form React ke API secara aman, termasuk validasi input dan feedback error.
  - Kompetensi utama: Pengelolaan input-output data pada aplikasi React.
  - Aktivitas: Ceramah konsep request-response dasar, diskusi error handling, praktik GET dan POST bertahap.
  - Indikator penilaian: Form valid; pesan error jelas; list rendering benar.
  - Alokasi waktu: Ceramah 30m, diskusi 20m, praktik 90m, refleksi 10m.
- **Pertemuan 6 — Routing React dan Integrasi API Dasar**
  - Tujuan terukur: Mahasiswa mampu membangun route tree yang konsisten, menambah menu navigasi, dan memvalidasi path agar bebas bug.
  - Kompetensi utama: Struktur aplikasi React dan integrasi data eksternal.
  - Aktivitas: Ceramah konsep URL dan segment, diskusi desain route, praktik implementasi routing type-safe.
  - Indikator penilaian: Route utama berfungsi; data API tampil benar; loading/error state berjalan.
  - Alokasi waktu: Ceramah 35m, diskusi 20m, praktik 85m, kuis 10m.
- **Pertemuan 7 — Arsitektur Proyek React & Finalisasi Persiapan Proyek**
  - Tujuan terukur: Mahasiswa mampu menerapkan autentikasi dasar (login, sesi, proteksi endpoint) sebagai fondasi sebelum proyek kecil.
  - Kompetensi utama: Perencanaan teknis sebelum implementasi proyek.
  - Aktivitas: Ceramah konsep auth paling dasar, diskusi alur token, praktik login-client dan proteksi API.
  - Indikator penilaian: Login berfungsi; endpoint terproteksi; alur auth lulus uji skenario.
  - Alokasi waktu: Ceramah 30m, diskusi 30m, praktik 80m, kuis 10m.
- **Pertemuan 8 — Proyek Kecil: Note App Interaktif**
  - Tujuan terukur: Mahasiswa mampu merancang dan mengimplementasikan mini aplikasi berbasis React sesuai requirement inti.
  - Kompetensi utama: Integrasi konsep pertemuan 1–7 dalam produk fungsional.
  - Aktivitas: Brief proyek, praktik implementasi, presentasi progres.
  - Indikator penilaian: Penilaian berbasis rubrik proyek kecil.
  - Alokasi waktu: Brief 20m, pengerjaan 100m, review 20m, penutup 10m.
- **Pertemuan 9 — Express.js Dasar: Server, Routing, dan Struktur API**
  - Tujuan terukur: Mahasiswa mampu membangun server Express.js, membuat route dasar, dan menjalankan API lokal.
  - Kompetensi utama: Fondasi backend menggunakan Express.js.
  - Aktivitas: Ceramah, diskusi konsep request-response, praktik implementasi endpoint.
  - Indikator penilaian: Endpoint GET/POST aktif, response sesuai kontrak, kuis formatif minimal 70.
  - Alokasi waktu: Ceramah 40m, diskusi 15m, praktik 85m, refleksi 10m.
- **Pertemuan 10 — Express.js Middleware, Validasi, dan Error Handling**
  - Tujuan terukur: Mahasiswa mampu menerapkan middleware logging, validasi request, dan penanganan error terpusat.
  - Kompetensi utama: Keandalan API backend.
  - Aktivitas: Ceramah, diskusi studi kasus, praktik middleware.
  - Indikator penilaian: Middleware berjalan benar, validasi request aktif, error response konsisten.
  - Alokasi waktu: Ceramah 35m, diskusi 20m, praktik 85m, kuis 10m.
- **Pertemuan 11 — Integrasi Express.js dengan Database**
  - Tujuan terukur: Mahasiswa mampu menghubungkan Express.js dengan database dan mengimplementasikan operasi CRUD.
  - Kompetensi utama: Persistensi data backend.
  - Aktivitas: Ceramah, diskusi desain data, praktik koneksi database.
  - Indikator penilaian: CRUD backend berjalan, skema data konsisten, kuis formatif minimal 70.
  - Alokasi waktu: Ceramah 35m, diskusi 20m, praktik 85m, kuis 10m.
- **Pertemuan 12 — Autentikasi Dasar pada Express.js**
  - Tujuan terukur: Mahasiswa mampu menerapkan autentikasi dasar (login/logout), proteksi route, dan manajemen token/sesi sederhana.
  - Kompetensi utama: Keamanan dasar backend.
  - Aktivitas: Ceramah, diskusi skenario keamanan, praktik implementasi autentikasi.
  - Indikator penilaian: Login berfungsi, route terproteksi, validasi autentikasi terpenuhi.
  - Alokasi waktu: Ceramah 40m, diskusi 15m, praktik 85m, refleksi 10m.
- **Pertemuan 13 — Integrasi React + Express.js (Full-Stack Dasar)**
  - Tujuan terukur: Mahasiswa mampu menghubungkan aplikasi React dengan API Express.js untuk fitur CRUD end-to-end.
  - Kompetensi utama: Integrasi frontend-backend.
  - Aktivitas: Ceramah, diskusi troubleshooting, praktik integrasi aplikasi.
  - Indikator penilaian: Integrasi berjalan stabil, error handling dasar tersedia, alur data lengkap.
  - Alokasi waktu: Ceramah 30m, diskusi 20m, praktik 90m, umpan balik 10m.
- **Pertemuan 14 — Kualitas Aplikasi: Testing Dasar & Debugging**
  - Tujuan terukur: Mahasiswa mampu melakukan uji fungsi utama dan memperbaiki bug prioritas tinggi.
  - Kompetensi utama: Jaminan kualitas dasar.
  - Aktivitas: Ceramah, praktik test case, klinik debugging.
  - Indikator penilaian: Minimal 5 test case manual lulus, bug kritis terselesaikan.
  - Alokasi waktu: Ceramah 30m, diskusi 20m, praktik 90m, refleksi 10m.
- **Pertemuan 15 — Deployment React + Express.js**
  - Tujuan terukur: Mahasiswa mampu melakukan deployment frontend React dan backend Express.js pada lingkungan produksi sederhana.
  - Kompetensi utama: Operasional aplikasi full-stack pada lingkungan nyata.
  - Aktivitas: Ceramah, diskusi strategi deployment, praktik deploy terstruktur.
  - Indikator penilaian: Frontend dan backend berhasil online, konfigurasi environment benar.
  - Alokasi waktu: Ceramah 35m, diskusi 15m, praktik 90m, review 10m.
- **Pertemuan 16 — Sintesis Akhir: Presentasi Produk & Refleksi**
  - Tujuan terukur: Mahasiswa mampu mempresentasikan arsitektur, keputusan teknis, dan evaluasi pengembangan aplikasi.
  - Kompetensi utama: Komunikasi teknis dan sintesis pembelajaran.
  - Aktivitas: Presentasi, diskusi panel, refleksi akhir.
  - Indikator penilaian: Presentasi runtut, demo stabil, refleksi berbasis evidensi pembelajaran.
  - Alokasi waktu: Presentasi 100m, diskusi 30m, refleksi 20m.

## Rincian Khusus Pertemuan 8: Proyek Kecil

### 1) Jenis Proyek

- Mini Project: **Note App Interaktif berbasis React**.

### 2) Lingkup Tugas

- Wajib:
  - Tambah catatan (Create).
  - Tampilkan daftar catatan (Read).
  - Edit catatan (Update).
  - Hapus catatan (Delete).
  - Pencarian atau filter sederhana.
  - Validasi input judul/konten.
- Nilai tambah:
  - Persistensi localStorage.
  - Kategori/tag.
  - Mode gelap.

### 3) Kriteria Penilaian Proyek

- Fungsionalitas inti CRUD: **40%**
- Kualitas UI/UX (konsistensi, keterbacaan, responsif): **20%**
- Struktur kode (komponen, modularitas, keterbacaan): **20%**
- Validasi & error handling: **10%**
- Presentasi/demo teknis: **10%**

### 4) Sumber Daya yang Dibutuhkan

- Perangkat: laptop, Node.js LTS, npm, editor kode, browser modern.
- Referensi: dokumentasi React, materi pertemuan 1–7, repositori starter kelas.
- Kolaborasi: individu atau tim 2 orang.

### 5) Tenggat Waktu Penyelesaian

- Brief dan kickoff: saat pertemuan ke-8.
- Checkpoint progres: akhir pertemuan ke-8.
- Pengumpulan final: **H+3 pukul 23.59** setelah pertemuan ke-8.
- Format submit: tautan repository + video demo 3–5 menit + ringkasan fitur.

## Evaluasi Formatif Pra-Proyek (Pertemuan 1–7)

- **Pertemuan 1**
  - Bentuk evaluasi: Kuis HTML dasar + latihan kerangka Note App.
  - Tujuan monitoring: Memastikan fondasi struktur semantik sudah kuat untuk mini proyek.
  - Ambang kesiapan: Kuis minimal 70, kerangka HTML Note App minimal 75.
- **Pertemuan 2**
  - Bentuk evaluasi: Kuis CSS dasar + tugas styling Note App dari kerangka HTML pertemuan 1.
  - Tujuan monitoring: Memastikan kesiapan visual dan layout sebelum transisi ke React.
  - Ambang kesiapan: Kuis minimal 70, tugas styling minimal 75.
- **Pertemuan 3**
  - Bentuk evaluasi: Checklist setup React TypeScript + tugas integrasi komponen bertipe.
  - Tujuan monitoring: Memastikan kesiapan implementasi UI berbasis komponen dengan alur file-by-file dan verifikasi.
  - Ambang kesiapan: Setup Vite React-TS selesai, struktur proyek dipahami, minimal 3 komponen reusable terintegrasi dan tervalidasi.
- **Pertemuan 4**
  - Bentuk evaluasi: Kuis state-event + latihan interaksi.
  - Tujuan monitoring: Memastikan pemahaman state dasar untuk fitur proyek.
  - Ambang kesiapan: Kuis minimal 70, fitur interaksi berjalan.
- **Pertemuan 5**
  - Bentuk evaluasi: Latihan form, validasi, dan list rendering.
  - Tujuan monitoring: Memastikan kesiapan membangun input serta tampilan data proyek.
  - Ambang kesiapan: Validasi dan list rendering berjalan sesuai rubrik.
- **Pertemuan 6**
  - Bentuk evaluasi: Tugas routing + integrasi API.
  - Tujuan monitoring: Memastikan alur halaman dan data eksternal siap dipakai pada proyek.
  - Ambang kesiapan: Route utama dapat diakses; data API tampil dengan loading/error state.
- **Pertemuan 7**
  - Bentuk evaluasi: Proposal proyek + review arsitektur.
  - Tujuan monitoring: Mengukur kesiapan implementasi proyek kecil.
  - Ambang kesiapan: Proposal disetujui dan struktur aplikasi dinyatakan layak.

## Ringkasan Capaian Akhir

- Mahasiswa mampu membangun aplikasi web dari fondasi frontend hingga integrasi backend dasar.
- Mahasiswa mampu menerapkan proses pengembangan bertahap: desain, implementasi, evaluasi, dan perbaikan.
- Mahasiswa mampu mengomunikasikan hasil teknis secara terstruktur melalui presentasi dan refleksi.
