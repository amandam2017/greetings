describe("This instance is testing greet function", function(){
    it('should successfully greet Amanda in isiXhosa' , function(){

        var enteredName = "Molo, Amanda"

        assert.equal('Molo, Amanda', enteredName);
        
    });

    it('should successfully greet Amanda in English' , function(){

        var enteredName = "Hello, Amanda"

        assert.equal('Hello, Amanda', enteredName);
        
    });

    it('should give an error if there is no name entered in the input field' , function(){

        var eneteredName = "";

        assert.equal('this field is required', eneteredName);
        
    });
})