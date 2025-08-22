
// TEACHER_NAME is stored in script.js on the main page.
// For the launch page, we'll read it from URL param or default to 'Ms. Brooks'.
const TEACHER_NAME_LAUNCH = "Ms. Brooks";

document.getElementById("yr").textContent = new Date().getFullYear();
document.getElementById("teacher").textContent = TEACHER_NAME_LAUNCH;

const gradesEl = document.getElementById("grades");

// We expect SITE_MENU with labels: Kindergarten, 1st Grade, 2nd Grade, 3rd Grade
function getGroup(label){
  return SITE_MENU.find(g => g.label === label);
}

function renderSimpleList(links){
  const div = document.createElement("div");
  div.className = "list";
  links.forEach(l => {
    const a = document.createElement("a");
    a.href = l.href || "#";
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = l.text;
    div.appendChild(a);
  });
  return div;
}

function renderKindergartenMega(columns){
  const wrap = document.createElement("div");
  wrap.className = "list";
  columns.slice(0,3).forEach(col => {
    const h = document.createElement("h4");
    h.textContent = col.title;
    wrap.appendChild(h);
    col.items.slice(0,6).forEach(it => {
      const a = document.createElement("a");
      a.href = it.href || "#";
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = it.text;
      wrap.appendChild(a);
    });
  });
  return wrap;
}

function makeGradeCard(title, group, primaryLink){
  const card = document.createElement("div");
  card.className = "grade-card";

  const h2 = document.createElement("h2");
  h2.textContent = title;
  card.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = "Quick links";
  card.appendChild(p);

  const btn = document.createElement("a");
  btn.className = "grade-btn primary";
  btn.href = primaryLink;
  btn.textContent = "Open";
  btn.target = "_blank";
  btn.rel = "noopener";
  card.appendChild(btn);

  if(group){
    if(group.type === "mega"){
      card.appendChild(renderKindergartenMega(group.columns));
    } else {
      card.appendChild(renderSimpleList(group.links));
    }
  }
  return card;
}

const k = getGroup("Kindergarten");
const g1 = getGroup("1st Grade");
const g2 = getGroup("2nd Grade");
const g3 = getGroup("3rd Grade");

gradesEl.appendChild(makeGradeCard("Kindergarten", k, "index.html"));
gradesEl.appendChild(makeGradeCard("1st Grade", g1, "index.html"));
gradesEl.appendChild(makeGradeCard("2nd Grade", g2, "index.html"));
gradesEl.appendChild(makeGradeCard("3rd Grade", g3, "index.html"));
