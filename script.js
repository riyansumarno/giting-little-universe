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
  {cat:'KehiduPUNK', color:'#f7e85d', text:'KehiduPUNK: keras pada prinsip, tetap waras pada manusia.'},

  {cat:'Receh', color:'#ff8fb7', text:'Saldo dan semangat punya kesamaan: sering baru dicari pas menipis.'},
  {cat:'Receh', color:'#ff8fb7', text:'Niat tidur cepat sering gugur secara terhormat di tangan satu video terakhir.'},
  {cat:'Receh', color:'#ff8fb7', text:'Aku suka rencana matang. Masalahnya hidup sering datang setengah matang.'},
  {cat:'Receh', color:'#ff8fb7', text:'Kopi tidak menyelesaikan masalah, tapi rapat dengan masalah jadi lebih sopan.'},
  {cat:'Receh', color:'#ff8fb7', text:'Deadline itu unik: jauh terasa abstrak, dekat terasa spiritual.'},
  {cat:'Receh', color:'#ff8fb7', text:'Produktif hari ini: membuka to-do list, menatapnya, lalu merasa sudah berkomunikasi.'},

  {cat:'Nyeleneh', color:'#ffd978', text:'Jangan buru-buru jadi versi terbaik. Versi stabil dulu juga prestasi.'},
  {cat:'Nyeleneh', color:'#ffd978', text:'Kalau pintu tertutup, cek dulu. Siapa tahu memang ditarik, bukan didorong.'},
  {cat:'Nyeleneh', color:'#ffd978', text:'Hidup kadang kasih plot twist tanpa trailer.'},
  {cat:'Nyeleneh', color:'#ffd978', text:'Tidak semua tanda harus dibaca. Ada yang cuma spanduk.'},
  {cat:'Nyeleneh', color:'#ffd978', text:'Kalau belum ketemu jalan, jangan langsung bikin jalan tol.'},
  {cat:'Nyeleneh', color:'#ffd978', text:'Kalau semesta lagi diam, mungkin dia sedang mengetik…'},

  {cat:'Tengil', color:'#ffad8a', text:'Aku bukan selalu benar. Makanya masih suka ngecek dua kali—kadang tiga kali karena lupa.'},
  {cat:'Tengil', color:'#ffad8a', text:'Kalau gagal sekali, santai. Statistiknya belum cukup buat bikin kesimpulan.'},
  {cat:'Tengil', color:'#ffad8a', text:'Boleh pede, asal masih bisa bilang, “oh iya, aku salah.”'},
  {cat:'Tengil', color:'#ffad8a', text:'Gayaku bukan anti gagal. Cuma gagal jangan sampai dapat kontrak permanen.'},
  {cat:'Tengil', color:'#ffad8a', text:'Kalau orang lain ngebut, silakan. Aku lagi memastikan roda masih empat.'},
  {cat:'Tengil', color:'#ffad8a', text:'Bukan anti arus. Cuma suka memastikan sungainya menuju mana.'},

  {cat:'Absurd', color:'#c8b9ff', text:'Kalau pikiran bisa parkir, punyaku mungkin kena tilang karena sembarangan.'},
  {cat:'Absurd', color:'#c8b9ff', text:'Kadang solusi datang setelah mandi. Entah karena air atau otak akhirnya restart.'},
  {cat:'Absurd', color:'#c8b9ff', text:'Hari ini produktif: berhasil memindahkan masalah dari kepala ke daftar tugas.'},
  {cat:'Absurd', color:'#c8b9ff', text:'Kalau hidup punya tombol undo, manusia tetap akan menekan redo karena penasaran.'},
  {cat:'Absurd', color:'#c8b9ff', text:'Aku curiga Senin punya respawn terlalu cepat.'},
  {cat:'Absurd', color:'#c8b9ff', text:'Kalau otakmu bilang semua berantakan jam dua pagi, tunda sidang sampai matahari hadir.'},

  {cat:'Kece', color:'#9fe6d4', text:'Nggak harus paling depan. Yang penting tahu kenapa masih jalan.'},
  {cat:'Kece', color:'#9fe6d4', text:'Keren itu bukan selalu kelihatan sibuk. Kadang tahu kapan bilang cukup.'},
  {cat:'Kece', color:'#9fe6d4', text:'Pelan bukan gaya kalah. Bisa jadi sedang menjaga napas buat perjalanan panjang.'},
  {cat:'Kece', color:'#9fe6d4', text:'Nggak semua progres perlu diumumkan. Ada yang cukup tumbuh diam-diam.'},
  {cat:'Kece', color:'#9fe6d4', text:'Kalau belum bersinar, ya minimal jangan matikan lampu sendiri.'},
  {cat:'Kece', color:'#9fe6d4', text:'Tenang itu kece ketika kamu tetap bergerak tanpa perlu bikin semua orang tahu.'},

  {cat:'KehiduPUNK', color:'#f7e85d', text:'KehiduPUNK itu berani beda tanpa wajib merendahkan yang sama.'},
  {cat:'KehiduPUNK', color:'#f7e85d', text:'Lawan yang perlu bukan selalu orang lain. Kadang rasa takut yang menyuruh diam.'},
  {cat:'KehiduPUNK', color:'#f7e85d', text:'Berisik boleh. Dengarkan juga.'},
  {cat:'KehiduPUNK', color:'#f7e85d', text:'Punya prinsip bukan berarti keras kepala. Prinsip yang sehat masih bisa belajar.'},
  {cat:'KehiduPUNK', color:'#f7e85d', text:'DIY: kalau belum ada ruang yang cocok, bikin ruang kecil sendiri.'},
  {cat:'KehiduPUNK', color:'#f7e85d', text:'Punk tanpa empati cuma suara keras.'}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const randomFrom = arr => arr[Math.floor(Math.random() * arr.length)];
