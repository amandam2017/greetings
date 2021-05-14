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

var greetedNames = []

if(localStorage['nameList']){
    //if theres a name on local storage 
    greetedNames = JSON.parse(localStorage.getItem('nameList'))
}

// instance for my factory function and it takes data from the local storage
var bulisa = greet(greetedNames);


outputCounterElem.innerHTML =  bulisa.greetCounter();


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

// outputCounterElem.innerHTML =  bulisa.greetCounter();


//set the local storage 
 let key = bulisa.getName();
 localStorage.setItem('nameList', JSON.stringify(key))

    clearInput();

    // lettersOnly();
    // storeNames()

}

function clearInput() { 
    document.getElementById("myform").reset(); 
}

// function lettersOnly(input){
//     var regex = /[^a-z]/gi;
//     input.value = input.value.replace(regex, "")
// }

greetButtonElem.addEventListener('click', greetThem);