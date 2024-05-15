// Seleccionamos solo los botones con la clase "numero"
const buttonsNumbers = document.querySelectorAll(".numero");
let primerInput = 0;
let segundoInput = 0;
let operatorInput = "";

// Añadimos los listeners a los botones de número
buttonsNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    const inputValue = document.getElementById("input");
    inputValue.value = inputValue.value + button.textContent;
  });
});

const realizarOperacion = function(primerElemento, segundoElemento, operadorElementoId){
    switch(operadorElementoId){
        case "btn-mas":
            return primerElemento + segundoElemento
        case "btn-menos":
            return primerElemento - segundoElemento
        case "btn-mul":
            return primerElemento * segundoElemento
        case "btn-div":
            let num = primerElemento / segundoElemento;
            if(segundoElemento === 0)return "error"
            return num.toFixed(2);
        default:
            return "error"
    }
}

// Seleccionamos los botones de operación y añadimos los listeners
const buttonsOperation = document.querySelectorAll(".operacion");

buttonsOperation.forEach((operator) => {
  operator.addEventListener("click", () => {
    const inputValue = document.getElementById("input");
    const displayValue = document.getElementById("display-acumulado");

    // Guardamos el valor del input y el operador
    if (operatorInput) {
        segundoInput = Number(inputValue.value);
        resultado = realizarOperacion(primerInput, segundoInput, operatorInput);
        displayValue.textContent = resultado;
        primerInput = resultado;
      } else {
        primerInput = Number(inputValue.value);
        displayValue.textContent = primerInput;
      }
  
      // Guardamos el nuevo operador
      operatorInput = operator.id;
  
      // Limpiamos el input
      inputValue.value = "";
  });
});

const buttonsEqual = document.querySelector("#btn-ig");

    buttonsEqual.addEventListener("click", () => {
        const inputValue = document.getElementById("input");
        const displayValue = document.getElementById("display-acumulado");
        segundoInput = Number(inputValue.value);

        resultado = realizarOperacion(primerInput,segundoInput,operatorInput)
        displayValue.textContent = resultado
        inputValue.value = resultado;

        operatorInput = "";
    })