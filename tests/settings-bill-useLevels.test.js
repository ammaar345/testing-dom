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
it("should allow the total to increase after reaching the critical level and then updating the critical level.",function(){
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
        settingsBill.setWarningLevel(8)
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
        
        settingsBill.setCriticalLevel(20);
        
        assert.equal("warning",settingsBill.totalClassName()) ;
        settingsBill.makeCall();
        settingsBill.makeCall();    
        assert.equal(15,settingsBill.getTotalCallCost()) ;
        
    })

})
