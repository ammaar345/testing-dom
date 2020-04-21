describe("use values",function(){
    it("should be able to use the set call cost.",function(){
        let settingsBill=BillWithSettings();
        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(6.75,settingsBill.getTotalCost());
        assert.equal(6.75,settingsBill.getTotalCallCost());
        assert.equal(0,settingsBill.getTotalSmsCost());
    })
    it("should be able to use the call cost set for 2 calls at R1.35 each. ",function(){
        let settingsBill=BillWithSettings();
        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(2.70,settingsBill.getTotalCost());
        assert.equal(2.70,settingsBill.getTotalCallCost());
        assert.equal(0,settingsBill.getTotalSmsCost());
    })
    it("should be able to send 2 sms's at R0.85 each and make 1 call at R1.35. ",function(){
        let settingsBill=BillWithSettings();
        settingsBill.setCallCost(1.35);
        settingsBill.setSmsCost(0.85);
settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.sendSms();
        assert.equal(3.05,settingsBill.getTotalCost());
        assert.equal(1.35,settingsBill.getTotalCallCost());
        assert.equal(1.70,settingsBill.getTotalSmsCost());
    })
})