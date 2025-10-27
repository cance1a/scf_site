// ===========================
// SC Freamunde - Script Global
// ===========================

// Destaca o link do menu da página atual
document.querySelectorAll('.menu a').forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// (Opcional) Menu móvel - caso adiciones um botão depois
const toggleBtn = document.querySelector('.menu-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('open');
  });
}

// (Extra opcional) Efeito de fade-in simples nos elementos principais
window.addEventListener("load", () => {
  document.body.style.opacity = 0;
  document.body.style.transition = "opacity 0.8s ease";
  setTimeout(() => document.body.style.opacity = 1, 100);
});
// ===============================
// FILTRO DE EQUIPAS DE FORMAÇÃO
// ===============================
const teamButtons = document.querySelectorAll(".filter-btn");
const athletes = document.querySelectorAll(".player-card");

teamButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const team = btn.getAttribute("data-team");

    teamButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    athletes.forEach(player => {
      if (team === "all" || player.dataset.team === team) {
        player.style.display = "block";
      } else {
        player.style.display = "none";
      }
    });
  });
});

