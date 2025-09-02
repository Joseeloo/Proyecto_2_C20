// Clase Pregunta
class Pregunta {
  constructor(texto, opciones) {
    this.texto = texto;
    this.opciones = opciones;
    this.votos = new Array(opciones.length).fill(0);
  }
  votar(indiceOpcion) {
    if (indiceOpcion >= 0 && indiceOpcion < this.opciones.length) {
      this.votos[indiceOpcion]++;
      console.log(`\n #========================================# `);
      console.log(`Voto registrado en "${this.opciones[indiceOpcion]}"`);
    } else {
      console.log("Opción inválida");
    }
  }
  mostrarResultados() {
    console.log(`\n Pregunta: ${this.texto}`);
    this.opciones.forEach((op, i) => {
      console.log(`   ${op}: ${this.votos[i]} votos`);
    });
  }
}
// Clase Encuesta
class Encuesta {
  constructor(titulo) {
    this.titulo = titulo;
    this.preguntas = [];
    this.respondida = false;
  }
  agregarPregunta(pregunta) {
    this.preguntas.push(pregunta);
  }
  contarVotosTotales = () => {
    return this.preguntas.reduce((total, p) => {
      return total + p.votos.reduce((suma, v) => suma + v, 0);
    }, 0);
  };
  responderEncuesta() {
    console.log(`\n Respondiendo: ${this.titulo}`);
    for (let i = 0; i < this.preguntas.length; i++) {
      let pregunta = this.preguntas[i];
      let opcionesTexto = "";
      pregunta.opciones.forEach((op, idx) => {
        opcionesTexto += `${idx}: ${op}\n`;
      });
      let respuesta = prompt(`Pregunta ${i + 1}:\n${pregunta.texto}\nElige el número de tu opción:\n${opcionesTexto}`);
      pregunta.votar(parseInt(respuesta));
      pregunta.mostrarResultados();
    }
    this.respondida = true;
  }
  mostrarResultados() {
    console.log(`# Resultados de la encuesta: ${this.titulo}`);
    this.preguntas.forEach((pregunta, index) => {
      console.log(`\nPregunta ${index + 1}: ${pregunta.texto}`);
      pregunta.opciones.forEach((opcion, i) => {
        console.log(`  - ${opcion}: ${pregunta.votos[i]} votos`);
      });
    });
    console.log(`\nTotal de votos: ${this.contarVotosTotales()}`);
  }
}
// Menu desplegable
let encuesta = null;
function menu() {
  let salir = false;
  while (!salir) {
    let opcion = prompt("=== MENÚ PRINCIPAL ===\n1. Crear encuesta\n2. Responder encuesta\n3. Ver resultados\n4. Salir\nElige una opción:");
    switch (opcion) {
      case "1": // Crear encuesta
        let titulo = prompt("Ingresa el título de la encuesta:");
        encuesta = new Encuesta(titulo);
        let numPreguntas = parseInt(prompt("¿Cuántas preguntas tendrá la encuesta? (mínimo 8)"));
        if (isNaN(numPreguntas) || numPreguntas < 8) {
          console.log("Debes ingresar al menos 8 preguntas.");
          break;
        }
        for (let i = 0; i < numPreguntas; i++) {
          let texto = prompt(`Escribe la pregunta ${i + 1}:`);
          let numOpciones = parseInt(prompt(`¿Cuántas opciones tendrá la pregunta ${i + 1}? (Entre 2 y 4)`));
          if (isNaN(numOpciones) || numOpciones < 2 || numOpciones > 4) {
            console.log("Debes ingresar al menos 2 opciones.");
            i--; // repetir la pregunta
            continue;
          }
          let opciones = [];
          for (let j = 0; j < numOpciones; j++) {
            let op = prompt(`Escribe la opción ${j + 1}:`);
            opciones.push(op);
          }
          encuesta.agregarPregunta(new Pregunta(texto, opciones));
        }
        console.log("Encuesta creada con éxito.");
        break;
      case "2": // Responder encuesta
        if (!encuesta) {
          console.log("Primero debes crear una encuesta.");
        } else {
          console.log(`\n #========================================# `);
          encuesta.responderEncuesta();
        }
        break;
      case "3": // Ver resultados
        if (!encuesta) {
          console.log("Primero debes crear una encuesta.");
        } else if (!encuesta.respondida) {
          console.log("La encuesta aún no ha sido respondida.");
        } else {
          console.log(`\n #========================================# `);
          encuesta.mostrarResultados();
          console.log(`\n #========================================# `);
        }
        break;
      case "4": // Salir
        salir = true;
        console.log("Saliendo del programa...");
        break;
      default:
        console.log("Opción inválida, intenta de nuevo.");
    }
  }
}
menu();