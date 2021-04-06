let result;
let firstValue;
let secondValue;
let displayText;
let sign;
function add() {
    firstValue = parseInt(document.getElementById("opone").value);
    secondValue = parseInt(document.getElementById("optwo").value);
    console.log('First Value = '+firstValue);
    console.log('Second Value = '+secondValue);
    result = firstValue+secondValue;
    console.log(result);
    sign = "+"
    console.log(sign);
    displayText = firstValue +" "+sign+" "+ secondValue+" "+"="+" "+result;
    document.getElementById("display").value = displayText;
}
function multiply() {
    firstValue = parseInt(document.getElementById("opone").value);
    secondValue = parseInt(document.getElementById("optwo").value);
    console.log('First Value = '+firstValue);
    console.log('Second Value = '+secondValue);
    result = firstValue*secondValue;
    console.log(result);
    sign = "x";
    console.log(sign);
    displayText = firstValue +" "+sign+" "+ secondValue+" "+"="+" "+result;
    document.getElementById("display").value = displayText;
}
function divide() {
    firstValue = parseInt(document.getElementById("opone").value);
    secondValue = parseInt(document.getElementById("optwo").value);
    console.log('First Value = '+firstValue);
    console.log('Second Value = '+secondValue);
    result = firstValue/secondValue;
    console.log(result);
    sign = ":";
    console.log(sign);
    displayText = firstValue +" "+sign+" "+ secondValue+" "+"="+" "+result;
    document.getElementById("display").value = displayText;
}
function clean() {
    // firstValue = parseInt(document.getElementById("opone").value);
    // secondValue = parseInt(document.getElementById("optwo").value);
    // console.log('First Value = '+firstValue);
    // console.log('Second Value = '+secondValue);
    // result = firstValue+secondValue;
    // console.log(result);
    // sign = "+"
    // console.log(sign);
    // displayText = firstValue +" "+sign+" "+ secondValue+" "+"="+" "+result;
    document.getElementById("display").value = null;
    document.getElementById("opone").value = null;
    document.getElementById("optwo").value = null;
}