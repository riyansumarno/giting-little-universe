const quotes = [
  {cat:'Receh', color:'#ff8fb7', text:'Hidup itu kayak printer. Kadang macet bukan karena rusak, cuma butuh dibuka pelan-pelan.'},
  {cat:'Receh', color:'#ff8fb7', text:'Kalau hidup terasa berat, mungkin kamu kebanyakan buka tab.'},
  {cat:'Receh', color:'#ff8fb7', text:'Aku tidak telat sukses. Aku cuma pakai jalur scenic route.'},
  {cat:'Nyeleneh', color:'#ffd978', text:'Jangan takut gagal. Takutlah kalau Wi-Fi mati saat deadline.'},
  {cat:'Nyeleneh', color:'#ffd978', text:'Kalau hidup memberi lemon, cek dulu: bisa dibuat es teh nggak?'},
  {cat:'Nyeleneh', color:'#ffd978', text:'Orang lain punya privilege. Kita punya nekat dan mode hemat.'},
  {cat:'Serius', color:'#9bd8ff', text:'Disiplin tidak selalu terlihat keren, tetapi hasilnya sering datang saat motivasi sudah pergi.'},
  {cat:'Serius', color:'#9bd8ff', text:'Kemajuan kecil tetap kemajuan. Yang berbahaya justru berhenti karena merasa langkahmu terlalu kecil.'},
  {cat:'Serius', color:'#9bd8ff', text:'Tidak semua yang lambat berarti tertinggal. Kadang kamu sedang membangun fondasi yang lebih kuat.'},
  {cat:'Mimpi', color:'#c7b8ff', text:'Mimpi yang baik bukan yang membuatmu lupa tidur, tetapi yang membuatmu bangun dengan alasan.'},
  {cat:'Mimpi', color:'#c7b8ff', text:'Jangan kecilkan mimpimu hanya supaya cocok dengan ukuran ketakutanmu.'},
  {cat:'Mimpi', color:'#c7b8ff', text:'Masa depan tidak harus langsung jelas. Cukup pastikan langkah berikutnya masih menuju arah yang kamu percaya.'},
  {cat:'Cita-cita', color:'#a9ead8', text:'Cita-cita bukan sekadar tujuan. Ia adalah alasan untuk tetap belajar ketika hasil belum terlihat.'},
  {cat:'Cita-cita', color:'#a9ead8', text:'Kerja keras yang sehat bukan soal memaksa diri setiap hari, tetapi tahu kapan bergerak dan kapan pulih.'},
  {cat:'Kehidupan', color:'#ffbf9b', text:'Hidup bukan perlombaan lurus. Ada jalan memutar, berhenti sebentar, bahkan pulang dulu untuk memahami arah.'},
  {cat:'Kehidupan', color:'#ffbf9b', text:'Beberapa kehilangan membuka ruang yang sebelumnya terlalu penuh untuk hal baru.'},
  {cat:'Kehidupan', color:'#ffbf9b', text:'Tenang bukan berarti tidak punya masalah. Tenang berarti masalah tidak lagi memegang kendali penuh.'},
  {cat:'Cinta', color:'#ff9fb9', text:'Cinta yang sehat tidak membuatmu kehilangan diri sendiri demi tetap dipilih.'},
  {cat:'Cinta', color:'#ff9fb9', text:'Kalau dia memang rumah, kamu tidak perlu terus mengetuk seperti tamu.'},
  {cat:'Cinta', color:'#ff9fb9', text:'Perasaan bisa datang cepat. Kepercayaan tetap perlu dibangun pelan-pelan.'},
  {cat:'Super Power', color:'#9fd8ff', text:'Super power paling realistis: tetap waras, tetap baik, dan tetap jalan meski rencana berantakan.'},
  {cat:'Super Power', color:'#9fd8ff', text:'Kemampuan bilang “cukup” pada hal yang menguras diri adalah kekuatan, bukan kelemahan.'},
  {cat:'Pencapaian', color:'#ffe391', text:'Pencapaian tidak selalu berbentuk piala. Kadang bentuknya bangun lagi setelah minggu yang kacau.'},
  {cat:'Pencapaian', color:'#ffe391', text:'Jangan remehkan hidup yang perlahan menjadi lebih rapi. Itu juga kemenangan.'},
  {cat:'Visi', color:'#b9afea', text:'Visi memberi arah saat mood berubah. Karena tujuan yang jelas lebih tahan lama daripada semangat sesaat.'},
  {cat:'Visi', color:'#b9afea', text:'Kalau belum bisa mengubah dunia, rapikan dulu satu sudut kehidupanmu.'},
  {cat:'Impian', color:'#b6e7d8', text:'Impian butuh ruang untuk tumbuh, tetapi juga kalender untuk dikerjakan.'},
  {cat:'Impian', color:'#b6e7d8', text:'Boleh bermimpi besar, asal langkah besok pagi tetap punya bentuk.'}
];

const dreamLines = [
  'Kamu tidak harus tahu seluruh jalannya. Cukup jangan berhenti mencari arah.',
  'Yang pelan tetap bisa sampai.',
  'Simpan tenaga untuk hal yang memang penting.',
  'Mimpi tidak wajib terlihat masuk akal bagi semua orang.',
  'Mulai dari kecil bukan masalah. Berhenti mencoba yang bikin jauh.',
  'Kamu boleh mengubah rencana tanpa mengkhianati tujuan.',
  'Hari biasa pun bisa jadi bagian dari cerita besar.'
];

const grid = document.getElementById('quotesGrid');
const filters = document.getElementById('filters');
const toast = document.getElementById('toast');
let activeCategory = 'Semua';

