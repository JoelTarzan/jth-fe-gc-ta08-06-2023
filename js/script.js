// Elementos del DOM
let calcResultDiv = document.getElementById('calc-result-div');
let btn0 = document.getElementById('btn-0');
let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let btn5 = document.getElementById('btn-5');
let btn6 = document.getElementById('btn-6');
let btn7 = document.getElementById('btn-7');
let btn8 = document.getElementById('btn-8');
let btn9 = document.getElementById('btn-9');
let btnPlus = document.getElementById('btn-+');
let btnMinus = document.getElementById('btn--');
let btnMultiply = document.getElementById('btn-*');
let btnEqual = document.getElementById('btn-=');
let btnPoint = document.getElementById('btn-.');
let btnClear = document.getElementById('btn-C');

// Eventos
const appendValue = (value) => {
    calcResultDiv.innerText += value;
};

const clearResult = () => {
    calcResultDiv.innerText = '';
}

const calculateResult = () => {
    console.log(calcResultDiv.innerText);
}