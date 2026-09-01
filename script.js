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
  {cat:'Impian', color:'#b6e7d8', text:'Boleh bermimpi besar, asal langkah besok pagi tetap punya bentuk.'},
  {cat:'KehiduPUNK', color:'#f7e85d', text:'KehiduPUNK bukan soal kelihatan paling liar. Kadang justru soal berani hidup dengan kepala sendiri.'},
  {cat:'KehiduPUNK', color:'#f7e85d', text:'Boleh berisik di panggung. Jangan kosong di kepala.'},
  {cat:'KehiduPUNK', color:'#f7e85d', text:'PUNK yang paling susah bukan melawan semua orang, tetapi menjaga prinsip saat jalan pintas terlihat lebih enak.'},
  {cat:'KehiduPUNK', color:'#f7e85d', text:'Mohawk bisa turun, sepatu bisa usang. Keberanian untuk tidak sekadar ikut arus jangan ikut luntur.'},
  {cat:'KehiduPUNK', color:'#f7e85d', text:'DIY bukan cuma bikin sendiri. Kadang itu keberanian membuat jalan ketika pintu yang tersedia tidak cocok.'},
  {cat:'KehiduPUNK', color:'#f7e85d', text:'KehiduPUNK: keras pada prinsip, tetap waras pada manusia.'}
];

const dreamLines = [
  'Kamu tidak harus tahu seluruh jalannya. Cukup jangan berhenti mencari arah.',
  'Yang pelan tetap bisa sampai.',
  'Simpan tenaga untuk hal yang memang penting.',
  'Mimpi tidak wajib terlihat masuk akal bagi semua orang.',
  'Mulai dari kecil bukan masalah. Berhenti mencoba yang bikin jauh.',
  'Kamu boleh mengubah rencana tanpa mengkhianati tujuan.',
  'Hari biasa pun bisa jadi bagian dari cerita besar.',
  'Bintangnya tertangkap. Masalah hidupnya belum, ya.',
  'Lumayan. Refleksmu lebih cepat daripada balasan chat dia.',
  'Satu bintang lagi. Ambisi tidak menerima cicilan rebahan.'
];

const teaseLines = [
  'eh, hampir 😌',
  'kok percaya sih ⭐',
  'aku kabur dulu ya~',
  'refleks mana refleks?',
  'bukan kamu doang yang bisa ghosting.',
  'deket... tapi tidak direstui semesta.',
  'bintang: 1, kamu: ya begitulah.'
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const toast = $('#toast');
let activeCategory = 'Semua';

function showToast(text, duration = 1800){
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), duration);
}

async function copyText(text, success = 'Quote disalin ✦'){
  try{
    await navigator.clipboard.writeText(text);
    showToast(success);
  }catch{
    showToast('Tidak bisa menyalin otomatis. Browser lagi ngambek.');
  }
}

function shuffled(arr){
  return [...arr].sort(() => Math.random() - .5);
}

function randomFrom(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomQuote(){
  return randomFrom(quotes);
}

function renderFilters(){
  const filters = $('#filters');
  const cats = ['Semua', ...new Set(quotes.map(q => q.cat))];
  filters.innerHTML = cats.map(cat => `<button class="filter-btn ${cat === activeCategory ? 'active' : ''}" data-cat="${cat}">${cat}</button>`).join('');
  filters.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => {
    activeCategory = btn.dataset.cat;
    renderFilters();
    renderQuotes();
  }));
}

function renderQuotes(order = quotes){
  const grid = $('#quotesGrid');
  const data = activeCategory === 'Semua' ? order : order.filter(q => q.cat === activeCategory);
  grid.innerHTML = data.map(q => `
    <article class="mini-quote glass" style="background:linear-gradient(145deg, rgba(255,255,255,.82), ${q.color}26)">
      <div>
        <small><span class="cat-dot" style="background:${q.color}"></span>${q.cat}</small>
        <p>“${q.text}”</p>
      </div>
      <small>Riyan Giting Universe</small>
      <button class="copy-mini" data-copy="${encodeURIComponent(q.text)}" aria-label="Salin quote" title="Salin">⧉</button>
    </article>`).join('');
  grid.querySelectorAll('.copy-mini').forEach(btn => btn.addEventListener('click', () => copyText(decodeURIComponent(btn.dataset.copy))));
}

