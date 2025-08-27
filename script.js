// js/script.js
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

// Pastikan tidak ada 'hidden' tertinggal agar animasi jalan
mobileMenu?.classList.remove("hidden");

function openMenu() {
  mobileMenu.classList.remove("invisible", "opacity-0", "-translate-y-2");
  // opsional: kunci scroll saat menu terbuka
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.add("opacity-0", "-translate-y-2");
  // tunggu animasi 200ms, lalu invisible
  setTimeout(() => {
    mobileMenu.classList.add("invisible");
    document.body.style.overflow = "";
  }, 200);
}

function isOpen() {
  return !mobileMenu.classList.contains("invisible");
}

hamburger?.addEventListener("click", (e) => {
  e.preventDefault();
  isOpen() ? closeMenu() : openMenu();
});

// Tutup saat klik salah satu link menu
mobileMenu?.addEventListener("click", (e) => {
  if (e.target.tagName === "A") closeMenu();
});

// Tutup saat klik di luar menu & tombol
document.addEventListener("click", (e) => {
  const clickInsideMenu = mobileMenu.contains(e.target);
  const clickOnHamburger = hamburger.contains(e.target);
  if (isOpen() && !clickInsideMenu && !clickOnHamburger) {
    closeMenu();
  }
});

// Tutup saat tekan Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isOpen()) closeMenu();
});

