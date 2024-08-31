const billAmt = document.getElementById("billAmt")
const People = document.getElementById("People")
const tipPercentage = document.getElementById("tipPercentage")
const submit = document.getElementById("submit")
const result = document.getElementById("result")



submit.addEventListener("click", function(){
    const BILLAmt = parseInt(billAmt.value)
    const PEOPLE = parseInt(People.value)
    const TIPPERCENTAGE = parseInt(tipPercentage.value)
    
    if (BILLAmt > 0 && PEOPLE > 0){ 
        const spitedBill = Math.ceil(BILLAmt/PEOPLE)
        const TipAmt = BILLAmt * (TIPPERCENTAGE/100)
        const totalBill = BILLAmt+TipAmt
        const totalSplitBill = Math.ceil(totalBill/PEOPLE)
        result.innerText = `
        Total Bill without tip = ${BILLAmt}
        Bill split without tip = ${spitedBill}
        Bill split with tip = ${totalSplitBill}
        Tip amount with ${TIPPERCENTAGE}% tip = ${TipAmt}
        Total Bill with tip = ${totalBill}
        `
    }
    else{
        alert("Bill Amount and People cant be 0")
    }
})