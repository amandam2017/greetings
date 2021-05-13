function greet(localData){

    var theName = localData || []
    
    function setName(enterYourName){
        enterYourName = enterYourName.toUpperCase()

        if(enterYourName != '' || undefined){
            enterYourName = enterYourName[0].toUpperCase() + enterYourName.slice(1)
        }

        if(!theName.includes(enterYourName)){
            
            theName.push(enterYourName)
        }
        return;
    }

    function getName(){
        return theName;
    }

    function greetCounter(){
        return theName.length;   
    }

     
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
        // console.log(name)
            
            var requiredXhosaError = "**Faka igama lakho**"
            var requiredEnglishError = "**Please enter in your name**"
            var requiredAfrikaansError = "**Tik asseblief jou naam in**"

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

    function validateEmptyForm(name, language){
        // console.log(name)
            
            var noName = "*please enter your name*"
            var noLanguage = "*Please select a language*"
            var noSelection = "*please enter your name and select a language*"

            if (name === '' || name === undefined && language === '') {
                return noSelection
            }

            else if (language === '' && name !== '' || name !== undefined) {
                return noLanguage
            }

            else if (language !== '' && name === '' || name === undefined) {
                return noName
            }
            else{
                return ''
            }

    }


    return{
        setName,
        getName,
        greetCounter,
        greetEnteredName,
        withRadionCheckedValidation,
        validateEmptyForm
    }
}