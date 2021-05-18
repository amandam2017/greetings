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
// reference of the clear button
const resetBtn = document.querySelector('.clear');
// view local storage
const outputStorage = document.getElementById('showStorage');
const viewBtn = document.querySelector('.view');


var greetedNames = []

if (localStorage['nameList']) {
    //if theres a name on local storage 
    greetedNames = JSON.parse(localStorage.getItem('nameList'))
}

// instance for my factory function and it takes data from the local storage
var bulisa = greet(greetedNames);


outputCounterElem.innerHTML = bulisa.greetCounter();


var chooseLanguage = "";

function greetThem() {

    var checkedButton = document.querySelector("input[name ='userLanguage']:checked");

    var unchecked = chooseLanguage

    if (checkedButton) {
        chooseLanguage = checkedButton.value;

    }

    var userName = putNameElem.value;
    if (userName != '') {
        userName = userName[0].toUpperCase() + userName.slice(1)
    }

    if (chooseLanguage && userName) {
        bulisa.setName(userName);

        greetApersonElem.innerHTML = bulisa.greetEnteredName(userName, chooseLanguage);
        outputCounterElem.innerHTML = bulisa.greetCounter();
        requiredFieldErrorElem.innerHTML = ""
        emptyRadioErrorElem.innerHTML = ""

    } else if (chooseLanguage && userName === '' || userName === undefined) {
        requiredFieldErrorElem.innerHTML = bulisa.withRadionCheckedValidation(userName, chooseLanguage);
        greetApersonElem.innerHTML = ""

    } else {

        emptyRadioErrorElem.innerHTML = bulisa.validateEmptyForm(userName, chooseLanguage)
        greetApersonElem.innerHTML = ""
        requiredFieldErrorElem.innerHTML = ""

    }

    //set the local storage 
    let key = bulisa.getName();
    localStorage.setItem('nameList', JSON.stringify(key))

    clearInput();
    // lettersOnly()

    // lettersOnly();
    setTimeout(function(){
        emptyRadioErrorElem.innerHTML = ""
        requiredFieldErrorElem.innerHTML = ""
        outputStorage.innerHTML = ""

    }, 5000)

}

function clearInput() {
    document.getElementById("myform").reset();
}

function resetFun() {
    localStorage.clear()
    location.reload()
}

function viewStorage() {
    var storageData = JSON.parse(localStorage.getItem('nameList'))
    document.getElementById("showStorage").innerHTML = "";

    // console.log(localStorage)

    for (var i = 0; i < storageData.length; i++) {
        console.log('This is me: ' + storageData[i]);
        document.getElementById("showStorage").innerHTML += storageData[i] + ', '
        //Do something
    }
    

    setTimeout(function(){
        emptyRadioErrorElem.innerHTML = ""
        requiredFieldErrorElem.innerHTML = ""
        outputStorage.innerHTML = ""

    }, 2500)
}


// function lettersOnly(input){
//     var restrictLetters = /^[a-zA-Z]+$/;
//     input.value = input.value.match(restrictLetters)
// }

resetBtn.addEventListener('click', resetFun)
viewBtn.addEventListener('click', viewStorage)
greetButtonElem.addEventListener('click', greetThem);