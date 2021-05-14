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
const viewBtn = document.querySelector('.view');


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
    if(userName != ''){
    userName = userName[0].toUpperCase() + userName.slice(1)
    }
    
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
 let key = bulisa.getName();
 localStorage.setItem('nameList', JSON.stringify(key))

    clearInput();

    // lettersOnly();
    // storeNames()

}

function clearInput() {  
    document.getElementById("myform").reset(); 
}


function resetFun(){
localStorage.clear()
location.reload()
}

function viewStorage(storageData){
    console.log(storageData)
    var storageData;
    document.getElementById("showStorage").innerHTML = "";

    for(storageData = 0; storageData < localStorage.length; storageData++){
        var storedNames = localStorage.key(storageData)
        document.getElementById("showStorage").innerHTML += storedNames;
    }
}


// function lettersOnly(input){
//     var pattern = /^[A-Za-z]+$/;
//     var noLetterError = 'letters only'
//     if(patternn.test(value) = input.value.replace(pattern, "")){
//         return true
//     }else{
//         alert(noLetterError)
//         return false;
//     }
// }

resetBtn.addEventListener('click',resetFun )
viewBtn.addEventListener('click', viewStorage )
greetButtonElem.addEventListener('click', greetThem);



