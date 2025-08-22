
// Personalization — change this to your preferred display name
const TEACHER_NAME = "Ms. Brooks";

// --- Render name & hero
document.getElementById("teacher-name").textContent = TEACHER_NAME;
document.getElementById("hero-title").textContent = `Welcome to ${TEACHER_NAME}'s Tech Curriculum`;
document.getElementById("copyright").textContent = `© ${new Date().getFullYear()} ${TEACHER_NAME}. Built with ♥.`;

// --- Build menu
const menu = document.getElementById("menu");
const mega = document.getElementById("mega");
let openLabel = null;

function closeMega(){ openLabel=null; mega.classList.add("hidden"); }
function openMegaFor(label, columns){
  openLabel = label;
  mega.innerHTML = `
    <div class="mega-grid">
      ${columns.map(col => `
        <div>
          <h4>${col.title}</h4>
          ${col.items.map(it => `<a href="${it.href}" target="_blank" rel="noopener">${it.text}</a>`).join("")}
        </div>`).join("")}
    </div>`;
  mega.classList.remove("hidden");
}

SITE_MENU.forEach(group => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.className = "nav-btn";
  btn.textContent = group.label + " ▾";
  btn.addEventListener("mouseenter", () => {
    if(group.type === "mega"){ openMegaFor(group.label, group.columns); }
    else {
      const links = group.links.map(l => `<a href="${l.href}" target="_blank" rel="noopener">${l.text}</a>`).join("");
      mega.innerHTML = `<div class="mega-grid" style="grid-template-columns:repeat(1,1fr)"><div><h4>${group.label}</h4>${links}</div></div>`;
      mega.classList.remove("hidden");
    }
  });
  li.appendChild(btn);
  menu.appendChild(li);
});

// Close mega when mouse leaves the mega area
mega.addEventListener("mouseleave", closeMega);
document.addEventListener("scroll", closeMega);

// Mobile toggle (shows a simple list popover by reusing mega panel)
document.getElementById("mobileToggle").addEventListener("click", () => {
  if(!mega.classList.contains("hidden")) { closeMega(); return; }
  mega.innerHTML = `
    <div class="mega-grid" style="grid-template-columns:repeat(1,1fr)">
      ${SITE_MENU.map(g => `
        <div>
          <h4>${g.label}</h4>
          ${
            g.type==="mega"
            ? g.columns.map(c => `<div style="margin:.4rem 0 .2rem;color:#6b7280;font-size:12px">${c.title}</div>${c.items.map(it=> `<a href="${it.href}" target="_blank" rel="noopener">${it.text}</a>`).join("")}`).join("")
            : g.links.map(l=> `<a href="${l.href}" target="_blank" rel="noopener">${l.text}</a>`).join("")
          }
        </div>`).join("")}
    </div>`;
  mega.classList.remove("hidden");
});
