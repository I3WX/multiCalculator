const monthlyInvestmentValue = document.getElementById("monthlyInvestmentValue")
const monthlyInvestmentRange = document.getElementById("monthlyInvestmentRange")

const durationValue = document.getElementById("durationValue")
const durationRange = document.getElementById("durationRange")

const interestRateValue = document.getElementById("interestRateValue")
const interestRateRange = document.getElementById("interestRateRange")

const currentValue = document.getElementById("currentValue")
const futureValue = document.getElementById("futureValue")
const totalGain = document.getElementById("totalGain")


const updateValues = () => {
    monthlyInvestmentValue.innerText = `${monthlyInvestmentRange.value}rs`;
    durationValue.innerText = `${durationRange.value} Year`;
    interestRateValue.innerText = `${interestRateRange.value} %`;
    calculateInflation();
};

[monthlyInvestmentRange,durationRange,interestRateValue].forEach(input =>{
    input.addEventListener("change" ,updateValues )
})

function calculateInflation(){
    const currentValue = monthlyInvestmentRange.value
    const InterestRate = interestRateValue.value/100
    const year = durationValue.value
    const futureMoney = Math.round(currentValue*((Math.pow(1+InterestRate , year*12)-1)/(r/12*100)))
    currentValue.innerText = `${currentValue}rs`
    futureValue.innerText = `${futureMoney}rs`
    totalGain.innerText = `${currentValue - futureMoney}rs`
}