describe("Tests Calculate-Bill function", function() {


    it("Should return 9.75 for 3 calls and 2 sms's ",function(){
       var string="call,call , sms, call , sms";
        assert.equal(totalPhoneBill(string),9.75);

    });

    it("Should return 5.75 for 1 call and 4 sms's",function(){
        var string="sms , call ,sms ,sms ,sms";
         assert.equal(totalPhoneBill(string),5.75);

     });

     it("Should return 0.00 for a string that does not include sms's or calls",function(){
        var string="data";
         assert.equal(totalPhoneBill(string),0.00);

     });

});
