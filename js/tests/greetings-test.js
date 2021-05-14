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

    it('should display error messages saysing "plaese enter a name and select a language if no name entered and no language selected"' , function(){

        var bulisa = greet()
        var userName = ''

        bulisa.setName(userName);
        
        assert.equal('', bulisa.getName())        
    });

    it('should show that counter does not increament if a person is greeted for the second time' , function(){

        var bulisa = greet()
        var name1 = ['amanda']
        var name2 = ['AMANDA']
        var name3 = ['Amanda']

        bulisa.setName(name1);
        bulisa.setName(name2);
        bulisa.setName(name3);

        assert.equal(1, bulisa.greetCounter())

        
    });


})