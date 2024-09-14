const toggleBtn = document.querySelector('.toggle_btn')
const search = document.querySelector('.search')
  const toggleBtnIcon = document.querySelector('.toggle_btn i')
  const searchIcon = document.querySelector('.search i')
  const dropDownMenu = document.querySelector('.dropdown_menu')
  const dropDownMenu2 = document.querySelector('.dropdown_menu.two')

  toggleBtn.onclick = function() {
      dropDownMenu.classList.toggle('open')
      const IsOpen = dropDownMenu.classList.contains('open')

      toggleBtnIcon.classList = IsOpen
  }
  search.onclick = function() {
      dropDownMenu2.classList.toggle('open')
      const IsOpen2 = dropDownMenu2.classList.contains('open')

      searchIcon.classList = IsOpen2
  }