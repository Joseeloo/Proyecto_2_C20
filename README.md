# Proyecto: Sistema de Encuestas
Este repositorio contiene dos versiones del mismo proyecto, desarrolladas con distintos paradigmas de programación en JavaScript.

## Índice
- [Introducción general](#introducción-general)
- [Programación Orientada a Objetos (POO)](#programación-orientada-a-objetos-poo)
- [Programación Funcional (PF)](#programación-funcional-pf)

## Introducción general
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

## Programación Orientada a Objetos (POO)
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


## Control de versiones
Proyecto subido a GitHub en un repositorio individual.

## Tecnología usada
- JavaScript (POO)
- Git & GitHub para control de versiones

## Estado del proyecto
### Cumple con todos los requisitos solicitados:
- Creación dinámica de encuestas por parte del usuario
- Registro de votos y visualización en tiempo real
- Uso de clases, arrays y funciones flecha
- Validaciones y control de flujo correctamente implementados

---

## 🔁 Programación Funcional (PF)

---

**Autor:** José Esteban  
**Fecha de entrega:** 28-07-2025
