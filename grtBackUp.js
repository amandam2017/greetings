function greet(){

    var theName = [];


    function setName(enterYourName){
        if(!theName.includes(enterYourName)){
            console.log(theName);
            theName.push(enterYourName)
        }
    }

    function getName(){
        return theName;
    }

    function greetCounter(){
        console.log(theName)
        return theName.length;   
    }

    function setName(enterYourName){
        theName.push(enterYourName)
    }


//local storage
function storeNames(){
    localStorage.setItem('inputNames', theName)
}
     
    // greet a person
    function greetEnteredName(userInput,language){
        var name = userInput;
        // var name = userInput[0].toUpperCase() + userInput.slice(1);
        var checkedRadioBtn = document.querySelector("input[name ='userLanguage']:checked");
        
        if(checkedRadioBtn){

            if(language === 'isiXhosa'){
                return "Molo, " + name;
            }
    
            if(language === 'English'){
                return "Hello, " + name;
            }
    
            else if(language === 'Afrikaans'){
                return "Hallo, " + name;
            }
            
        }

    }

    function withRadionCheckedValidation(name, language){
        var checkedRadioBtn = document.querySelector("input[name ='userLanguage']:checked");
        if(checkedRadioBtn){
            
            var requiredXhosaError = "Faka igama lakho"
            var requiredEnglishError = "Please eneter in your name"
            var requiredAfrikaansError = "Tik asseblief jou naam in"

            if (language === 'isiXhosa' && name === '' || name === undefined) {
                return requiredXhosaError
            }

            if (language === 'English' && name === '' || name === undefined) {
                return requiredEnglishError
            }

            if (language === 'Afrikaans' && name === '' || name === undefined) {
                return requiredAfrikaansError
            }
        }

        if(!checkedRadioBtn && name === ''){
            return 'plaese select a language'
        }

    }


    // function radioBtnNotChecked(name, language){
    //     var checkedRadioBtn = document.querySelector("input[name ='userLanguage']:checked");
    //     if(!checkedRadioBtn && name === '' || name === undefined){
    //         return "please fill in your name and select a language"
    //     }
    // }

    

    return{
        setName,
        getName,
        greetCounter,
        greetEnteredName,
        withRadionCheckedValidation,
        // radioBtnNotChecked
        storeNames
    }
}