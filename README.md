# Riyan's Little Universe

Website statis GitHub Pages milik **Riyan Sumarno a.k.a Riyan Giting**. Isinya quotes receh, nyeleneh, serius, mimpi, cinta, kehidupan, pencapaian, visi, impian, Super Power, **KehiduPUNK**, mini game, Link Mimpi tanpa login, dan Dinding Mimpi publik.

## Prinsip teknis

Website tetap ringan dan cocok untuk GitHub Pages:

- `index.html`
- `style.css`
- `script.js`
- tidak memakai framework
- tidak memakai database eksternal
- tidak memakai backend sendiri
- tidak memakai token GitHub di browser
- tidak menyertakan file font tambahan

Tipografi memakai font yang sudah tersedia pada sistem pengguna dengan kombinasi gaya kawaii dan punk.

## Titip Mimpi: dua mode

### 1. Link Mimpi — tanpa login dan tanpa database

Ini adalah mode paling murni untuk GitHub Pages statis.

1. Pengunjung menulis mimpi dan nama panggilan.
2. Klik **Buat Link Mimpi — tanpa login**.
3. Website menyimpan teks mimpi di bagian `#hash` URL, bukan pada server.
4. Pengunjung dapat menyalin atau membagikan tautan melalui fitur share bawaan perangkat.
5. Siapa pun yang membuka tautan akan melihat kartu mimpi tersebut di website.

Konsekuensinya: Link Mimpi tidak otomatis masuk ke daftar global karena tidak ada server/database yang menerima dan mengumpulkan kiriman.

### 2. Dinding Mimpi GitHub — publik dan teragregasi

Fitur ini memakai GitHub Issues sebagai media publik.

1. Pengunjung menulis mimpi pada form.
2. Tombol **Masuk Dinding Publik via GitHub** membuka halaman pembuatan Issue yang sudah terisi otomatis.
3. Pengunjung login GitHub dan menekan **Submit new issue**.
4. Website membaca Issue publik berjudul `[MIMPI]` melalui GitHub REST API.
5. Issue muncul sebagai kartu di **Dinding Mimpi GitHub**.

Tidak ada database tambahan. Data publik berada di GitHub Issues.

### Penting

- Menu **Issues** repository harus aktif untuk Dinding Mimpi GitHub.
- Pengiriman ke dinding teragregasi memerlukan akun GitHub karena penulisan Issue membutuhkan autentikasi.
- Jangan menaruh Personal Access Token pada `script.js`; file GitHub Pages dapat dibaca publik.
- Jika ada kiriman tidak pantas, tutup (`Close`) Issue. Website hanya membaca Issue yang masih terbuka.
- Website memakai cache sesi selama tiga menit untuk mengurangi permintaan GitHub API publik.

## Kontak & media sosial

Bagian **Kontak & jejak digital** mencoba membaca halaman statis Blogger:

`https://riyangiting.blogspot.com/p/kontak-riyan.html`

Website menggunakan feed halaman publik Blogger dan hanya mengekstrak tautan media sosial/kontak. Konten mentah halaman tidak dimasukkan ke DOM. Jika feed tidak dapat diakses, tombol menuju halaman kontak resmi tetap tersedia sebagai fallback.

## Deteksi repository otomatis

Jika website diakses dari pola normal GitHub Pages:

`https://OWNER.github.io/REPOSITORY/`

`script.js` akan mendeteksi `OWNER` dan `REPOSITORY` secara otomatis.

Untuk custom domain, isi pada `script.js`:

```js
const GITHUB_FALLBACK = {
  owner: 'username-github',
  repo: 'nama-repository'
};
```

## Mengaktifkan GitHub Pages

1. Upload semua file ke branch utama repository.
2. Buka **Settings → Pages**.
3. Pilih **Deploy from a branch**.
4. Pilih branch `main` dan folder `/(root)`.
5. Simpan.
6. Jika ingin memakai Dinding Mimpi GitHub, pastikan **Settings → General → Features → Issues** aktif.

## Fitur interaktif

- sticky navigation + mobile menu
- active menu indicator
- random quote spotlight
- filter kategori quotes
- copy quote
- 34 quote termasuk kategori KehiduPUNK
- tipografi kawaii × punk tanpa file font tambahan
- maskot kawaii interaktif
- Link Mimpi tanpa login/database
- Web Share API untuk berbagi Link Mimpi dari smartphone
- Dinding Mimpi GitHub sebagai opsi publik teragregasi
- mimpi pribadi melalui `localStorage`
- game **Tangkap Bintang Bandel** dengan combo, target kabur, dan bintang palsu
- permainan **Kamu betah di semesta ini?**
  - desktop: tombol “nggak” kabur saat didekati
  - smartphone/tablet: tombol “nggak” kabur saat disentuh
  - tombol “iya” makin besar
- kontak/media sosial dari halaman Blogger resmi
- tombol scroll-to-top
- responsive desktop, tablet, dan mobile
- menghormati `prefers-reduced-motion`

## Menambah quotes

Buka array `quotes` pada `script.js`, lalu tambahkan objek:

```js
{cat:'KehiduPUNK', color:'#f7e85d', text:'Tulis quote di sini.'}
```

Semua quotes versi sebelumnya tetap dipertahankan.
