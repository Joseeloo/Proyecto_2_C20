# Proyecto: Sistema de Encuestas
> ⚠️ **IMPORTANTE: Comportamiento especial en la consola del navegador**
Este proyecto utiliza `prompt()` para interactuar con el usuario. Debido a cómo los navegadores manejan los cuadros de diálogo, los mensajes de `console.log()` pueden **no aparecer inmediatamente**. En su lugar, se muestran todos juntos al final del flujo (por ejemplo, al seleccionar "Salir").
### ¿Qué hacer?
- Abre la consola antes de comenzar.
- Interactúa normalmente con los cuadros de diálogo.
- Si los mensajes no aparecen en tiempo real, selecciona "Salir" para verlos todos.
- Recarga la página si querés una ejecución más fluida.
> ⚠️ **IMPORTANTE: Recomendación para evitar bloqueo de consola**

Antes de comenzar, se recomienda seguir estos pasos para asegurar que los mensajes en consola se muestren correctamente mientras se ejecuta:
### Pasos sugeridos
1. **Abrir la consola del navegador** (`Ctrl + Shift + J` o `F12`).
2. **Elegir la opción "4. Salir" al inicio**, luego **recargar la página**.
3. Comenzar a interactuar con el menú desde cero.

Esto permite que la consola se desbloquee y los mensajes de `console.log()` se muestren **al instante**, evitando que se acumulen hasta el final.
> Este comportamiento es propio del uso de `prompt()` en navegadores y **no afecta la lógica del programa**.

---

