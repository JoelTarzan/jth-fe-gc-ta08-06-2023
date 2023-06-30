// Elementos del DOM
let screen = document.getElementById("calc-screen");

// Variables
let elements = [];
let elementsPostMultiplications = [];
let result = 0;
let operation = 'add';

// Eventos
const appendValue = (value) => {
    screen.innerText += value;
};

const clearScreen = () => {
	screen.innerText = '';
    clearArrays();
};

const clearArrays = () => {
    elements = [];
    elementsPostMultiplications = [];
}

const calculate = () => {
	elements = screen.innerText.split(/([+\-*])/);
    
    // Buscamos los operadores de multiplicacion
    for (let i = 0; i < elements.length; i++) {
        
        if (elements[i] == '*') {

            let numPrev = Number(elements[i-1]);
            let numPost = Number(elements[i+1]);
            let multiplicacion = numPrev * numPost;

            elementsPostMultiplications.pop(); // Corresponde al numPrev en el array
            elementsPostMultiplications.push(multiplicacion); // Metemos el resultado
            i += 1; // Sumamos el indice para que pase del numPost

        } else {
            elementsPostMultiplications.push(elements[i]);
        }
    }

    for (let i = 0; i < elementsPostMultiplications.length; i++) {
        
        if (elementsPostMultiplications[i] == '+') {
            operation = 'add';

        } else if (elementsPostMultiplications[i] == '-') {
            operation = 'subtract';

        } else {

            if (operation == 'add') {
                result += Number(elementsPostMultiplications[i]);

            } else {
                result -= Number(elementsPostMultiplications[i]);
            }
        }
    }

    clearScreen();
    appendValue(result);
    clearArrays();
    result = 0;
};
