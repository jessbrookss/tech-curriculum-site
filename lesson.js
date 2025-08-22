
// Drag & Drop Safe vs Not Safe
const chips = document.querySelectorAll('.chip');
const drops = document.querySelectorAll('.drop');
let dragItem = null;

chips.forEach(ch => {
  ch.addEventListener('dragstart', e => { dragItem = ch; ch.classList.add('dragging'); });
  ch.addEventListener('dragend', e => { dragItem = null; ch.classList.remove('dragging'); });
});

drops.forEach(d => {
  d.addEventListener('dragover', e => e.preventDefault());
  d.addEventListener('drop', e => {
    if(dragItem){ d.appendChild(dragItem); }
  });
});

document.getElementById('checkDrag').addEventListener('click', () => {
  const safe = Array.from(document.getElementById('safe').children).map(x=>x.textContent.trim());
  const nots = Array.from(document.getElementById('not').children).map(x=>x.textContent.trim());
  const shouldSafe = ['Clean hands','Two hands to carry','Gentle taps'];
  const shouldNot = ['Food and drink','Slamming the lid','Stacking heavy books'];
  const ok = shouldSafe.every(s=>safe.includes(s)) && shouldNot.every(s=>nots.includes(s));
  const out = document.getElementById('dragResult');
  out.textContent = ok ? 'Great job! ✅' : 'Keep trying — check each item. 💡';
  out.style.color = ok ? 'green' : '#b45309';
});

// Quick Quiz
document.querySelectorAll('.choice').forEach(btn => {
  btn.addEventListener('click', () => {
    const correct = 'Wash your hands';
    const res = document.getElementById('quizResult');
    if(btn.textContent.trim() === correct){
      res.textContent = 'Correct! ✅';
      res.style.color = 'green';
    } else {
      res.textContent = 'Not quite. Try again!';
      res.style.color = '#b45309';
    }
  });
});

// Login Simulator
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('loginMsg');
  msg.textContent = 'Nice! You logged in.';
  msg.style.color = 'green';
});

// Cursor reveal
document.querySelectorAll('.reveal').forEach(b => {
  b.addEventListener('click', () => {
    const name = b.getAttribute('data-name');
    const msg = document.getElementById('cursorMsg');
    msg.textContent = `That one is: ${name}`;
  });
});
