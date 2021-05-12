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

var greetedNames = [];

if(localStorage['name']){
    greetedNames = JSON.parse(localStorage.getItem('name'))
}


var chooseLanguage = "";

function greetThem() {

    var checkedButton = document.querySelector("input[name ='userLanguage']:checked");

    var unchecked = chooseLanguage

    if(checkedButton){
     chooseLanguage = checkedButton.value;
        
    }

    var userName = putNameElem.value;
    // var userName = userName[0].toUpperCase() + userName.slice(1)

    
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

//set the local storage 
localStorage.setItem('name', greetedNames)
    clearInput();

    // lettersOnly()
    // storeNames()

}

//local storage
// function storeNames(){
//     var greetedNames = theName
//     localStorage.setItem('inputNames', theName)
// }


function clearInput() { 
    document.getElementById("myform").reset(); 
}

setTimeout(function () {requiredFieldErrorElem.innerHTML = "" }, 5)


// function lettersOnly(input){
//     var regex = /[^a-z]/gi;
//     input.value = input.value.replace(regex, "")
// }

greetButtonElem.addEventListener('click', greetThem);