function setSpotlight(forceQuote){
  const q = forceQuote || randomQuote();
  $('#spotlightCategory').textContent = q.cat.toUpperCase();
  $('#spotlightQuote').textContent = `“${q.text}”`;
  $('#spotlightCard').style.background = `linear-gradient(145deg, rgba(255,255,255,.88), ${q.color}32)`;
}

$('#nextSpotlight').addEventListener('click', () => setSpotlight());
$('#copySpotlight').addEventListener('click', () => copyText($('#spotlightQuote').textContent.replace(/[“”]/g, '')));
$('#heroRandomBtn').addEventListener('click', () => {
  setSpotlight();
  $('#spotlightCard').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block:'center'});
});
$('#shuffleBtn').addEventListener('click', () => {
  renderQuotes(shuffled(quotes));
  showToast('Mesin quotenya dikocok. Semoga tidak mabuk.');
});

let mascotClicks = 0;
const mascotFaces = ['•ᴗ•', '≧◡≦', '•̀ᴗ•́', '¬‿¬', 'ᵔᴗᵔ', 'ಠ‿ಠ'];
$('#mascot').addEventListener('click', () => {
  mascotClicks++;
  const q = randomQuote();
  $('#mascotSpeech').textContent = mascotClicks % 6 === 0 ? '“Iya iya, aku tahu aku gemes. Tangannya istirahat dulu 😭”' : `“${q.text}”`;
  $('#mascotFace').textContent = randomFrom(mascotFaces);
});

const punkQuotes = quotes.filter(q => q.cat === 'KehiduPUNK');
function setPunkQuote(){
  const q = randomFrom(punkQuotes);
  $('#punkSpotlight').textContent = `“${q.text}”`;
  $('#punkQuoteBox').animate?.([
    {transform:'rotate(1deg) scale(.985)'},
    {transform:'rotate(-.7deg) scale(1.01)'},
    {transform:'rotate(1deg) scale(1)'}
  ], {duration:300, easing:'ease-out'});
}
$('#punkRandomBtn').addEventListener('click', setPunkQuote);

// ===== GitHub-only Dinding Mimpi =====
// Saat website berada di https://OWNER.github.io/REPO/, owner dan repo terdeteksi otomatis.
// Untuk custom domain, isi manual dua nilai berikut.
const GITHUB_FALLBACK = {
  owner: '',
  repo: ''
};

function detectGitHubRepo(){
  if(GITHUB_FALLBACK.owner && GITHUB_FALLBACK.repo) return GITHUB_FALLBACK;
  const host = location.hostname.toLowerCase();
  if(!host.endsWith('.github.io')) return null;
  const owner = host.split('.')[0];
  const parts = location.pathname.split('/').filter(Boolean);
  const repo = parts[0] || `${owner}.github.io`;
  return {owner, repo};
}

function getDreamParts(body = ''){
  const dreamMatch = body.match(/<!-- DREAM_TEXT_START -->([\s\S]*?)<!-- DREAM_TEXT_END -->/i);
  const aliasMatch = body.match(/<!-- DREAM_ALIAS_START -->([\s\S]*?)<!-- DREAM_ALIAS_END -->/i);
  if(!dreamMatch) return null;
  return {
    text: dreamMatch[1].trim().replace(/^>\s?/gm, '').slice(0, 280),
    alias: (aliasMatch?.[1] || 'Anonim').trim().slice(0, 30) || 'Anonim'
  };
}

function makeDreamCard(issue){
  const data = getDreamParts(issue.body || '');
  if(!data) return null;
  const article = document.createElement('article');
  article.className = 'dream-item';

  const text = document.createElement('p');
  text.textContent = `“${data.text}”`;

  const meta = document.createElement('div');
  meta.className = 'dream-meta';
  const alias = document.createElement('span');
  alias.textContent = `— ${data.alias}`;
  const link = document.createElement('a');
  link.href = issue.html_url;
  link.target = '_blank';
  link.rel = 'noopener';
  link.textContent = new Intl.DateTimeFormat('id-ID', {day:'numeric', month:'short', year:'numeric'}).format(new Date(issue.created_at));
  link.title = 'Buka sumber di GitHub';
  meta.append(alias, link);
  article.append(text, meta);
  return article;
}

