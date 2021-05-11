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

var chooseLanguage = "";

function greetThem() {

    var checkedButton = document.querySelector("input[name ='userLanguage']:checked");

    // var unchecked = chooseLanguage

    if(checkedButton){
     chooseLanguage = checkedButton.value;
        
    }

    var userName = putNameElem.value;

    
if (chooseLanguage && userName) {
    bulisa.setName(userName);

    greetApersonElem.innerHTML =  bulisa.greetEnteredName(userName, chooseLanguage);
    outputCounterElem.innerHTML =  bulisa.greetCounter();
    requiredFieldErrorElem.innerHTML = ""
    emptyRadioErrorElem.innerHTML = ""

} 
  else if(chooseLanguage && userName === '' || userName === undefined){
    requiredFieldErrorElem.innerHTML = bulisa.withRadionCheckedValidation(userName, chooseLanguage);
    greetApersonElem.innerHTML = ""
    
}

else {
    emptyRadioErrorElem.innerHTML = bulisa.validateEmptyForm(userName, chooseLanguage)
    greetApersonElem.innerHTML = ""
    requiredFieldErrorElem.innerHTML = ""

}

    clearInput()

}

function clearInput() { 
    document.getElementById("form").reset(); 
}

greetButtonElem.addEventListener('click', greetThem);



