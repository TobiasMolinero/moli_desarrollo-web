const botonScrollUp = document.getElementById('buttonScrollUp');

document.addEventListener("DOMContentLoaded", () => {

    window.addEventListener('scroll', () => {
          // Obtener la posición actual del scroll
          var scrollPosition = window.scrollY || document.documentElement.scrollTop;
          
          // Agregar o quitar las clases según la posición del scroll
          if (scrollPosition > 300) {
            botonScrollUp.classList.remove("scroll_to_up_button_hidden");
            botonScrollUp.classList.add("scroll_to_up_button_showed");
          } else {
            botonScrollUp.classList.remove("scroll_to_up_button_showed");
            botonScrollUp.classList.add("scroll_to_up_button_hidden");
          }
    })

    botonScrollUp.addEventListener('click', () => {
        scrollToUp()
    });

    const scrollToUp = () => {
        window.scrollTo(0, 0);
    };

});
