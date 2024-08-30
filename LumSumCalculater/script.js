const moneyValue = document.getElementById("moneyValue");
const moneyRange = document.getElementById("moneyRange");
const timeValue = document.getElementById("timeValue");
const timeRange = document.getElementById("timeRange");
const interestValue = document.getElementById("interestValue");
const interestRange = document.getElementById("interestRange");
const presentMoney = document.getElementById("presentMoney");
const moneyAfterInvestment = document.getElementById("moneyAfterInvestment");
const moneyGain = document.getElementById("moneyGain");

const updateValues = () => {
    moneyValue.innerText = `${moneyRange.value}rs`;
    timeValue.innerText = `${timeRange.value} Year${timeRange.value > 1 ? 's' : ''}`;
    interestValue.innerText = `${interestRange.value} %`;
    calculateInterest();
};

[moneyRange, timeRange, interestRange].forEach(input => {
    input.addEventListener("input", updateValues);
});

function calculateInterest() {
    const currentMoney = parseFloat(moneyRange.value);
    const interestRate = parseFloat(interestRange.value) / 100;
    const years = parseInt(timeRange.value, 10);

    const moneyAfter = currentMoney * Math.pow(1 + interestRate, years);
    const moneyGainValue = moneyAfter - currentMoney;

    presentMoney.innerText = `${currentMoney.toFixed(2)}rs`;
    moneyAfterInvestment.innerText = `${moneyAfter.toFixed(2)}rs`;
    moneyGain.innerText = `${moneyGainValue.toFixed(2)}rs`;
}
