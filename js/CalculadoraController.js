//**************************************************************//
//*---------------Botones Calculadora--------------------------*//
//**************************************************************//
const btnCero = document.getElementById("btnCero");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");
const btnFive = document.getElementById("btnFive");
const btnSix = document.getElementById("btnSix");
const btnSeven = document.getElementById("btnSeven");
const btnEight = document.getElementById("btnEight");
const btnNine = document.getElementById("btnNine");
const btnMC = document.getElementById("btnMC");
const btnMPlus = document.getElementById("btnMPlus");
const btnMLess = document.getElementById("btnMLess");
const btnPlus = document.getElementById("btnPlus");
const btnLess = document.getElementById("btnLess");
const btnClear = document.getElementById("btnClear");
const btnPoint = document.getElementById("btnPoint");
const btnEqual = document.getElementById("btnEqual");
const btnDiv = document.getElementById("btnDiv");
const display = document.getElementById("display");
const btnMult = document.getElementById("btnMult");

//**************************************************************//
//*-----------------------FIN----------------------------------*//
//**************************************************************//

//--------------Declaracion de variables----------------//
let firstValue //Guardamos el primer valor de cada operacion
let secondValue //guardamos el segundo valor de cada operacion
let selectedOperator //Guardamos que operador se a utilizado
//------------------------FIN------------------------------//

//**************************************************************//
//*---------------Declaracion de Metodos-----------------------*//
//**************************************************************//

//-------Tomamos el valor del boton que a sido clikeado---------------//
const onClickFunction = function (event) {
  display.innerText += event.target.textContent
}

//-------Limpiamos la pantalla---------------//
const cleanFunction = function () {
  display.innerText = ''
}

//-------Guardamos el valor del display para mostrar el operador---------------//
const operatorFunction = function () {
  firstValue = parseFloat(display.innerText)
  display.innerText = ''
  selectedOperator = event.target.textContent
}

//-------Guardamos el segundo valor y realizamos la operacion---------------//
const resultFunction = function (event) {
  secondValue = parseFloat(display.innerText)
  let result
  switch (selectedOperator) {
    case '*':
      result = firstValue * secondValue
      break
    case '+':
      result = firstValue + secondValue
      break
    case '-':
      result = firstValue - secondValue
      break
    case '/':
      result = firstValue / secondValue
      break
    default:
      break
  }
  display.innerText = result
}

//-------Ingresamos un punto en el display---------------//
const pointFunction = function () {
  display.innerText += '.'
}
//**************************************************************//
//*-----------------------------FIN----------------------------*//
//**************************************************************//

//**************************************************************//
//*------Esperar que se cargue sitio y hacer....---------------*//
//**************************************************************//
window.onload = function () {

  btnSeven.onclick = onClickFunction
  btnEight.onclick = onClickFunction
  btnNine.onclick = onClickFunction
  btnFour.onclick = onClickFunction
  btnFive.onclick = onClickFunction
  btnSix.onclick = onClickFunction
  btnOne.onclick = onClickFunction
  btnTwo.onclick = onClickFunction
  btnThree.onclick = onClickFunction
  btnCero.onclick = onClickFunction

  btnPoint.onclick = pointFunction

  btnC.onclick = cleanFunction

  btnDiv.onclick = operatorFunction
  btnMult.onclick = operatorFunction
  btnSub.onclick = operatorFunction
  btnAdd.onclick = operatorFunction

  btnEqual.onclick = resultFunction

}
//**************************************************************//
//*-----------------------FIN----------------------------------*//
//**************************************************************//