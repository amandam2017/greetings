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

// reference for requiredField
const requiredFieldErrorElem = document.querySelector('.requiredFieldError');
const emptyRadioErrorElem = document.querySelector('.emptyRadioError');

// instance for my factory function
var bulisa = greet();

function updateNames() {
   // bulisa.getName();
}

function greetThem() {
    // var outPut = greetApersonElem.value;

    var checkedButton = document.querySelector("input[name ='userLanguage']:checked");
    var chooseLanguage = checkedButton;
    var userName = putNameElem.value;

    
if (chooseLanguage && userName) {
    bulisa.setName(userName);

    greetApersonElem.innerHTML =  bulisa.greetEnteredName(userName, chooseLanguage);
    outputCounterElem.innerHTML =  bulisa.greetCounter();
    requiredFieldErrorElem.innerHTML = ""
}  else {
    requiredFieldErrorElem.innerHTML = bulisa.withRadionCheckedValidation(userName, chooseLanguage);
    greetApersonElem.innerHTML = ""
}
// display the the greeted person
// greetApersonElem.innerHTML =  bulisa.greetEnteredName(userName, chooseLanguage);
    // display the counter
// outputCounterElem.innerHTML =  bulisa.greetCounter();

// display error for required fields
// requiredFieldErrorElem.innerHTML = bulisa.withRadionCheckedValidation(userName, chooseLanguage);
emptyRadioErrorElem.innerHTML = bulisa.languagesUnchecked();


    clearInput()

}

function clearInput() { 
    document.getElementById("myForm").reset(); 
}

greetButtonElem.addEventListener('click', greetThem);
// requiredFieldErrorElem.addEventListener('click', bulisa.withRadionCheckedValidation)

//on css hide error messeage and add event on button click to display the error message


