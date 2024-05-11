function CloseMenu(doc) {
  let sideMenu = doc.getElementById("sidebar");
  sideMenu.style.display = "none";
}

function OpenMenu(doc) {
  let sideMenu = doc.getElementById("sidebar");
  sideMenu.style.display = "block";
}

function OpenSubMenu(doc) {
  let subMenu = doc.getElementById("submenu");
  let hideButton = doc.getElementById("arrow-up");
  let showButton = doc.getElementById("arrow-down");

  subMenu.style.display = "block";
  hideButton.style.display = "none";
  showButton.style.display = "flex";
}

function CloseSubMenu(doc) {
  let subMenu = doc.getElementById("submenu");
  let hideButton = doc.getElementById("arrow-down");
  let showButton = doc.getElementById("arrow-up");

  subMenu.style.display = "none";
  hideButton.style.display = "none";
  showButton.style.display = "flex";
}
