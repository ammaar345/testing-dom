function BillWithSettings(){
    var theCallCost=0;
    var theSmsCost=0;
    var theWarningLevel=0;
    var theCriticalLevel=0;
          var callCostTotal=0;
        var smsCostTotal=0;
      function setCallCost(callCost){
    theCallCost=callCost;
    }
    function getCallCost(){
        return theCallCost;
    } 
    function setSmsCost(smsCost){
        theSmsCost=smsCost;
        }
        function getSmsCost(){
            return theSmsCost;
        } 
        function setWarningLevel(warnLevel){
    theWarningLevel=warnLevel;
        }
        function getWarningLevel(){
            return theWarningLevel;
        }
        function setCriticalLevel(critLevel){
    theCriticalLevel=critLevel;
        }
        function getCriticalLevel(){
    return theCriticalLevel;
        }
        function makeCall(){
     callCostTotal+=theCallCost;
     }
     function sendSms(){
         callCostTotal+=theSmsCost;
     }
     function getTotalCallCost(){
        return callCostTotal.toFixed(2);
        }
        function getTotalSmsCost(){
           return smsCostTotal.toFixed(2);
        }
     function getTotalCost(){
     return (callCostTotal+smsCostTotal);
     }
     
        return{
            setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
      getCriticalLevel,
      setCriticalLevel,
      getWarningLevel,
      setWarningLevel,
       makeCall,
       sendSms,
       getTotalCost,
        getTotalSmsCost,
        getTotalCallCost,
           
        }
    }