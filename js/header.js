// const header = document.getElementById('header');
const menuResponsive = document.getElementById('menuResponsive');
const botonMenu = document.getElementById('botonMenu')
const botonMenuClose = document.getElementById('botonMenuClose')

document.addEventListener("DOMContentLoaded", () => {
  
    botonMenu.addEventListener('click', () => {
      menuResponsive.classList.remove('closed');
      menuResponsive.classList.add('open');
    });

    botonMenuClose.addEventListener('click', () => {
      menuResponsive.classList.remove('open');
      menuResponsive.classList.add('closed');
    });
    
  });