async function loadDreamWall(force = false){
  const config = detectGitHubRepo();
  const feed = $('#dreamFeed');
  const status = $('#dreamWallStatus');
  const allLink = $('#allDreamsLink');

  if(!config){
    status.textContent = 'belum aktif';
    feed.innerHTML = '<div class="dream-empty"><span>☁️</span><p>Belum ada.</p></div>';
    return;
  }

  const issueSearch = `https://github.com/${config.owner}/${config.repo}/issues?q=is%3Aissue+is%3Aopen+in%3Atitle+%22%5BMIMPI%5D%22`;
  allLink.href = issueSearch;
  allLink.hidden = false;

  const cacheKey = `littleUniverseDreamWall:${config.owner}/${config.repo}`;
  if(!force){
    try{
      const cached = JSON.parse(sessionStorage.getItem(cacheKey) || 'null');
      if(cached && Date.now() - cached.time < 180000){
        renderDreamIssues(cached.issues, feed, status);
        return;
      }
    }catch{}
  }

  status.textContent = 'memuat...';
  feed.innerHTML = '<div class="dream-loading"><span>☁️</span><p>Memuat...</p></div>';

  try{
    const url = `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/issues?state=open&sort=created&direction=desc&per_page=100`;
    const response = await fetch(url, {headers:{Accept:'application/vnd.github+json'}});
    if(!response.ok) throw new Error(`GitHub API ${response.status}`);
    const raw = await response.json();
    const issues = raw.filter(item => !item.pull_request && /^\[MIMPI\]/i.test(item.title || '') && /DREAM_TEXT_START/.test(item.body || '')).slice(0, 20);
    sessionStorage.setItem(cacheKey, JSON.stringify({time:Date.now(), issues}));
    renderDreamIssues(issues, feed, status);
  }catch(err){
    console.warn(err);
    status.textContent = 'gagal dimuat';
    feed.innerHTML = '<div class="dream-empty"><span>🌧️</span><p>Coba lagi.</p></div>';
  }
}

function renderDreamIssues(issues, feed = $('#dreamFeed'), status = $('#dreamWallStatus')){
  feed.replaceChildren();
  if(!issues.length){
    status.textContent = 'masih kosong';
    const empty = document.createElement('div');
    empty.className = 'dream-empty';
    empty.innerHTML = '<span>☁️</span><p>Belum ada mimpi.</p>';
    feed.append(empty);
    return;
  }
  status.textContent = `${issues.length} titipan terbaru`;
  issues.forEach(issue => {
    const card = makeDreamCard(issue);
    if(card) feed.append(card);
  });
}

const dreamInput = $('#dreamInput');
const dreamAlias = $('#dreamAlias');
const privateDream = $('#privateDream');
const savedPrivateDream = localStorage.getItem('riyanLittleUniverseDream');
if(savedPrivateDream) privateDream.textContent = `Mimpi pribadi tersimpan: “${savedPrivateDream}”`;

dreamInput.addEventListener('input', () => $('#dreamCount').textContent = dreamInput.value.length);

$('#savePrivateDream').addEventListener('click', () => {
  const value = dreamInput.value.trim();
  if(!value) return showToast('Tulis mimpinya dulu. Semesta belum bisa membaca pikiran.');
  localStorage.setItem('riyanLittleUniverseDream', value);
  privateDream.textContent = `Mimpi pribadi tersimpan: “${value}”`;
  showToast('Disimpan pribadi di browser ini ☁️');
});

function buildDreamShareUrl(dream, alias){
  const payload = encodeURIComponent(JSON.stringify({
    v:1,
    text:dream.slice(0,280),
    alias:(alias || 'Anonim').slice(0,30)
  }));
  const base = location.href.split('#')[0];
  return `${base}#mimpi=${payload}`;
}

