function totalPhoneBill(billString){
var billItems = billString.split(",");
var billTotal = 0;
//loop over all the bill items
for (var i=0;i<billItems.length;i++){
    var billItem = billItems[i].trim();
    if (billItem === "call"){
        billTotal += 2.75;
    }
    else if (billItem === "sms"){
        billTotal += 0.75;
    }
}
var roundedBillTotal = billTotal.toFixed(2);
return roundedBillTotal;
}
function styleTotal(roundedBillTotal){ 
    const currTotal=Number(roundedBillTotal);
  colorChange.classList.remove("danger");
  colorChange.classList.remove("warning");
  if(currTotal>=30){
      //make red
      colorChange.classList.add("danger")
  } 
  else if(currTotal>20 && currTotal<30)
  {//make orange
colorChange.classList.add("warning");
  }

}