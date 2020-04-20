describe("Tests Text-Bill function", function() {


    it("Should return 21.50 for 4 calls and 1 sms.",function(){
       var string="call,call,sms,call,call";
       
       assert.equal(totPhoneBill(string),11.75);

    });

    it("Should return 22.00 for 8 calls.",function(){
        var string=" call,call,call,call,call,call,call,call";
         assert.equal(totPhoneBill(string),22.00);

     });

     it("Should return 5.75 for 4 sms's and 1 call.",function(){
        var string="sms,sms,sms, sms ,call";
         assert.equal(totPhoneBill(string),5.75);

     });

});
