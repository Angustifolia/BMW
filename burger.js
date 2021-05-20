const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');
const menuLinkElems = document.querySelectorAll('.menu-list__link');

const ToggleMenu = () => {
    menuElem.classList.toggle('menu-active');
    humburgerElem.classList.toggle('humburger-menu-active');
}

const MenuClose = () => {
    menuElem.classList.remove('menu-active');
    humburgerElem.classList.remove('humburger-menu-active');
}

humburgerElem.addEventListener('click', ToggleMenu);

menuLinkElems.forEach(menuLink => {
  menuLink.addEventListener('click', (event) => {
      const target = event.target;
      if (target.classList.contains('menu-list__link')) {
          MenuClose();
      }
  })
})