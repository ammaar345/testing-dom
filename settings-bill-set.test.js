describe("The bill with settings factory function.", function() {


    it("Should be able to set the call cost.",function(){
       let settingsBill=BillWithSettings();
       settingsBill.setCallCost(1.85);
       assert.equal(1.85,settingsBill.getCallCost());

       let settingsBill2=BillWithSettings();
       settingsBill2.setCallCost(2.75);
       assert.equal(2.75,settingsBill2.getCallCost());

    });
    it("Should be able to set the sms cost.",function(){
        let settingsBill=BillWithSettings();
        
        settingsBill.setSmsCost(0.85);
        assert.equal(0.85,settingsBill.getSmsCost());
 
        let settingsBill2=BillWithSettings();
        settingsBill2.setSmsCost(0.75);
        assert.equal(0.75,settingsBill2.getSmsCost());
 
     });
     it("Should be able to set the sms and call cost.",function(){
        let settingsBill=BillWithSettings();
        
        settingsBill.setCallCost(2.75);
        settingsBill.setSmsCost(0.85);
        assert.equal(0.85,settingsBill.getSmsCost());
        assert.equal(2.75,settingsBill.getCallCost());

     });
     it("Should be able to set the warning level ",function(){
        let settingsBill=BillWithSettings();
        settingsBill.setWarningLevel(20)
        assert.equal(20,settingsBill.getWarningLevel());
       

     });
     it("Should be able to set the critical and warning level ",function(){
        let settingsBill=BillWithSettings();
        settingsBill.setCriticalLevel(30)
        settingsBill.setWarningLevel(20)
        assert.equal(30,settingsBill.getCriticalLevel());
        assert.equal(20,settingsBill.getWarningLevel());
       

     });
})