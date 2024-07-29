function toggleMenu() {
  const menuButton = document.querySelector(".menuButton");
  const mobileMenu = document.querySelector(".mobileMenu");

  menuButton.classList.toggle("open");
  mobileMenu.classList.toggle("open");
}

function toggleProfileMenu() {
  const profileDropdown = document.querySelector(".profileDropdown");

  profileDropdown.classList.toggle("show");
}

document.addEventListener("click", function (event) {
  const profileDropdown = document.querySelector(".profileDropdown");
  const profileButton = document.querySelectorAll(".profileButton");

  if (
    !profileDropdown.contains(event.target) &&
    ![...profileButton].some((button) => button.contains(event.target))
  ) {
    profileDropdown.classList.remove("show");
  }
});
