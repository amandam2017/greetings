describe("This instance is testing greet function....when greeting a person in a selected language from three different languages that are available. Should display errors when required fields are not filled or selected and shuld updated the conter as I am greeting", function(){
    it('should be able to set and get the entered name Yolie' , function(){

        var bulisa = greet()

        bulisa.setName('yolie')     
        assert.equal('YOLIE', bulisa.getName());
        
    });
    it('should greet Amanda in isiXhosa, the selected language and increament the counter' , function(){

        var bulisa = greet()
        var name = 'Amanda' 

        bulisa.setName('molo, ' + name)     
        assert.equal('MOLO, AMANDA', bulisa.getName());
        
    });

    it('should greet Xolie with a selected language which is Afrikaans and increament the counter' , function(){

        var bulisa = greet()
        var name = 'Xolie' 

        bulisa.setName('hallo, ' + name)     
        assert.equal('HALLO, XOLIE', bulisa.getName());
        
    });

    it('should display the counter of the greeted names' , function(){

        var bulisa = greet(greetedNames)
        bulisa.greetCounter()
    
        assert.equal(1, bulisa.greetCounter());

        bulisa.greetThem()
        bulisa.greetThem()
        bulisa.greetThem()

        assert.equal(1, bulisa.greetCounter())

        
    });

    it('should display the list of the greeted names on local storage' , function(){

        var bulisa = greet(greetedNames);
        var names = greetedNames; 

        bulisa.setName(names)     
        assert.equal('YOLIE', bulisa.getName());
        
    });


})