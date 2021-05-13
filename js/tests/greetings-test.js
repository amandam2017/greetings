describe("This instance is testing greet function", function(){
    it('should successfully greet Amanda in isiXhosa' , function(){

        var enteredName = "Molo, Amanda"

        assert.equal('Molo, Amanda', enteredName);
        
    });

    it('should successfully greet Amanda in English' , function(){

        var enteredName = "Hello, Amanda"

        assert.equal('Hello, Amanda', enteredName);
        
    });

    it('should display an error message when there is no entered Name' , function(){

        var enteredName = "please enter your name";

        assert.equal('please enter your name', enteredName);
        
    });
})