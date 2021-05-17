describe("This instance is testing greet function....when greeting a person in a selected language from three different languages that are available. Should display errors when required fields are not filled or selected and shuld updated the conter as I am greeting", function(){
    it('should be able to set and get the entered name Yolie' , function(){

        const bulisa = greet()

        bulisa.setName('yolie')     
        assert.equal('YOLIE', bulisa.getName());
        
    });
    it('should greet Amanda in isiXhosa, the selected language and increment the counter' , function(){

        const bulisa = greet()
        var name = 'Amanda' 

        bulisa.setName('molo, ' + name)     
        assert.equal('MOLO, AMANDA', bulisa.getName());
        
    });

    it('should greet Xolie with a selected language which is Afrikaans and increment the counter' , function(){

        const bulisa = greet()
        var name = 'Xolie' 

        bulisa.setName('hallo, ' + name)     
        assert.equal(1, bulisa.greetCounter());
        
    });

    it('should show that counter does not increment if a person is greeted more than one time' , function(){

        const bulisa = greet()
        bulisa.setName('lol')
        bulisa.setName('LOL')
        bulisa.setName('Lol')

        assert.equal(1, bulisa.greetCounter())
   
    });


    it('should increment the counter if three different users are greeted' , function(){

        const bulisa = greet()
        bulisa.setName('Mishy')
        bulisa.setName('lina')
        bulisa.setName('buhle')

        assert.equal(3, bulisa.greetCounter())
        
    });

    it('should increment the counter if three different names are greeted and should continue with the local storage counter on page reload. Before the page loads 3 people were greeted and 3 more are greeted after the page/browser reload and now there are 6 greeted people' , function(){

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
        var userName = ''

        bulisa.setName(userName);
        
        assert.equal('', bulisa.getName())        
    });

     it('should not allow a user to enter a variable type if its not a string and not letters(A-Za-z)' , function(){

        const bulisa = greet()
        bulisa.setName('')

        assert.equal('', bulisa.getName())
   
    });   

    it('should display error messages saying *please enter your name* if a user selected a language and clicked greet button without entering a name' , function(){

        const bulisa = greet()
        var noName = "*please enter your name*"

        bulisa.validateEmptyForm('');
        
        assert.equal(noName, bulisa.validateEmptyForm())        
    });

})

