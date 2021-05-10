function greet(){

    var theName = [];


    function setName(enterYourName){
        if(!theName.includes(enterYourName)){
            // console.log(theName);
            theName.push(enterYourName)
        }
        return;
    }

    function getName(){
        return theName;
    }

    function greetCounter(){
        // if(theName != '' || undefined){
            return theName.length;   
        // }
        // console.log(theName)
    }

//local storage
// function storeNames(){
//     localStorage.setItem('inputNames', theName)
// }
     
    // greet a person
    function greetEnteredName(name,language){
        var greetMe = [];

            if(language  === 'isiXhosa' && name != ''){
                greetMe += "Molo, " + name;
            }
    
            if(language === 'English' && name != ''){
                greetMe += "Hello, " + name;
            }
    
            else if(language === 'Afrikaans' && name != ''){
                greetMe += "Hallo, " + name;
            }

            return greetMe
            

    }

    function withRadionCheckedValidation(name, language){
        console.log(name)
            
            var requiredXhosaError = "Faka igama lakho"
            var requiredEnglishError = "Please eneter in your name"
            var requiredAfrikaansError = "Tik asseblief jou naam in"

            if (language === 'isiXhosa' && name === '') {
                return requiredXhosaError
            }

            else if (language === 'English' && name === '') {
                return requiredEnglishError
            }

            else if (language === 'Afrikaans' && name === '') {
                return requiredAfrikaansError
            }
            else{
                return ''
            }

    }

    function languagesUnchecked(name,language){
        if(language === undefined && name != ''){
            return 'plesae select a language'
        }
    }
    

    return{
        setName,
        getName,
        greetCounter,
        greetEnteredName,
        withRadionCheckedValidation,
        languagesUnchecked
        // storeNames
    }
}