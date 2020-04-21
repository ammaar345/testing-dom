describe("warning & critical value",function(){
it("should return a class name of warning if warning level has been reached.",function(){
let settingsBill=BillWithSettings();
settingsBill.setCriticalLevel(10);
settingsBill.setCallCost(1.35);
settingsBill.setSmsCost(0.85);
settingsBill.setWarningLevel(5);
settingsBill.makeCall();
settingsBill.makeCall();
settingsBill.makeCall();
settingsBill.makeCall();
assert.equal("warning",settingsBill.totalClassName()) 


})
it("should return a class name of critical if critical level has been reached.",function(){
    let settingsBill=BillWithSettings();
    settingsBill.setCriticalLevel(10);
    settingsBill.setCallCost(2.50);
    settingsBill.setSmsCost(0.85);
    settingsBill.setWarningLevel(5);
    
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    settingsBill.makeCall();
    assert.equal("critical",settingsBill.totalClassName()) 
    
    
    })
    
    it("it should stop the Total Call cost from increasing once the critical level has been reached.",function(){
        let settingsBill=BillWithSettings();
        settingsBill.setCriticalLevel(10);
        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.85);
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal("critical",settingsBill.totalClassName()) ;
        assert.equal(10,settingsBill.getTotalCallCost()) ;
        
        
        })

})
