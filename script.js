// ===== Edit project details here =====
const PROJECTS = {
  fitlog: {
    name: "FITLOG", image: "assets/fitlog.svg",
    short: "A Next.js app where you save and manage your daily workouts.",
    stack: ["Next.js", "TypeScript", "React"],
    description: "FITLOG lets you record your daily workouts and manage them in one place, so you can see what you did and keep a steady routine.",
    live: "#", repo: "https://github.com/abrahasin99/FITLOG",
    challenges: ["Planning how workout data is structured and stored.", "Keeping pages and state in sync while adding, editing and deleting entries.", "Making the layout comfortable on small phone screens."],
    future: ["Add user accounts so workouts sync across devices.", "Add progress charts and weekly summaries.", "Add workout templates and reminders."]
  },
  quizme: {
    name: "quizme", image: "assets/quizme.svg",
    short: "A quiz project built with JavaScript.",
    stack: ["JavaScript", "HTML", "CSS"],
    description: "quizme is a quiz project built with JavaScript where users answer questions and see how they did.",
    live: "#", repo: "https://github.com/abrahasin99/quizme",
    challenges: ["Handling question flow and scoring with plain JavaScript.", "Keeping the code organised as features grew.", "Giving clear feedback after each answer."],
    future: ["Add more categories and difficulty levels.", "Add a timer and a leaderboard.", "Load questions from an API."]
  },
  "ph14-a05": {
    name: "ph14-a05", image: "assets/ph14-a05.svg",
    short: "A React project built with TypeScript.",
    stack: ["React", "TypeScript"],
    description: "A React project built with TypeScript, created while practising component-based development.",
    live: "#", repo: "https://github.com/abrahasin99/ph14-a05",
    challenges: ["Typing props and state correctly with TypeScript.", "Splitting the UI into reusable components.", "Fetching and displaying data cleanly."],
    future: ["Improve accessibility and loading states.", "Add tests for key components.", "Polish the design and add more features."]
  }
};
// ===== Navbar =====
const menu = document.getElementById("menu"), burger = document.getElementById("burger");
if (burger) {
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
}
// ===== Home: project cards =====
const grid = document.getElementById("cards");
if (grid) grid.innerHTML = Object.entries(PROJECTS).map(([id, p]) =>
  `<article class="card"><img src="${p.image}" alt="${p.name} project preview"><div class="in"><h3>${p.name}</h3>
  <ul class="tags">${p.stack.map(s => `<li>${s}</li>`).join("")}</ul><p>${p.short}</p>
  <a class="btn ghost" href="project.html?id=${encodeURIComponent(id)}">View details</a></div></article>`).join("");
// ===== Detail page =====
const box = document.getElementById("detail");
if (box) {
  const p = PROJECTS[new URLSearchParams(location.search).get("id")];
  if (!p) box.innerHTML = `<h1>Project not found</h1><p><a href="index.html#projects">Back to projects</a></p>`;
  else {
    document.title = p.name + " | Abu Raihan Tashin";
    const li = a => `<ul class="l">${a.map(x => `<li>${x}</li>`).join("")}</ul>`;
    box.innerHTML = `<a href="index.html#projects" class="muted">&larr; Back to projects</a><h1>${p.name}</h1>
    <img src="${p.image}" alt="${p.name} project preview">
    <div class="btns"><a class="btn primary" href="${p.live}" target="_blank" rel="noopener">Live project</a>
    <a class="btn ghost" href="${p.repo}" target="_blank" rel="noopener">GitHub repository</a></div>
    <h2>Main technology stack</h2><ul class="tags">${p.stack.map(s => `<li>${s}</li>`).join("")}</ul>
    <h2>Description</h2><p>${p.description}</p>
    <h2>Challenges faced</h2>${li(p.challenges)}
    <h2>Future plans and improvements</h2>${li(p.future)}`;
  }
}
