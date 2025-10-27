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
// FILTRO DE POSIÇÕES (Plantel)
// ===============================
const filterButtons = document.querySelectorAll(".filter-btn");
const players = document.querySelectorAll(".player-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const position = btn.getAttribute("data-position");

    // muda estado ativo
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // mostra/esconde jogadores
    players.forEach(player => {
      if (position === "all" || player.dataset.position === position) {
        player.style.display = "block";
      } else {
        player.style.display = "none";
      }
    });
  });
});
