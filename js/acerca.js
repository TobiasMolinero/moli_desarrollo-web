const infoText = document.getElementById("infoText");
const infoImage = document.getElementById("infoImage");

// Función para verificar si el elemento es visible en la ventana
function esElementoVisible(elemento) {
  var rect = elemento.getBoundingClientRect();
  
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Función para manejar el scroll y la animación
function manejarScroll() {
    
  if (esElementoVisible(infoText) && esElementoVisible(infoImage)) {

    // Si el elemento es visible, añade una clase para activar la animación
    infoText.classList.remove("info_empresa_text_hidden");
    infoText.classList.add("info_empresa_text");

    infoImage.classList.remove("info_image_hidden");
    infoImage.classList.add("info_image");
  }

}

// Escucha el evento de scroll y ejecuta la función manejarScroll
window.addEventListener("scroll", manejarScroll);

// Llama a la función una vez para verificar el estado inicial
manejarScroll();
