let menuOpen2 = false;
let profileMenuOpen2 = false;

const toggleMenu = () => {
  menuOpen2 = !menuOpen2;
  const navLinks = document.querySelector(".navLinks2");
  const mobileMenu = document.querySelector(".mobileMenu2");
  navLinks.classList.toggle("open", menuOpen2);
  mobileMenu.classList.toggle("open", menuOpen2);
};

const toggleProfileMenu = () => {
  profileMenuOpen2 = !profileMenuOpen2;
  const profileDropdown = document.querySelector(".profileDropdown2");
  profileDropdown.style.display = profileMenuOpen2 ? "block" : "none";
};
