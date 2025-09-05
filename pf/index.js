// Crear una pregunta
const crearPregunta = (texto, opciones) => ({
  texto,
  opciones,
  votos: new Array(opciones.length).fill(0),
});
// Crear encuesta
const crearEncuesta = (titulo) => ({
  titulo,
  preguntas: [],
  respondida: false,
});
// Agregar pregunta a la encuesta
const agregarPregunta = (encuesta, pregunta) => {
  encuesta.preguntas.push(pregunta);
};
// Registrar un voto
const votar = (pregunta, indiceOpcion) => {
  if (indiceOpcion >= 0 && indiceOpcion < pregunta.opciones.length) {
    pregunta.votos[indiceOpcion]++;
    console.log(`\n #========================================# `);
    console.log(`Voto registrado en "${pregunta.opciones[indiceOpcion]}"`);
  } else {
    console.log("Opción inválida");
  }
};
// Mostrar resultados de una pregunta
const mostrarResultadosPregunta = (pregunta) => {
  console.log(`\n Pregunta: ${pregunta.texto}`);
  pregunta.opciones.forEach((op, i) => {
    console.log(`   ${op}: ${pregunta.votos[i]} votos`);
  });
};
// Contar votos totales
const contarVotosTotales = (encuesta) =>
  encuesta.preguntas.reduce(
    (total, p) => total + p.votos.reduce((suma, v) => suma + v, 0),
    0
  );
// Responder encuesta
const responderEncuesta = (encuesta) => {
  console.log(`\n Respondiendo: ${encuesta.titulo}`);
  encuesta.preguntas.forEach((pregunta, i) => {
    let opcionesTexto = "";
    pregunta.opciones.forEach((op, idx) => {
      opcionesTexto += `${idx}: ${op}\n`;
    });
    let respuesta = prompt(
      `Pregunta ${i + 1}:\n${pregunta.texto}\nElige el número de tu opción:\n${opcionesTexto}`
    );
    votar(pregunta, parseInt(respuesta));
    mostrarResultadosPregunta(pregunta);
  });
  encuesta.respondida = true;
};
// Mostrar resultados de la encuesta
const mostrarResultados = (encuesta) => {
  console.log(`# Resultados de la encuesta: ${encuesta.titulo}`);
  encuesta.preguntas.forEach((pregunta, index) => {
    console.log(`\nPregunta ${index + 1}: ${pregunta.texto}`);
    pregunta.opciones.forEach((opcion, i) => {
      console.log(`  - ${opcion}: ${pregunta.votos[i]} votos`);
    });
  });
  console.log(`\nTotal de votos: ${contarVotosTotales(encuesta)}`);
};
// Menú principal (igual que en POO)
let encuesta = null;
function menu() {
  let salir = false;
  while (!salir) {
    let opcion = prompt(
      "=== MENÚ PRINCIPAL ===\n1. Crear encuesta\n2. Responder encuesta\n3. Ver resultados\n4. Salir\nElige una opción:"
    );
    switch (opcion) {
      case "1":
        let titulo = prompt("Ingresa el título de la encuesta:");
        encuesta = crearEncuesta(titulo);
        let numPreguntas = parseInt(
          prompt("¿Cuántas preguntas tendrá la encuesta? (mínimo 8)")
        );
        if (isNaN(numPreguntas) || numPreguntas < 8) {
          console.log("Debes ingresar al menos 8 preguntas.");
          break;
        }
        for (let i = 0; i < numPreguntas; i++) {
          let texto = prompt(`Escribe la pregunta ${i + 1}:`);
          let numOpciones = parseInt(
            prompt(
              `¿Cuántas opciones tendrá la pregunta ${i + 1}? (Entre 2 y 4)`
            )
          );
          if (isNaN(numOpciones) || numOpciones < 2 || numOpciones > 4) {
            console.log("Debes ingresar al menos 2 opciones.");
            i--;
            continue;
          }
          let opciones = [];
          for (let j = 0; j < numOpciones; j++) {
            let op = prompt(`Escribe la opción ${j + 1}:`);
            opciones.push(op);
          }
          agregarPregunta(encuesta, crearPregunta(texto, opciones));
        }
        console.log("Encuesta creada con éxito.");
        break;
      case "2":
        if (!encuesta) {
          console.log("Primero debes crear una encuesta.");
        } else {
          console.log(`\n #========================================# `);
          responderEncuesta(encuesta);
        }
        break;
      case "3":
        if (!encuesta) {
          console.log("Primero debes crear una encuesta.");
        } else if (!encuesta.respondida) {
          console.log("La encuesta aún no ha sido respondida.");
        } else {
          console.log(`\n #========================================# `);
          mostrarResultados(encuesta);
          console.log(`\n #========================================# `);
        }
        break;
      case "4":
        salir = true;
        console.log("Saliendo del programa...");
        break;
      default:
        console.log("Opción inválida, intenta de nuevo.");
    }
  }
}
menu();