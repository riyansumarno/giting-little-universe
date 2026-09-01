# Riyan's Little Universe

Website statis GitHub Pages milik **Riyan Sumarno a.k.a Riyan Giting**. Isinya quotes receh, nyeleneh, serius, mimpi, cinta, kehidupan, pencapaian, visi, impian, Super Power, **KehiduPUNK**, mini game, dan Dinding Mimpi publik.

## Prinsip teknis

Website tetap sederhana dan GitHub-only:

- `index.html`
- `style.css`
- `script.js`
- tidak memakai framework
- tidak memakai database eksternal
- tidak memakai backend sendiri
- tidak memakai token GitHub di browser
- tidak memakai font/CDN pihak ketiga

## Cara kerja Titip Mimpi

Fitur **Titip Mimpi** memakai GitHub Issues sebagai media publik.

1. Pengunjung menulis mimpi pada form di website.
2. Tombol **Titip ke Dinding Publik** membuka halaman pembuatan Issue GitHub yang sudah terisi otomatis.
3. Pengunjung login GitHub dan menekan **Submit new issue**.
4. Website membaca Issue publik dengan judul berawalan `[MIMPI]` melalui GitHub REST API.
5. Issue tersebut muncul sebagai kartu di **Dinding Mimpi**.

Tidak ada database tambahan. Data publiknya berada di repository GitHub melalui Issues.

### Penting

- Menu **Issues** repository harus aktif.
- Pengirim publik memerlukan akun GitHub.
- Username GitHub pengirim tetap dapat terlihat pada halaman Issue. Nama panggilan kartu boleh diisi `Anonim`, tetapi itu tidak membuat akun GitHub pengirim anonim.
- Jika ada kiriman yang tidak pantas, tutup (`Close`) Issue tersebut. Dinding Mimpi hanya membaca Issue yang masih `open`, sehingga kiriman tertutup otomatis hilang dari website.
- GitHub API publik memiliki rate limit. Website memakai cache sesi selama tiga menit agar tidak meminta data terus-menerus.

## Deteksi repository otomatis

Jika website diakses dari pola normal GitHub Pages:

`https://OWNER.github.io/REPOSITORY/`

`script.js` akan mendeteksi `OWNER` dan `REPOSITORY` secara otomatis.

Jika memakai custom domain, buka `script.js` lalu isi:

```js
const GITHUB_FALLBACK = {
  owner: 'username-github',
  repo: 'nama-repository'
};
```

Jangan pernah memasukkan Personal Access Token ke `script.js` karena file tersebut bersifat publik.

## Mengaktifkan GitHub Pages

1. Upload semua file ke branch utama repository.
2. Buka **Settings → Pages**.
3. Pilih **Deploy from a branch**.
4. Pilih branch `main` dan folder `/(root)`.
5. Simpan.
6. Pastikan **Settings → General → Features → Issues** dalam keadaan aktif.

## Fitur interaktif

- sticky navigation + mobile menu
- active menu indicator
- random quote spotlight
- filter kategori quotes
- copy quote
- area khusus KehiduPUNK
- maskot kawaii yang dapat diklik
- Dinding Mimpi GitHub-only
- penyimpanan mimpi pribadi menggunakan `localStorage`
- game **Tangkap Bintang Bandel**
  - target mulai kabur setelah skor naik
  - bintang palsu mengurangi skor
  - combo multiplier
  - target panik pada lima detik terakhir
  - best score tersimpan lokal
- permainan tombol **Kamu betah di semesta ini?**
  - tombol “nggak” kabur
  - tombol “iya” makin besar
- tombol scroll-to-top
- responsive desktop, tablet, dan mobile
- menghormati `prefers-reduced-motion`

## Menambah quotes

Buka array `quotes` pada `script.js`, kemudian tambahkan objek:

```js
{cat:'KehiduPUNK', color:'#f7e85d', text:'Tulis quote di sini.'}
```

Semua quotes lama dari versi sebelumnya tetap dipertahankan pada versi ini.
