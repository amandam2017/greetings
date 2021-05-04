// reference elem
// set name 
// getName
function greet(){

    var theName = [];

    function setName(enterYourName){
         theName.push(enterYourName)
    }

    function getName(){
        return theName;
    }

    function greetCounter(){
        return theName.length;
    }
     
    // greet a person
    function greetEnteredName(name,language){
    var checkedRadioBtn = document.querySelector("input[name ='userLanguage']:checked");
        if(checkedRadioBtn){
            if(language === 'isiXhosa'){
                return "Molo, " + name;
            }
    
            if(language === 'English'){
                return "Hello, " + name;
            }
    
            if(language === 'Afrikaans'){
                return "Hallo, " + name;
            }
        }
    }

    return{
        setName,
        getName,
        greetCounter,
        greetEnteredName
    }
}