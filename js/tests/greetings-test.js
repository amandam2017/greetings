describe("This instance is testing greet function....when greeting a person in a selected language from three different languages that are available. Should display errors when required fields are not filled or selected and shuld updated the conter as I am greeting", function(){
    it('should be able to set and get the entered name Yolie' , function(){

        const bulisa = greet()

        bulisa.setName('yolie')     
        assert.equal('YOLIE', bulisa.getName());
        
    });
    it('should greet Amanda in isiXhosa, the selected language and increament the counter' , function(){

        const bulisa = greet()
        const name = 'Amanda' 

        bulisa.setName('molo, ' + name)     
        assert.equal('MOLO, AMANDA', bulisa.getName());
        
    });

    it('should greet Xolie with a selected language which is Afrikaans and increament the counter' , function(){

        const bulisa = greet()
        const name = 'Xolie' 

        bulisa.setName('hallo, ' + name)     
        assert.equal('HALLO, XOLIE', bulisa.getName());
        
    });

    it('should greet Xolie with a selected language but the counter will not increament' , function(){

        const bulisa = greet()
        const name = 'XOLIE' 

        bulisa.setName('hallo, ' + name)     
        assert.equal('HALLO, XOLIE', bulisa.getName());
        
    });

    it('should increament the counter if three different users are greeted' , function(){

        const bulisa = greet()
        bulisa.setName('Mishy')
        bulisa.setName('lina')
        bulisa.setName('buhle')

        assert.equal(3, bulisa.greetCounter())
        
    });

    it('should increament the counter if three different names are greeted and should continue with the local storage counter on page reload. Before the page loads 3 people were greeted and 3 more are greeted after the page/browser reload and now there are 6 greeted people' , function(){

        const bulisa = greet()
        bulisa.setName('busie')
        bulisa.setName('Nandy')
        bulisa.setName('Nzwakie')

        assert.equal(3, bulisa.greetCounter())

        bulisa.setName('Sasa')
        bulisa.setName('Pinky')
        bulisa.setName('Lelo')

        assert.equal(6, bulisa.greetCounter())
        
    });

    it('should display error messages saysing "plaese enter a name and select a language if no name entered and no language selected"' , function(){

        const bulisa = greet()
        const userName = ''

        bulisa.setName(userName);
        
        assert.equal('', bulisa.getName())        
    });

    it('should display error messages saysing "faka igama lakho" when isiXhosa radio button has been selected and no name entered' , function(){

        const bulisa = greet()
        var requiredXhosaError = 'faka igama lakho'

        bulisa.withRadionCheckedValidation('')
        
        assert.equal(requiredXhosaError, bulisa.withRadionCheckedValidation()) 
               
    });

     it('should not take a variable type if its not a string and not letters(A-Za-z)' , function(){

        const bulisa = greet()
        bulisa.setName('2588698')

        assert.equal(!'2588698', bulisa.getName())
   
    });

    it("should be able to return an error message 'please enter your name and select a language' when name not entered and language not CHECKED", function () {
        const bulisa = greet();
        var noSelection = "*Please enter a name and select a language*"

        bulisa.withRadionCheckedValidation('');

        assert.equal(noSelection, bulisa.withRadionCheckedValidation())
    });

    it('should display error messages saying *please enter your name* if a user clicked greet button without entering a name and the user selected englsh on the radio button' , function(){

        const bulisa = greet()
        var noName = "*please enter your name*"

        bulisa.validateEmptyForm('');
        
        assert.equal(noName, bulisa.validateEmptyForm())        
    });

})