## Índice
- [Introducción general](#introducción-general)
- [Programación Orientada a Objetos (POO)](#programación-orientada-a-objetos-poo)
- [Programación Funcional (PF)](#programación-funcional-pf)

# Introducción general
Bienvenido al segundo proyecto del bootcamp, donde pondrás en práctica conceptos fundamentales de programación en JavaScript, estructuras de datos, control de flujo y herramientas colaborativas como Git y GitHub.
El objetivo principal es desarrollar un programa interactivo que permita a los usuarios crear encuestas, votar y visualizar resultados en tiempo real, todo desde la consola del navegador, enlazado a un archivo HTML. Esta solución se construirá aplicando dos enfoques complementarios: Programación Orientada a Objetos (POO) y Programación Funcional (PF).
- A lo largo del desarrollo, fortalecerás habilidades clave como:
- Uso de variables, constantes y operadores.
- Implementación de condiciones y bucles.
- Manipulación de arrays y objetos.
- Creación y uso de funciones (tradicionales, flecha y anónimas).
- Aplicación de principios de diseño modular y reutilizable.
- Control de versiones con Git y colaboración en GitHub.

Este repositorio documenta todo el proceso técnico, desde la estructura del código hasta las decisiones de diseño, con el objetivo de facilitar la transferencia de conocimiento y la escalabilidad del proyecto.

---

# Programación Orientada a Objetos (POO)
## Objetivo
Construir un programa en JavaScript utilizando el paradigma de Programación Orientada a Objetos (POO) que permita a los usuarios crear encuestas, votar y visualizar los resultados en tiempo real. El sistema debe aplicar conceptos fundamentales de programación, estructuras de datos y control de flujo.

## Funcionalidades del sistema
### Interacción con el usuario
- Menú principal con opciones para:
  - Crear encuesta
  - Responder encuesta
  - Ver resultados
  - Salir del programa
  
### Creación de encuesta
- Ingreso del título de la encuesta
- Definición del número de preguntas (mínimo 8)
- Para cada pregunta:
  - Texto de la pregunta
  - Número de opciones (entre 2 y 4)
  - Ingreso de cada opción
  
### Votación
- Muestra cada pregunta con sus opciones numeradas
- El usuario selecciona una opción por número
- Se registra el voto y se muestra el resultado parcial inmediatamente

### Visualización de resultados
- Muestra el título de la encuesta
- Lista cada pregunta con su número, texto y votos por opción
- Calcula y muestra el total de votos registrados

## Estructura del programa
### Clases utilizadas
> Pregunta
- Propiedades:
  - texto: enunciado de la pregunta
  - opciones: array de opciones disponibles
  - votos: array que cuenta los votos por opción
- Métodos:
  - votar(indiceOpcion): registra el voto
  - mostrarResultados(): imprime los resultados de la pregunta
> Encuesta
- Propiedades:
  - titulo: nombre de la encuesta
  - preguntas: array de objetos Pregunta
  - respondida: booleano que indica si ya fue respondida
- Métodos:
  - agregarPregunta(pregunta): añade una pregunta
  - responderEncuesta(): permite votar en cada pregunta
  - mostrarResultados(): imprime resultados completos
  - contarVotosTotales(): función flecha que suma todos los votos

## Control de flujo
- Uso de switch para manejar el menú principal
- Validaciones con if y isNaN para entradas numéricas
- Bucles for para recorrer preguntas y opciones
- Uso de continue y break para controlar errores de entrada

## Operaciones y estructuras
- Arrays para almacenar preguntas, opciones y votos
- Objetos para encapsular lógica de cada pregunta y encuesta
- Función flecha para contar votos totales
- Uso de prompt() para interacción directa con el usuario

## Ejemplo de uso 
Para el ejemplo de uso se limito el numero de preguntas a 2 pero en el codigo del proyecto son minimo 8 preguntas, las opcines utilizadas fueron 3 y se respondio 3 veces probando todas las opciones generadas.

### Menu principal:
<img width="531" height="346" alt="image" src="https://github.com/user-attachments/assets/48d80380-6362-428a-a444-7d768cf6a340" />

Entrada del usuario: Opcion 1: Crear encuestas
```
- Ingresa el título de la encuesta: “Preferencias de viaje”
- ¿Cuántas preguntas tendrá la encuesta?: 2
- Escribe la pregunta 1: “¿Destino favorito?”
- ¿Cuántas opciones tendrá la pregunta 1? (Entre 2 y 4): 3
- Escribe la opción 1: “Playa”
- Escribe la opción 2: “Montaña”
- Escribe la opción 3: “Ciudad”
- Escribe la pregunta 2: “¿Medio de transporte?”
- ¿Cuántas opciones tendrá la pregunta 1? (Entre 2 y 4): 3
- Escribe la opción 1: “Avión”
- Escribe la opción 2: “Bus”
- Escribe la opción 3: “Auto”
```
<img width="625" height="49" alt="image" src="https://github.com/user-attachments/assets/ed0f71ed-8470-4357-8c71-5451934fb324" />

Entrada del usuario: Opcion 2: Responder encuestas (x3)

<img width="578" height="47" alt="image" src="https://github.com/user-attachments/assets/da2590db-edf6-48d7-97f1-6c311bf7d762" />
```
- Pregunta 1: ¿Destino favorito?
  - 0: Playa
  - 1: Montaña
  - 2: Ciudad
Respuesta: 0
```
<img width="582" height="243" alt="image" src="https://github.com/user-attachments/assets/8170325c-3581-4607-860b-047752c31d96" />

```
- Pregunta 2: ¿Medio de transporte?
  - 0: Avión
  - 1: Bus
  - 2: Auto
```
<img width="581" height="251" alt="image" src="https://github.com/user-attachments/assets/305c0a30-a26b-4c66-9d13-791715f031a9" />

Entrada del usuario: Opcion 3: Ver Resultados

<img width="595" height="374" alt="image" src="https://github.com/user-attachments/assets/c6741b49-b8ff-4564-89c0-f54de8d77166" />

Entrada del usuario: Opcion 4: Salir

<img width="578" height="33" alt="image" src="https://github.com/user-attachments/assets/0d9d5aa0-7e22-431e-82a9-3828c7c50ecc" />


## Control de versiones
Proyecto subido a GitHub en un repositorio individual.

## Tecnología usada
- JavaScript (POO)
- HTML
- Git & GitHub para control de versiones

## Estado del proyecto
### Cumple con todos los requisitos solicitados:
- Creación dinámica de encuestas por parte del usuario
- Registro de votos y visualización en tiempo real
- Uso de clases, arrays y funciones flecha
- Validaciones y control de flujo correctamente implementados

---

# Programación Funcional (PF)
## Objetivo
Construir un programa en JavaScript utilizando el paradigma de Programación Funcional (PF) que permita a los usuarios crear encuestas, votar y visualizar los resultados en tiempo real. La idea es mostrar cómo, sin necesidad de clases, se pueden lograr las mismas funcionalidades usando funciones puras, arrays y objetos literales.

## Funcionalidades del sistema
(Se repiten las mismas que en POO, pero aclarando que ahora se resuelven con funciones en vez de métodos de clases)
- Interacción con el usuario
  - Menú principal con opciones:
    1.  Crear encuesta
    2.  Responder encuesta
    3.  Ver resultados
    4.  Salir del programa
- Creación de encuesta
  - Ingreso del título de la encuesta
  - Definición del número de preguntas (mínimo 8)
  - Para cada pregunta:
    - Texto de la pregunta
    - Número de opciones (entre 2 y 4)
    - Ingreso de cada opción
- Votación
  - Muestra cada pregunta con sus opciones numeradas
  - El usuario selecciona una opción por número
  - Se registra el voto y se muestra el resultado parcial inmediatamente
- Visualización de resultados
  - Muestra el título de la encuesta
  - Lista cada pregunta con su número, texto y votos por opción
  - Calcula y muestra el total de votos registrados

## Estructura del programa (PF)
En lugar de clases, se usan funciones y objetos literales:

## Funciones principales
- crearPregunta(texto, opciones) → devuelve un objeto {texto, opciones, votos}.
- crearEncuesta(titulo) → devuelve un objeto {titulo, preguntas, respondida}.
- agregarPregunta(encuesta, pregunta) → añade preguntas a la encuesta.
- votar(pregunta, indiceOpcion) → registra un voto en la opción indicada.
- mostrarResultadosPregunta(pregunta) → imprime los resultados de una sola pregunta.
- contarVotosTotales(encuesta) → calcula la suma de todos los votos usando reduce.
- responderEncuesta(encuesta) → permite al usuario votar cada pregunta.
- mostrarResultados(encuesta) → imprime los resultados completos.

## Control de flujo
Menú principal: implementado con while + switch.
- Validaciones: con if y isNaN.
- Bucles y funciones de orden superior:
  - for para recorrer preguntas.
  - forEach para opciones y votos.
  - reduce para contar votos.

## Operaciones y estructuras
- Arrays para almacenar opciones y votos.
- Objetos literales para representar preguntas y encuestas.
- Funciones puras y flecha (=>).
- prompt() para interacción directa con el usuario.

## Funcionamiento
El funcionamiento es equivalente al de la versión POO:

1. Al ejecutar el programa en el navegador, se abre un menú principal con cuatro opciones:  
   - Crear encuesta  
   - Responder encuesta  
   - Ver resultados  
   - Salir  
2. Al crear una encuesta, se solicita:  
   - El título de la encuesta.  
   - El número de preguntas (mínimo 8).  
   - El texto de cada pregunta y sus opciones de respuesta (entre 2 y 4).  
3. Al responder, se muestran las preguntas con sus opciones numeradas.  
   El usuario elige un número y el sistema registra el voto, mostrando los resultados parciales en tiempo real.  
4. Al ver resultados, se imprime en la consola el resumen de votos por pregunta y el total de votos.  

> ⚠️ Al igual que en la versión POO, debido al uso de `prompt()`, los mensajes en la consola pueden acumularse y mostrarse todos al seleccionar "Salir". Esto no afecta la lógica del programa.


## Control de versiones
Proyecto subido a GitHub en un repositorio individual.

## Tecnología usada
- JavaScript (PF)
- HTML
- Git & GitHub para control de versiones

## Estado del proyecto
Cumple con todos los requisitos solicitados:
- Creación dinámica de encuestas por parte del usuario
- Registro de votos y visualización en tiempo real
- Uso de funciones, arrays y objetos literales
- Validaciones y control de flujo correctamente implementados

---

**Autor:** José Esteban  
**Fecha de entrega:** 08-09-2025
