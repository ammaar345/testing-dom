describe("Tests Calculate-Bill function", function() {


    it("Should return 21.50 for 7 calls and 2 sms's. ",function(){
       var string="call,call,call,call,call, sms, call, sms,call,sms";
       
       assert.equal(totalPhoneBill(string),21.50);

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