const shuffle = arr => [...arr].sort(() => Math.random() - .5);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let toastTimer;

function showToast(text, duration = 1800){
  const el = $('#toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), duration);
}

async function copyText(text, success = 'Disalin ✦'){
  try{
    await navigator.clipboard.writeText(text);
    showToast(success);
  }catch{
    const area = document.createElement('textarea');
    area.value = text;
    document.body.append(area);
    area.select();
    document.execCommand('copy');
    area.remove();
    showToast(success);
  }
}

function randomQuote(list = quotes){ return randomFrom(list); }

// ===== Spotlight + maskot =====
function setSpotlight(q = randomQuote()){
  $('#spotlightCategory').textContent = q.cat.toUpperCase();
  $('#spotlightQuote').textContent = `“${q.text}”`;
  $('#spotlightCard').style.background = `linear-gradient(135deg, rgba(255,255,255,.86), ${q.color}22)`;
}
$('#heroRandomBtn').addEventListener('click', () => { setSpotlight(); $('#spotlightCard').scrollIntoView({behavior:reduceMotion?'auto':'smooth', block:'center'}); });
$('#nextSpotlight').addEventListener('click', () => setSpotlight());
$('#copySpotlight').addEventListener('click', () => copyText($('#spotlightQuote').textContent.replace(/[“”]/g,''), 'Quote disalin ✦'));

const mascotFaces = ['•ᴗ•','¬‿¬','◕‿◕','ಠ‿ಠ','ᵔᴗᵔ','•̀ᴗ•́'];
let mascotClicks = 0;
$('#mascot').addEventListener('click', () => {
  mascotClicks++;
  const q = randomQuote();
  $('#mascotFace').textContent = randomFrom(mascotFaces);
  $('#mascotSpeech').textContent = mascotClicks % 7 === 0 ? '“Iya, aku gemes. Tapi mouse-mu juga butuh istirahat.”' : `“${q.text}”`;
});

// ===== Quote vending machine compact =====
const categorySelect = $('#categorySelect');
const modalCategorySelect = $('#modalCategorySelect');
const categories = ['Semua', ...new Set(quotes.map(q => q.cat))];
let currentCategory = 'Semua';
let currentOrder = [...quotes];

function fillCategories(select){
  select.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
}
fillCategories(categorySelect);
fillCategories(modalCategorySelect);

function filteredQuotes(category = currentCategory, order = currentOrder){
  return category === 'Semua' ? order : order.filter(q => q.cat === category);
}

function quoteCardHTML(q){
  return `<article class="mini-quote glass" style="background:linear-gradient(145deg,rgba(255,255,255,.83),${q.color}22)">
    <div class="cat"><i style="background:${q.color}"></i>${q.cat}</div>
    <p>“${q.text}”</p>
    <footer><span>Riyan Giting Universe</span><button class="copy-mini" data-copy="${encodeURIComponent(q.text)}" aria-label="Salin quote">⧉</button></footer>
  </article>`;
}

function renderCarousel(){
  const list = filteredQuotes();
  const sample = list.length <= 8 ? list : list.slice(0,8);
  $('#quotesCarousel').innerHTML = sample.map(quoteCardHTML).join('');
  $('#quotesCarousel').scrollLeft = 0;
}

categorySelect.addEventListener('change', () => {
  currentCategory = categorySelect.value;
  modalCategorySelect.value = currentCategory;
  currentOrder = [...quotes];
  renderCarousel();
});
$('#shuffleBtn').addEventListener('click', () => {
  currentOrder = shuffle(quotes);
  renderCarousel();
  showToast('Mesinnya dikocok. Semoga tidak mabuk.');
});
$('#quotesPrev').addEventListener('click', () => $('#quotesCarousel').scrollBy({left:-340,behavior:reduceMotion?'auto':'smooth'}));
$('#quotesNext').addEventListener('click', () => $('#quotesCarousel').scrollBy({left:340,behavior:reduceMotion?'auto':'smooth'}));
$('#quotesCarousel').addEventListener('click', e => {
  const b = e.target.closest('[data-copy]'); if(b) copyText(decodeURIComponent(b.dataset.copy), 'Quote disalin ✦');
});

// ===== Modal semua quote =====
function renderModalQuotes(){
  const cat = modalCategorySelect.value;
  const list = cat === 'Semua' ? quotes : quotes.filter(q => q.cat === cat);
  $('#modalQuoteCount').textContent = `${list.length} quote`;
  $('#modalQuotes').innerHTML = list.map(q => `<article class="modal-quote"><small>${q.cat}</small><p>“${q.text}”</p><button data-copy="${encodeURIComponent(q.text)}">Salin ⧉</button></article>`).join('');
}
function openQuotesModal(){
  modalCategorySelect.value = currentCategory;
  renderModalQuotes();
  $('#quotesModal').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeQuotesModal(){
  $('#quotesModal').hidden = true;
  document.body.style.overflow = '';
}
$('#openQuotesModal').addEventListener('click', openQuotesModal);
$('#closeQuotesModal').addEventListener('click', closeQuotesModal);
$('[data-close-modal]').addEventListener('click', closeQuotesModal);
modalCategorySelect.addEventListener('change', renderModalQuotes);
$('#modalQuotes').addEventListener('click', e => { const b=e.target.closest('[data-copy]'); if(b) copyText(decodeURIComponent(b.dataset.copy),'Quote disalin ✦'); });
document.addEventListener('keydown', e => { if(e.key === 'Escape' && !$('#quotesModal').hidden) closeQuotesModal(); });

// ===== KehiduPUNK =====
const punkQuotes = quotes.filter(q => q.cat === 'KehiduPUNK');
function setPunkQuote(){
  const q = randomQuote(punkQuotes);
  $('#punkSpotlight').textContent = `“${q.text}”`;
  if(!reduceMotion) $('#punkQuoteBox').animate([{transform:'rotate(.8deg) scale(.99)'},{transform:'rotate(-.5deg) scale(1.01)'},{transform:'none'}],{duration:270});
}
$('#punkRandomBtn').addEventListener('click', setPunkQuote);

// ===== Titip Mimpi: link tanpa login + GitHub Issues publik =====
const GITHUB_FALLBACK = {owner:'', repo:''};
function detectGitHubRepo(){
  if(GITHUB_FALLBACK.owner && GITHUB_FALLBACK.repo) return GITHUB_FALLBACK;
  const host = location.hostname.toLowerCase();
  if(!host.endsWith('.github.io')) return null;
  const owner = host.split('.')[0];
  const parts = location.pathname.split('/').filter(Boolean);
  const repo = parts[0] || `${owner}.github.io`;
  return {owner,repo};
}
function getDreamParts(body=''){
  const dream = body.match(/<!-- DREAM_TEXT_START -->([\s\S]*?)<!-- DREAM_TEXT_END -->/i);
  const alias = body.match(/<!-- DREAM_ALIAS_START -->([\s\S]*?)<!-- DREAM_ALIAS_END -->/i);
  if(!dream) return null;
  return {text:dream[1].trim().replace(/^>\s?/gm,'').slice(0,280),alias:(alias?.[1]||'Anonim').trim().slice(0,30)||'Anonim'};
}
function makeDreamCard(issue){
  const data = getDreamParts(issue.body||''); if(!data) return null;
  const article=document.createElement('article'); article.className='dream-item';
  const p=document.createElement('p'); p.textContent=`“${data.text}”`;
  const meta=document.createElement('div'); meta.className='dream-meta';
  const alias=document.createElement('span'); alias.textContent=`— ${data.alias}`;
  const link=document.createElement('a'); link.href=issue.html_url; link.target='_blank'; link.rel='noopener'; link.textContent=new Intl.DateTimeFormat('id-ID',{day:'numeric',month:'short'}).format(new Date(issue.created_at));
  meta.append(alias,link); article.append(p,meta); return article;
}
async function loadDreamWall(force=false){
  const config=detectGitHubRepo(), feed=$('#dreamFeed'), status=$('#dreamWallStatus'), allLink=$('#allDreamsLink');
  if(!config){ status.textContent='belum aktif'; feed.innerHTML='<div class="dream-empty">☁️ Belum ada.</div>'; return; }
  allLink.href=`https://github.com/${config.owner}/${config.repo}/issues?q=is%3Aissue+is%3Aopen+in%3Atitle+%22%5BMIMPI%5D%22`; allLink.hidden=false;
  const cacheKey=`littleUniverseDreamWall:${config.owner}/${config.repo}`;
  if(!force){ try{const c=JSON.parse(sessionStorage.getItem(cacheKey)||'null'); if(c&&Date.now()-c.time<180000){renderDreamIssues(c.issues);return;}}catch{} }
  status.textContent='memuat...'; feed.innerHTML='<div class="dream-loading">☁️ Memuat...</div>';
  try{
    const res=await fetch(`https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/issues?state=open&sort=created&direction=desc&per_page=100`,{headers:{Accept:'application/vnd.github+json'}});
    if(!res.ok) throw new Error(res.status);
    const raw=await res.json();
    const issues=raw.filter(i=>!i.pull_request&&/^\[MIMPI\]/i.test(i.title||'')&&/DREAM_TEXT_START/.test(i.body||'')).slice(0,20);
    sessionStorage.setItem(cacheKey,JSON.stringify({time:Date.now(),issues})); renderDreamIssues(issues);
  }catch{ status.textContent='gagal'; feed.innerHTML='<div class="dream-empty">🌧️ Coba lagi.</div>'; }
}
function renderDreamIssues(issues){
  const feed=$('#dreamFeed'), status=$('#dreamWallStatus'); feed.replaceChildren();
  if(!issues.length){status.textContent='kosong';feed.innerHTML='<div class="dream-empty">☁️ Belum ada mimpi.</div>';return;}
  status.textContent=`${issues.length} terbaru`; issues.forEach(i=>{const c=makeDreamCard(i);if(c)feed.append(c);});
}
const dreamInput=$('#dreamInput'), dreamAlias=$('#dreamAlias'), privateDream=$('#privateDream');
const savedDream=localStorage.getItem('riyanLittleUniverseDream'); if(savedDream) privateDream.textContent=`Tersimpan: “${savedDream}”`;
dreamInput.addEventListener('input',()=>$('#dreamCount').textContent=dreamInput.value.length);
$('#savePrivateDream').addEventListener('click',()=>{const v=dreamInput.value.trim();if(!v)return showToast('Tulis mimpinya dulu ☁️');localStorage.setItem('riyanLittleUniverseDream',v);privateDream.textContent=`Tersimpan: “${v}”`;showToast('Mimpi disimpan di browser ☁️');});
function buildDreamShareUrl(dream,alias){const payload=encodeURIComponent(JSON.stringify({v:1,text:dream.slice(0,280),alias:(alias||'Anonim').slice(0,30)}));return `${location.href.split('#')[0]}#mimpi=${payload}`;}
function readSharedDreamFromHash(){const m=location.hash.match(/^#mimpi=(.+)$/);if(!m)return null;try{const d=JSON.parse(decodeURIComponent(m[1]));const text=String(d?.text||'').trim().slice(0,280);if(!text)return null;return{text,alias:String(d.alias||'Anonim').trim().slice(0,30)||'Anonim'};}catch{return null;}}
function showSharedDreamFromUrl(){const d=readSharedDreamFromHash();const card=$('#sharedDreamCard');if(!d){card.hidden=true;return;}$('#sharedDreamText').textContent=`“${d.text}”`;$('#sharedDreamAlias').textContent=d.alias;card.hidden=false;requestAnimationFrame(()=>card.scrollIntoView({behavior:reduceMotion?'auto':'smooth',block:'center'}));}
$('#makeDreamLink').addEventListener('click',()=>{const dream=dreamInput.value.trim(),alias=dreamAlias.value.trim()||'Anonim';if(!dream)return showToast('Tulis mimpinya dulu ☁️');$('#dreamShareLink').value=buildDreamShareUrl(dream,alias);$('#dreamShareBox').hidden=false;showToast('Link mimpi siap ✦');});
$('#copyDreamLink').addEventListener('click',()=>{const u=$('#dreamShareLink').value;if(u)copyText(u,'Link disalin ☁️');});
$('#shareDreamLink').addEventListener('click',async()=>{const u=$('#dreamShareLink').value;if(!u)return;if(navigator.share){try{await navigator.share({title:'Titipan mimpi ☁️',text:'Ada mimpi nyasar:',url:u});return;}catch(e){if(e.name==='AbortError')return;}}copyText(u,'Link disalin ☁️');});
$('#dismissSharedDream').addEventListener('click',()=>{history.replaceState(null,'',`${location.pathname}${location.search}`);$('#sharedDreamCard').hidden=true;});
window.addEventListener('hashchange',showSharedDreamFromUrl);
$('#publishDream').addEventListener('click',()=>{
  const dream=dreamInput.value.trim(),alias=dreamAlias.value.trim()||'Anonim';if(!dream)return showToast('Tulis mimpinya dulu ☁️');
  const c=detectGitHubRepo();if(!c)return showToast('Dinding publik aktif setelah website di GitHub Pages.');
  const clean=dream.replace(/\s+/g,' ').slice(0,58);const title=`[MIMPI] ${clean}${dream.length>58?'…':''}`;
  const body=['<!-- little-universe-dream -->','### ☁️ Titipan Mimpi','','<!-- DREAM_TEXT_START -->',`> ${dream.replace(/\n/g,'\n> ')}`,'<!-- DREAM_TEXT_END -->','','<!-- DREAM_ALIAS_START -->',alias,'<!-- DREAM_ALIAS_END -->','','_Dititipkan dari Riyan\'s Little Universe._'].join('\n');
  window.open(`https://github.com/${c.owner}/${c.repo}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`,'_blank','noopener');
});
$('#refreshDreamWall').addEventListener('click',()=>loadDreamWall(true));

// ===== Game hub =====
$$('.game-tab').forEach(tab=>tab.addEventListener('click',()=>{
  const key=tab.dataset.game;
  $$('.game-tab').forEach(t=>{t.classList.toggle('active',t===tab);t.setAttribute('aria-selected',String(t===tab));});
  $$('[data-game-panel]').forEach(p=>{const active=p.dataset.gamePanel===key;p.hidden=!active;p.classList.toggle('active',active);});
}));

// Game 1: Bintang Bandel
const board=$('#gameBoard'),star=$('#starTarget'),fakeStar=$('#fakeStar'),placeholder=$('#gamePlaceholder'),scoreEl=$('#score'),comboEl=$('#combo'),timeEl=$('#gameTime'),bestEl=$('#bestScore'),gameMessage=$('#gameMessage'),startBtn=$('#startGame');
let score=0,comboHits=0,comboMultiplier=1,playing=false,endAt=0,timerFrame=0,messageTimer=0,fakeTimer=0,best=Number(localStorage.getItem('riyanStarBest')||0);bestEl.textContent=best;
const starTeases=['hehe nyaris','kurang sat-set','aku di sini... eh pindah','refleksnya loading?','jangan percaya muka polos'];
const starWins=['dapet! ⭐','lumayan lincah','nah gitu dong','satu lagi!','bintangnya mulai panik'];
function placeElement(el){const pad=14,maxX=Math.max(pad,board.clientWidth-el.offsetWidth-pad),maxY=Math.max(pad,board.clientHeight-el.offsetHeight-55);el.style.left=`${pad+Math.random()*Math.max(0,maxX-pad)}px`;el.style.top=`${pad+Math.random()*Math.max(0,maxY-pad)}px`;}
function flashMessage(t){clearTimeout(messageTimer);gameMessage.textContent=t;gameMessage.classList.add('show');messageTimer=setTimeout(()=>gameMessage.classList.remove('show'),700);}
function updateCombo(){comboMultiplier=Math.min(4,1+Math.floor(comboHits/4));comboEl.textContent=`×${comboMultiplier}`;}
function maybeShowFake(){clearTimeout(fakeTimer);fakeStar.hidden=true;if(score<5||Math.random()>.48)return;fakeStar.hidden=false;placeElement(fakeStar);fakeTimer=setTimeout(()=>fakeStar.hidden=true,700+Math.random()*600);}
function tickGame(){if(!playing)return;const left=Math.max(0,endAt-performance.now());timeEl.textContent=(left/1000).toFixed(1);star.classList.toggle('panic',left<5000);if(left<=0)return endGame();timerFrame=requestAnimationFrame(tickGame);}
function endGame(){playing=false;cancelAnimationFrame(timerFrame);clearTimeout(fakeTimer);star.hidden=true;fakeStar.hidden=true;placeholder.style.display='grid';placeholder.querySelector('.big-star').textContent=score>=14?'★':'☆';placeholder.querySelector('p').textContent=`Skor ${score}. ${score>=25?'Bintangnya minta cuti.':score>=12?'Lumayan, harga diri aman.':'Bintangnya masih santai.'}`;startBtn.textContent='Main lagi';timeEl.textContent='0.0';if(score>best){best=score;localStorage.setItem('riyanStarBest',best);bestEl.textContent=best;showToast('Best score baru ⭐');}}
function startGame(){cancelAnimationFrame(timerFrame);clearTimeout(fakeTimer);score=0;comboHits=0;updateCombo();scoreEl.textContent='0';playing=true;endAt=performance.now()+18000;placeholder.style.display='none';star.hidden=false;fakeStar.hidden=true;startBtn.textContent='Restart';placeElement(star);tickGame();}
startBtn.addEventListener('click',startGame);
star.addEventListener('click',()=>{if(!playing)return;comboHits++;updateCombo();score+=comboMultiplier;scoreEl.textContent=score;flashMessage(randomFrom(starWins));placeElement(star);maybeShowFake();});
star.addEventListener('pointerenter',e=>{if(!playing||reduceMotion||e.pointerType==='touch'||score<3)return;if(Math.random()<Math.min(.72,.24+score*.014)){placeElement(star);comboHits=Math.max(0,comboHits-1);updateCombo();flashMessage(randomFrom(starTeases));}});
fakeStar.addEventListener('click',()=>{if(!playing)return;score=Math.max(0,score-2);scoreEl.textContent=score;comboHits=0;updateCombo();fakeStar.hidden=true;flashMessage('ketipu 🌟 -2');});

// Game 2: Kamu betah?
const annoyButtons=$('#annoyButtons'),yesBtn=$('#yesBtn'),noBtn=$('#noBtn');let noEscapes=0,yesScale=1,lastNoEscapeAt=0;
function escapeNoButton(){if(reduceMotion||noEscapes>=7)return;noEscapes++;const rect=annoyButtons.getBoundingClientRect(),maxX=Math.max(0,rect.width-noBtn.offsetWidth),maxY=Math.max(0,rect.height-noBtn.offsetHeight);noBtn.style.position='absolute';noBtn.style.left=`${Math.random()*maxX}px`;noBtn.style.top=`${Math.random()*maxY}px`;yesScale=Math.min(1.85,yesScale+.09);yesBtn.style.transform=`scale(${yesScale})`;const lines=['eh kok mau klik itu?','salah tombol kak 😭','yang pink lebih masuk akal.','NO sedang cuti.','usaha bagus. tetap gagal.','tombolnya punya hak untuk kabur.','yaudah... capek aku.'];$('#annoyText').textContent=lines[Math.min(noEscapes-1,lines.length-1)];$('#annoyFace').textContent=randomFrom(['(¬‿¬)','(◕‿◕)','(づ｡◕‿‿◕｡)づ','(ง •̀_•́)ง']);if(noEscapes>=7){noBtn.textContent='iya deh 😭';noBtn.style.background='#fff0f6';noBtn.style.color='#e95d92';}}
function dodgeNoTouch(e){if(reduceMotion||noEscapes>=7)return;e.preventDefault();e.stopPropagation();const now=performance.now();if(now-lastNoEscapeAt<220)return;lastNoEscapeAt=now;escapeNoButton();}
noBtn.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')escapeNoButton();});noBtn.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')dodgeNoTouch(e);});noBtn.addEventListener('touchstart',dodgeNoTouch,{passive:false});noBtn.addEventListener('click',e=>{if(performance.now()-lastNoEscapeAt<650){e.preventDefault();return;}if(!reduceMotion&&noEscapes<7){e.preventDefault();escapeNoButton();return;}$('#annoyResult').textContent='Nah. Demokrasi versi website ini selesai. 💗';$('#annoyFace').textContent='(づ￣ ³￣)づ';});
yesBtn.addEventListener('click',()=>{$('#annoyResult').textContent=noEscapes?`Pilihan bijak setelah ${noEscapes} kali negosiasi. ✨`:'Cepat sekali. Tidak ada perlawanan. ✨';$('#annoyFace').textContent='٩(◕‿◕｡)۶';yesBtn.textContent='AKU JUGA BETAH 💗';showToast('Achievement: gampang dirayu website ✦');});

// Game 3: Jangan tekan tombol
const redArena=$('#redArena'),redButton=$('#redButton');let redCount=0;
const redLines=['Serius. Jangan.','Lho kok ditekan?','Sekali lagi katanya terakhir.','Aku lihat jarimu.','Ini bukan bubble wrap 😭','Tombolnya mulai curiga.','Kamu memang tidak bisa dilarang ya.','Oke, sekarang dia kabur.','Masih dikejar juga?','Kesabaran tombol menipis.','Prestasi aneh, tapi sah.','Baik. Kamu menang. Tombolnya menyerah.'];
function moveRedButton(){const pad=12,w=redArena.clientWidth-redButton.offsetWidth-pad*2,h=redArena.clientHeight-redButton.offsetHeight-pad*2;redButton.style.left=`${pad+Math.random()*Math.max(0,w)}px`;redButton.style.top=`${pad+Math.random()*Math.max(0,h)}px`;redButton.style.transform='none';}
redButton.addEventListener('click',()=>{redCount++;$('#redCount').textContent=redCount;$('#redText').textContent=redLines[Math.min(redCount,redLines.length-1)];$('#redFace').textContent=randomFrom(['(¬_¬)','(ಠ_ಠ)','(•̀⤙•́)','(╥﹏╥)','(¬‿¬)']);if(redCount>=4&&!reduceMotion)moveRedButton();if(redCount===12){redButton.textContent='YA UDAH TEKAN AJA';redButton.style.background='#6c63a8';showToast('Achievement: larangan adalah dekorasi 🔴');}});
$('#resetRed').addEventListener('click',()=>{redCount=0;$('#redCount').textContent='0';$('#redText').textContent='Serius. Jangan.';$('#redFace').textContent='(•̀ᴗ•́)و';redButton.textContent='JANGAN TEKAN';redButton.style.cssText='';});

// Game 4: Cari Si Kucing
const catBoard=$('#catBoard'),catScoreEl=$('#catScore'),catTimeEl=$('#catTime'),catBestEl=$('#catBest'),catMsg=$('#catMessage');
const catFaces=['🐱','😺','😸','😹','😻','😼','😽','🙀','😿','😾'];let catTarget='🐱',catScore=0,catBest=Number(localStorage.getItem('riyanCatBest')||0),catPlaying=false,catEnd=0,catFrame=0;catBestEl.textContent=catBest;
function buildCatRound(){catTarget=randomFrom(catFaces);$('#catInstruction').textContent=`Cari ${catTarget} sebelum dia merasa terkenal.`;const cells=Array.from({length:24},()=>randomFrom(catFaces.filter(x=>x!==catTarget)));cells[Math.floor(Math.random()*cells.length)]=catTarget;catBoard.innerHTML=shuffle(cells).map(face=>`<button class="cat-cell" data-face="${face}" aria-label="${face}">${face}</button>`).join('');}
function catTick(){if(!catPlaying)return;const left=Math.max(0,catEnd-performance.now());catTimeEl.textContent=(left/1000).toFixed(1);if(left<=0){catPlaying=false;catBoard.innerHTML='';catMsg.textContent=`Selesai. Skor ${catScore}.`;$('#startCat').textContent='Main lagi';if(catScore>catBest){catBest=catScore;localStorage.setItem('riyanCatBest',catBest);catBestEl.textContent=catBest;showToast('Best kucing baru 🐱');}return;}catFrame=requestAnimationFrame(catTick);}
$('#startCat').addEventListener('click',()=>{cancelAnimationFrame(catFrame);catScore=0;catScoreEl.textContent='0';catPlaying=true;catEnd=performance.now()+20000;$('#startCat').textContent='Restart';catMsg.textContent='Cari yang benar. Jangan silau oleh kumis.';buildCatRound();catTick();});
catBoard.addEventListener('click',e=>{const cell=e.target.closest('.cat-cell');if(!cell||!catPlaying)return;if(cell.dataset.face===catTarget){catScore++;catScoreEl.textContent=catScore;catMsg.textContent=randomFrom(['dapet!','meong approved','sat-set 🐾','kucingnya kaget']);buildCatRound();}else{catScore=Math.max(0,catScore-1);catScoreEl.textContent=catScore;cell.classList.add('wrong');catMsg.textContent='Itu sepupunya. -1 😭';}});

// Game 5: Suit Semesta
const suitEmoji={rock:'✊',paper:'✋',scissors:'✌️'};let userSuitScore=0,cpuSuitScore=0,suitRounds=0;
function winner(user,cpu){if(user===cpu)return 0;if((user==='rock'&&cpu==='scissors')||(user==='paper'&&cpu==='rock')||(user==='scissors'&&cpu==='paper'))return 1;return -1;}
$$('.suit-btn').forEach(btn=>btn.addEventListener('click',()=>{const user=btn.dataset.suit;suitRounds++;let cpu=randomFrom(['rock','paper','scissors']);let cheated=false;if(suitRounds%7===0&&Math.random()<.6){cpu=user==='rock'?'paper':user==='paper'?'scissors':'rock';cheated=true;}const result=winner(user,cpu);if(result>0)userSuitScore++;if(result<0)cpuSuitScore++;$('#userSuitScore').textContent=userSuitScore;$('#cpuSuitScore').textContent=cpuSuitScore;$('#userSuitFace').textContent=suitEmoji[user];$('#cpuSuitFace').textContent=suitEmoji[cpu];$('#suitResult').textContent=result===0?'Seri. Semesta pura-pura santai.':result>0?'Kamu menang. Semesta bilang cuma pemanasan.':'Semesta menang.';$('#suitText').textContent=cheated?'Hmm... kok pilihannya terlalu pas? Mencurigakan.':'Semesta bilang dia sportif. Untuk sementara.';}));
$('#resetSuit').addEventListener('click',()=>{userSuitScore=cpuSuitScore=suitRounds=0;$('#userSuitScore').textContent='0';$('#cpuSuitScore').textContent='0';$('#userSuitFace').textContent='🤔';$('#cpuSuitFace').textContent='☁️';$('#suitResult').textContent='Pilih senjatamu.';$('#suitText').textContent='Semesta bilang dia sportif. Kita lihat saja.';});

// ===== Kontak dari halaman Blogger =====
const contactServiceMap=[
  {test:/instagram\.com/i,name:'Instagram',icon:'◎'},
  {test:/(facebook\.com|fb\.com)/i,name:'Facebook',icon:'f'},
  {test:/(twitter\.com|x\.com)/i,name:'X / Twitter',icon:'𝕏'},
  {test:/(youtube\.com|youtu\.be)/i,name:'YouTube',icon:'▶'},
  {test:/tiktok\.com/i,name:'TikTok',icon:'♪'},
  {test:/linkedin\.com/i,name:'LinkedIn',icon:'in'},
  {test:/(wa\.me|whatsapp\.com)/i,name:'WhatsApp',icon:'☏'},
  {test:/^mailto:/i,name:'Email',icon:'✉'},
  {test:/telegram\.(me|org)|t\.me/i,name:'Telegram',icon:'➤'}
];
function contactDescriptor(href){return contactServiceMap.find(i=>i.test.test(href))||null;}
function renderBloggerContacts(links){const grid=$('#contactGrid'),loading=$('#contactLoading'),existing=new Set([...grid.querySelectorAll('a')].map(a=>a.href.replace(/\/$/,''))),seen=new Set();links.forEach(({href,label})=>{const info=contactDescriptor(href);if(!info)return;let absolute;try{absolute=new URL(href,'https://riyangiting.blogspot.com').href;}catch{return;}const normalized=absolute.replace(/\/$/,'');const key=`${info.name}:${normalized}`;if(existing.has(normalized)||seen.has(key))return;seen.add(key);const a=document.createElement('a');a.className='contact-item glass';a.href=absolute;a.target='_blank';a.rel='noopener';const display=(label||absolute).replace(/^https?:\/\//,'').replace(/^www\./,'').slice(0,70);a.innerHTML=`<span>${info.icon}</span><div><strong>${info.name}</strong><small></small></div><b>↗</b>`;a.querySelector('small').textContent=display;grid.insertBefore(a,loading||null);});loading?.remove();}
window.__riyanContactFeed=function(data){try{const entries=data?.feed?.entry||[];const page=entries.find(entry=>/kontak/i.test(entry?.title?.$t||'')||/\/p\/kontak-riyan\.html/i.test((entry?.link||[]).find(l=>l.rel==='alternate')?.href||''));if(!page)throw new Error();const doc=new DOMParser().parseFromString(page?.content?.$t||'','text/html');renderBloggerContacts([...doc.querySelectorAll('a[href]')].map(a=>({href:a.getAttribute('href'),label:a.textContent.trim()})));}catch{$('#contactLoading')?.remove();}};
function loadBloggerContacts(){const s=document.createElement('script');s.src='https://riyangiting.blogspot.com/feeds/pages/default?alt=json-in-script&max-results=50&callback=__riyanContactFeed';s.async=true;s.onerror=()=>$('#contactLoading')?.remove();document.head.appendChild(s);}

// ===== Navigasi =====
const menuToggle=$('#menuToggle'),navLinks=$('#navLinks');
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'✕':'☰';});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
document.addEventListener('click',e=>{if(!e.target.closest('.nav')&&navLinks.classList.contains('open')){navLinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}});
const observed=['top','quotes','kehidupunk','dreams','games','about','contact'].map(id=>document.getElementById(id)).filter(Boolean),navAnchors=$$('.nav-links a');
const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;navAnchors.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${visible.target.id}`));},{rootMargin:'-35% 0px -55% 0px',threshold:[0,.2,.5]});observed.forEach(s=>observer.observe(s));
const scrollTopBtn=$('#scrollTop');window.addEventListener('scroll',()=>scrollTopBtn.classList.toggle('show',scrollY>620),{passive:true});scrollTopBtn.addEventListener('click',()=>scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'}));

renderCarousel();setSpotlight(quotes[0]);setPunkQuote();loadDreamWall();showSharedDreamFromUrl();loadBloggerContacts();$('#year').textContent=new Date().getFullYear();
