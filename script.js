// Selecciona el elemento span
const span = document.getElementById('cambiar');
const span2 = document.getElementById('nuevo');

// Define un arreglo de textos que quieres mostrar
const textos = ['Experiencias', 'Lugares', 'Amigos'];
const nuevos = ['Nuevos ', 'Nuevas ', 'Nuevos '];

const colores = ['#96E6ED','#A2F273','#47F3B0','#0FE6C4']

let index = 0;

// Función que actualiza el texto del span
function cambiarNuevo() {
  span2.textContent = nuevos[index];
  index++;
  if (index >= nuevos.length) {
    index = 0;
  }
}

function cambiarTexto() {
  span.textContent = textos[index];
  index++;

  span.style.color = colores[index];
  
  if (index >= textos.length) {
    index = 0;
  }
}

 



// Cambia el texto cada 2 segundos
setInterval(cambiarTexto, 2000);
setInterval(cambiarNuevo, 2000);