function readSharedDreamFromHash(){
  const match = location.hash.match(/^#mimpi=(.+)$/);
  if(!match) return null;
  try{
    const data = JSON.parse(decodeURIComponent(match[1]));
    if(!data || typeof data.text !== 'string') return null;
    const text = data.text.trim().slice(0,280);
    if(!text) return null;
    return {text, alias:String(data.alias || 'Anonim').trim().slice(0,30) || 'Anonim'};
  }catch{
    return null;
  }
}

function showSharedDreamFromUrl(){
  const data = readSharedDreamFromHash();
  const card = $('#sharedDreamCard');
  if(!data){
    card.hidden = true;
    return;
  }
  $('#sharedDreamText').textContent = `“${data.text}”`;
  $('#sharedDreamAlias').textContent = data.alias;
  card.hidden = false;
  requestAnimationFrame(() => card.scrollIntoView({behavior:reduceMotion ? 'auto' : 'smooth', block:'center'}));
}

$('#makeDreamLink').addEventListener('click', () => {
  const dream = dreamInput.value.trim();
  const alias = dreamAlias.value.trim() || 'Anonim';
  if(!dream) return showToast('Tulis mimpinya dulu. Link kosong cuma bikin semesta bingung.');
  const url = buildDreamShareUrl(dream, alias);
  $('#dreamShareLink').value = url;
  $('#dreamShareBox').hidden = false;
  showToast('Link mimpi siap ✦', 1800);
});

$('#copyDreamLink').addEventListener('click', () => {
  const url = $('#dreamShareLink').value;
  if(url) copyText(url, 'Link mimpi disalin ☁️');
});

$('#shareDreamLink').addEventListener('click', async () => {
  const url = $('#dreamShareLink').value;
  if(!url) return;
  const title = 'Ada mimpi nyasar dari Riyan’s Little Universe ☁️';
  if(navigator.share){
    try{
      await navigator.share({title, text:'Baca titipan mimpi ini:', url});
      return;
    }catch(err){
      if(err?.name === 'AbortError') return;
    }
  }
  copyText(url, 'Browser tidak punya tombol share. Link sudah disalin.');
});

$('#dismissSharedDream').addEventListener('click', () => {
  history.replaceState(null, '', `${location.pathname}${location.search}`);
  $('#sharedDreamCard').hidden = true;
});
window.addEventListener('hashchange', showSharedDreamFromUrl);

$('#publishDream').addEventListener('click', () => {
  const dream = dreamInput.value.trim();
  const alias = dreamAlias.value.trim() || 'Anonim';
  if(!dream) return showToast('Tulis mimpinya dulu. Yang kosong cuma boleh saldo, eh jangan juga.');

  const config = detectGitHubRepo();
  if(!config){
    copyText(dream, 'Website belum di GitHub Pages. Mimpinya saya salin dulu.');
    return;
  }

  const cleanTitle = dream.replace(/\s+/g, ' ').slice(0, 58);
  const title = `[MIMPI] ${cleanTitle}${dream.length > 58 ? '…' : ''}`;
  const body = [
    '<!-- little-universe-dream -->',
    '### ☁️ Titipan Mimpi',
    '',
    '<!-- DREAM_TEXT_START -->',
    `> ${dream.replace(/\n/g, '\n> ')}`,
    '<!-- DREAM_TEXT_END -->',
    '',
    '<!-- DREAM_ALIAS_START -->',
    alias,
    '<!-- DREAM_ALIAS_END -->',
    '',
    '_Dititipkan dari Riyan\'s Little Universe — Riyan Sumarno a.k.a Riyan Giting._'
  ].join('\n');

  const url = `https://github.com/${config.owner}/${config.repo}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  window.open(url, '_blank', 'noopener');
  showToast('Lanjutkan kiriman di GitHub ✦', 2200);
});

$('#refreshDreamWall').addEventListener('click', () => loadDreamWall(true));

// ===== Mini game: bintang bandel =====
const board = $('#gameBoard');
const star = $('#starTarget');
const fakeStar = $('#fakeStar');
const placeholder = $('#gamePlaceholder');
const scoreEl = $('#score');
const comboEl = $('#combo');
const timeEl = $('#gameTime');
const bestEl = $('#bestScore');
const gameMessage = $('#gameMessage');
const startBtn = $('#startGame');
let score = 0;
let comboHits = 0;
let comboMultiplier = 1;
let best = Number(localStorage.getItem('riyanStarBest') || 0);
let playing = false;
let endAt = 0;
let timerFrame = 0;
let messageTimer = 0;
let fakeTimer = 0;
bestEl.textContent = best;

function placeElement(el){
  const pad = 14;
  const maxX = Math.max(pad, board.clientWidth - el.offsetWidth - pad);
  const maxY = Math.max(pad, board.clientHeight - el.offsetHeight - 68);
  el.style.left = `${pad + Math.random() * Math.max(0, maxX - pad)}px`;
  el.style.top = `${pad + Math.random() * Math.max(0, maxY - pad)}px`;
}

function flashMessage(text){
  clearTimeout(messageTimer);
  gameMessage.textContent = text;
  gameMessage.classList.add('show');
  messageTimer = setTimeout(() => gameMessage.classList.remove('show'), 850);
}

function updateCombo(){
  comboMultiplier = Math.min(4, 1 + Math.floor(comboHits / 4));
  comboEl.textContent = `×${comboMultiplier}`;
}

function maybeShowFake(){
  clearTimeout(fakeTimer);
  fakeStar.hidden = true;
  if(score < 5 || Math.random() > .48) return;
  fakeStar.hidden = false;
  placeElement(fakeStar);
  fakeTimer = setTimeout(() => { fakeStar.hidden = true; }, 850 + Math.random() * 700);
}

function tickGame(){
  if(!playing) return;
  const remaining = Math.max(0, endAt - performance.now());
  timeEl.textContent = (remaining / 1000).toFixed(1);
  star.classList.toggle('panic', remaining < 5000);
  if(remaining <= 0){
    endGame();
    return;
  }
  timerFrame = requestAnimationFrame(tickGame);
}

function gradeGame(value){
  if(value >= 35) return 'Kamu mencurigakan. Bintangnya mau lapor polisi refleks. ⭐';
  if(value >= 24) return 'Gila, lumayan brutal. Bintang-bintangnya trauma.';
  if(value >= 14) return 'Bagus. Tidak jago banget, tapi cukup buat sombong tipis-tipis.';
  if(value >= 7) return 'Ada bakat. Bakatnya masih buffering.';
  return 'Bintangnya aman. Harga dirimu yang perlu dievaluasi 😭';
}

function endGame(){
  playing = false;
  cancelAnimationFrame(timerFrame);
  clearTimeout(fakeTimer);
  star.hidden = true;
  fakeStar.hidden = true;
  star.classList.remove('panic');
  placeholder.style.display = 'grid';
  placeholder.querySelector('.big-star').textContent = score >= 14 ? '★' : '☆';
  placeholder.querySelector('p').textContent = `Skor ${score}. ${gradeGame(score)}`;
  startBtn.textContent = 'Main Lagi';
  timeEl.textContent = '0.0';
  if(score > best){
    best = score;
    localStorage.setItem('riyanStarBest', best);
    bestEl.textContent = best;
    showToast('BEST SCORE BARU. Bintangnya tidak ikhlas ⭐', 2600);
  }
}

function startGame(){
  cancelAnimationFrame(timerFrame);
  clearTimeout(fakeTimer);
  score = 0;
  comboHits = 0;
  updateCombo();
  scoreEl.textContent = '0';
  playing = true;
  endAt = performance.now() + 18000;
  placeholder.style.display = 'none';
  star.hidden = false;
  fakeStar.hidden = true;
  startBtn.textContent = 'Restart';
  placeElement(star);
  tickGame();
}

startBtn.addEventListener('click', startGame);

star.addEventListener('click', () => {
  if(!playing) return;
  comboHits++;
  updateCombo();
  score += comboMultiplier;
  scoreEl.textContent = score;
  flashMessage(randomFrom(dreamLines));
  placeElement(star);
  maybeShowFake();
});

star.addEventListener('pointerenter', (event) => {
  if(!playing || reduceMotion || event.pointerType === 'touch' || score < 3) return;
  const dodgeChance = Math.min(.72, .24 + score * .014);
  if(Math.random() < dodgeChance){
    placeElement(star);
    comboHits = Math.max(0, comboHits - 1);
    updateCombo();
    flashMessage(randomFrom(teaseLines));
  }
});

fakeStar.addEventListener('click', () => {
  if(!playing) return;
  score = Math.max(0, score - 2);
  scoreEl.textContent = score;
  comboHits = 0;
  updateCombo();
  fakeStar.hidden = true;
  flashMessage('YAH KETIPU 🌟 skor -2. Bintang palsu juga butuh validasi.');
});

// ===== Tombol bandel =====
const annoyButtons = $('#annoyButtons');
const yesBtn = $('#yesBtn');
const noBtn = $('#noBtn');
let noEscapes = 0;
let yesScale = 1;

function escapeNoButton(){
  if(reduceMotion || noEscapes >= 7) return;
  noEscapes++;
  const rect = annoyButtons.getBoundingClientRect();
  const maxX = Math.max(0, rect.width - noBtn.offsetWidth);
  const maxY = Math.max(0, rect.height - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${Math.random() * maxX}px`;
  noBtn.style.top = `${Math.random() * maxY}px`;
  yesScale = Math.min(1.9, yesScale + .09);
  yesBtn.style.transform = `scale(${yesScale})`;

  const lines = [
    'eh kok mau klik itu?',
    'salah tombol kak 😭',
    'yang pink lebih masuk akal.',
    'NO sedang cuti.',
    'usaha yang bagus. tetap gagal.',
    'tombolnya punya hak untuk kabur.',
    'yaudah... capek aku.'
  ];
  $('#annoyText').textContent = lines[Math.min(noEscapes - 1, lines.length - 1)];
  $('#annoyFace').textContent = randomFrom(['(¬‿¬)', '(◕‿◕)', '(づ｡◕‿‿◕｡)づ', '(˵ ͡° ͜ʖ ͡°˵)', '(ง •̀_•́)ง']);

  if(noEscapes >= 7){
    noBtn.textContent = 'iya deh 😭';
    noBtn.style.background = '#fff0f6';
    noBtn.style.color = '#e95d92';
  }
}

let lastNoEscapeAt = 0;
function dodgeNoFromTouch(event){
  if(reduceMotion || noEscapes >= 7) return;
  event.preventDefault();
  event.stopPropagation();
  const now = performance.now();
  if(now - lastNoEscapeAt < 220) return;
  lastNoEscapeAt = now;
  escapeNoButton();
}

noBtn.addEventListener('pointerenter', (event) => {
  if(event.pointerType === 'mouse') escapeNoButton();
});
noBtn.addEventListener('pointerdown', (event) => {
  if(event.pointerType !== 'mouse') dodgeNoFromTouch(event);
});
noBtn.addEventListener('touchstart', dodgeNoFromTouch, {passive:false});
noBtn.addEventListener('click', (event) => {
  if(performance.now() - lastNoEscapeAt < 650){
    event.preventDefault();
    return;
  }
  if(!reduceMotion && noEscapes < 7){
    event.preventDefault();
    escapeNoButton();
    return;
  }
  $('#annoyResult').textContent = 'Nah. Akhirnya kita sepakat secara demokratis versi website ini. 💗';
  $('#annoyFace').textContent = '(づ￣ ³￣)づ';
});

yesBtn.addEventListener('click', () => {
  $('#annoyResult').textContent = noEscapes ? `Pilihan bijak setelah ${noEscapes} kali negosiasi. Semesta bangga. ✨` : 'Cepat sekali. Tidak ada perlawanan. Aku suka. ✨';
  $('#annoyFace').textContent = '٩(◕‿◕｡)۶';
  yesBtn.textContent = 'AKU JUGA BETAH 💗';
  showToast('Achievement unlocked: gampang dirayu website ✦');
});

// ===== Kontak dari halaman Blogger =====
const contactServiceMap = [
  {test:/instagram\.com/i, name:'Instagram', icon:'◎'},
  {test:/(facebook\.com|fb\.com)/i, name:'Facebook', icon:'f'},
  {test:/(twitter\.com|x\.com)/i, name:'X / Twitter', icon:'𝕏'},
  {test:/(youtube\.com|youtu\.be)/i, name:'YouTube', icon:'▶'},
  {test:/tiktok\.com/i, name:'TikTok', icon:'♪'},
  {test:/linkedin\.com/i, name:'LinkedIn', icon:'in'},
  {test:/(wa\.me|whatsapp\.com)/i, name:'WhatsApp', icon:'☏'},
  {test:/^mailto:/i, name:'Email', icon:'✉'},
  {test:/telegram\.(me|org)|t\.me/i, name:'Telegram', icon:'➤'}
];

function contactDescriptor(href){
  return contactServiceMap.find(item => item.test.test(href)) || null;
}

function renderBloggerContacts(links){
  const grid = $('#contactGrid');
  const loading = $('#contactLoading');
  const existing = new Set([...grid.querySelectorAll('a')].map(a => a.href.replace(/\/$/,'')));
  const seenServices = new Set();
  links.forEach(({href, label}) => {
    const info = contactDescriptor(href);
    if(!info) return;
    let absolute;
    try{ absolute = new URL(href, 'https://riyangiting.blogspot.com').href; }catch{ return; }
    const normalized = absolute.replace(/\/$/,'');
    const key = `${info.name}:${normalized}`;
    if(existing.has(normalized) || seenServices.has(key)) return;
    seenServices.add(key);
    const a = document.createElement('a');
    a.className = 'contact-item';
    a.href = absolute;
    a.target = '_blank';
    a.rel = 'noopener';
    const display = (label || absolute).replace(/^https?:\/\//,'').replace(/^www\./,'').slice(0,70);
    a.innerHTML = `<span>${info.icon}</span><div><strong>${info.name}</strong><small></small></div><b>↗</b>`;
    a.querySelector('small').textContent = display;
    grid.insertBefore(a, loading || null);
  });
  if(loading) loading.remove();
}

window.__riyanContactFeed = function(data){
  try{
    const entries = data?.feed?.entry || [];
    const page = entries.find(entry => {
      const title = entry?.title?.$t || '';
      const alt = (entry?.link || []).find(l => l.rel === 'alternate')?.href || '';
      return /kontak/i.test(title) || /\/p\/kontak-riyan\.html/i.test(alt);
    });
    if(!page) throw new Error('Halaman Kontak tidak ditemukan di feed.');
    const doc = new DOMParser().parseFromString(page?.content?.$t || '', 'text/html');
    const links = [...doc.querySelectorAll('a[href]')].map(a => ({href:a.getAttribute('href'), label:a.textContent.trim()}));
    renderBloggerContacts(links);
  }catch(err){
    console.warn('Kontak Blogger:', err);
    const loading = $('#contactLoading');
    if(loading) loading.remove();
  }
};

function loadBloggerContacts(){
  const script = document.createElement('script');
  script.src = 'https://riyangiting.blogspot.com/feeds/pages/default?alt=json-in-script&max-results=50&callback=__riyanContactFeed';
  script.async = true;
  script.onerror = () => {
    const loading = $('#contactLoading');
    if(loading) loading.remove();
  };
  document.head.appendChild(script);
}

// ===== Navigasi, active state, scroll-to-top =====
const menuToggle = $('#menuToggle');
const navLinks = $('#navLinks');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '✕' : '☰';
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));

document.addEventListener('click', (event) => {
  if(!event.target.closest('.nav') && navLinks.classList.contains('open')){
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  }
});

const observedSections = ['top','quotes','kehidupunk','dreams','game','about','contact'].map(id => document.getElementById(id)).filter(Boolean);
const navAnchors = $$('.nav-links a');
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if(!visible) return;
  navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${visible.target.id}`));
}, {rootMargin:'-35% 0px -55% 0px', threshold:[0,.2,.5]});
observedSections.forEach(section => observer.observe(section));

const scrollTopBtn = $('#scrollTop');
window.addEventListener('scroll', () => scrollTopBtn.classList.toggle('show', window.scrollY > 620), {passive:true});
scrollTopBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:reduceMotion ? 'auto' : 'smooth'}));

renderFilters();
renderQuotes();
setSpotlight();
setPunkQuote();
loadDreamWall();
showSharedDreamFromUrl();
loadBloggerContacts();
$('#year').textContent = new Date().getFullYear();