function showToast(text){
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(()=>toast.classList.remove('show'), 1700);
}

function copyText(text){
  navigator.clipboard?.writeText(text).then(()=>showToast('Quote disalin ✦')).catch(()=>showToast('Tidak bisa menyalin otomatis.'));
}

function renderFilters(){
  const cats = ['Semua', ...new Set(quotes.map(q=>q.cat))];
  filters.innerHTML = cats.map(cat => `<button class="filter-btn ${cat===activeCategory?'active':''}" data-cat="${cat}">${cat}</button>`).join('');
  filters.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{
    activeCategory = btn.dataset.cat;
    renderFilters();
    renderQuotes();
  }));
}

function shuffled(arr){
  return [...arr].sort(()=>Math.random()-.5);
}

function renderQuotes(order = quotes){
  const data = activeCategory === 'Semua' ? order : order.filter(q=>q.cat===activeCategory);
  grid.innerHTML = data.map((q,i)=>`
    <article class="mini-quote glass" style="background:linear-gradient(145deg, rgba(255,255,255,.78), ${q.color}22)">
      <div>
        <small><span class="cat-dot" style="background:${q.color}"></span>${q.cat}</small>
        <p>“${q.text}”</p>
      </div>
      <small>Riyan Giting Universe</small>
      <button class="copy-mini" data-copy="${encodeURIComponent(q.text)}" aria-label="Salin quote">⧉</button>
    </article>
  `).join('');
  grid.querySelectorAll('.copy-mini').forEach(btn=>btn.addEventListener('click',()=>copyText(decodeURIComponent(btn.dataset.copy))));
}

function randomQuote(){
  return quotes[Math.floor(Math.random()*quotes.length)];
}

function setSpotlight(){
  const q = randomQuote();
  document.getElementById('spotlightCategory').textContent = q.cat.toUpperCase();
  document.getElementById('spotlightQuote').textContent = `“${q.text}”`;
  document.getElementById('spotlightCard').style.background = `linear-gradient(145deg, rgba(255,255,255,.86), ${q.color}26)`;
}

document.getElementById('nextSpotlight').addEventListener('click', setSpotlight);
document.getElementById('copySpotlight').addEventListener('click',()=>copyText(document.getElementById('spotlightQuote').textContent.replace(/[“”]/g,'')));
document.getElementById('heroRandomBtn').addEventListener('click',()=>{
  setSpotlight();
  document.getElementById('spotlightCard').scrollIntoView({behavior:'smooth',block:'center'});
});
document.getElementById('shuffleBtn').addEventListener('click',()=>renderQuotes(shuffled(quotes)));

document.getElementById('mascot').addEventListener('click',()=>{
  const q = randomQuote();
  document.getElementById('mascotSpeech').textContent = `“${q.text}”`;
});

// Dream saver
const dreamInput = document.getElementById('dreamInput');
const dreamNote = document.getElementById('dreamNote');
const savedDream = localStorage.getItem('riyanLittleUniverseDream');
if(savedDream) dreamNote.textContent = `Mimpi tersimpan: “${savedDream}”`;
document.getElementById('saveDream').addEventListener('click',()=>{
  const value = dreamInput.value.trim();
  if(!value) return showToast('Tulis mimpinya dulu.');
  localStorage.setItem('riyanLittleUniverseDream', value);
  dreamNote.textContent = `Mimpi tersimpan: “${value}”`;
  dreamInput.value = '';
  showToast('Mimpi disimpan di browser ✦');
});

// Mini game
const board = document.getElementById('gameBoard');
const star = document.getElementById('starTarget');
const placeholder = document.getElementById('gamePlaceholder');
const scoreEl = document.getElementById('score');
const bestEl = document.getElementById('bestScore');
const gameMessage = document.getElementById('gameMessage');
const startBtn = document.getElementById('startGame');
let score = 0;
let best = Number(localStorage.getItem('riyanStarBest') || 0);
let playing = false;
let gameTimer;
bestEl.textContent = best;

function moveStar(){
  const pad = 16;
  const maxX = board.clientWidth - star.offsetWidth - pad;
  const maxY = board.clientHeight - star.offsetHeight - 70;
  star.style.left = `${Math.max(pad, Math.random()*maxX)}px`;
  star.style.top = `${Math.max(pad, Math.random()*maxY)}px`;
}
function flashMessage(text){
  gameMessage.textContent = text;
  gameMessage.classList.add('show');
  setTimeout(()=>gameMessage.classList.remove('show'), 900);
}
function endGame(){
  playing = false;
  star.hidden = true;
  placeholder.style.display = 'grid';
  placeholder.querySelector('p').textContent = `Selesai. Skor kamu ${score}. Mau ulang?`;
  startBtn.textContent = 'Main Lagi';
  if(score > best){ best = score; localStorage.setItem('riyanStarBest',best); bestEl.textContent=best; showToast('Best score baru ⭐'); }
}
function startGame(){
  clearTimeout(gameTimer);
  score = 0; scoreEl.textContent = 0; playing = true;
  placeholder.style.display = 'none'; star.hidden = false; startBtn.textContent = 'Restart';
  moveStar();
  gameTimer = setTimeout(endGame, 15000);
}
startBtn.addEventListener('click', startGame);
star.addEventListener('click',()=>{
  if(!playing) return;
  score++; scoreEl.textContent = score;
  flashMessage(dreamLines[Math.floor(Math.random()*dreamLines.length)]);
  moveStar();
});

renderFilters();
renderQuotes();
setSpotlight();
document.getElementById('year').textContent = new Date().getFullYear();
