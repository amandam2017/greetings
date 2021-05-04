// reference the elements
const selectedLangElem = document.querySelector('.selectedLang');
// setName element
const putNameElem = document.querySelector('.enteredName');
// reference the button
const greetButtonElem = document.querySelector('.greetButton');
// reference outputCounter
const outputCounterElem = document.querySelector('.outputCounter');
//reference placeholder of output
const greetApersonElem = document.querySelector('.greetAperson');




// instance for my factory function
var bulisa = greet();

function updateNames() {
   // bulisa.getName();
}

function greetThem() {
    // var outPut = greetApersonElem.value;

    var checkedRadioBtn = document.querySelector("input[name ='userLanguage']:checked");
    var chooseLanguage = checkedRadioBtn.value;

    var userName = putNameElem.value;
    bulisa.setName(userName);

    console.log(userName);
// display the the greeted person
greetApersonElem.innerHTML =  bulisa.greetEnteredName(userName, chooseLanguage);
    // display the counter
outputCounterElem.innerHTML =  bulisa.greetCounter();

clearInput()

}

function clearInput() { 
    document.getElementById("myForm").reset(); 
}

greetButtonElem.addEventListener('click', greetThem);


