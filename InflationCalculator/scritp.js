const moneyValue = document.getElementById("moneyValue")
const moneyRange = document.getElementById("moneyRange")
const timeValue = document.getElementById("timeValue")
const timeRange = document.getElementById("timeRange")
const inflationValue = document.getElementById("inflationValue")
const inflationRange = document.getElementById("inflationRange")
const presentMoney = document.getElementById("presentMoney")
const moneyAfterInflation = document.getElementById("moneyAfterInflation")
const moneyLost = document.getElementById("moneyLost")


const updateValues = () => {
    moneyValue.innerText = `${moneyRange.value}rs`;
    timeValue.innerText = `${timeRange.value} Year`;
    inflationValue.innerText = `${inflationRange.value} %`;
    calculateInflation();
};

[moneyRange,timeRange,inflationRange].forEach(input =>{
    input.addEventListener("change" ,updateValues )
})

function calculateInflation(){
    const currentMoney = moneyRange.value
    const inflationRate = inflationRange.value/100
    const year = timeRange.value
    const futureMoney = Math.round(currentMoney/Math.pow(1+inflationRate , year))
    presentMoney.innerText = `${currentMoney}rs`
    moneyAfterInflation.innerText = `${futureMoney}rs`
    moneyLost.innerText = `${currentMoney - futureMoney}rs`
}