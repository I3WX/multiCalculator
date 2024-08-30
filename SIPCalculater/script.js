// Get references to HTML elements
const monthlyInvestmentValue = document.getElementById("monthlyInvestmentValue");
const monthlyInvestmentRange = document.getElementById("monthlyInvestmentRange");

const durationValue = document.getElementById("durationValue");
const durationRange = document.getElementById("durationRange");

const interestRateValue = document.getElementById("interestRateValue");
const interestRateRange = document.getElementById("interestRateRange");

const currentValueDisplay = document.getElementById("currentValue");
const futureValueDisplay = document.getElementById("futureValue");
const totalGainDisplay = document.getElementById("totalGain");

// Update displayed values
const updateValues = () => {
    const monthlyInvestment = parseFloat(monthlyInvestmentRange.value);
    const duration = parseFloat(durationRange.value);
    const interestRate = parseFloat(interestRateRange.value) / 100;

    monthlyInvestmentValue.innerText = `${monthlyInvestment}rs`;
    durationValue.innerText = `${duration} Year`;
    interestRateValue.innerText = `${interestRate * 100}%`;
    
    calculateSIP(monthlyInvestment, duration, interestRate);
};

// Calculate SIP
const calculateSIP = (monthlyInvestment, years, annualInterestRate) => {
    const months = years * 12;
    const monthlyInterestRate = annualInterestRate / 12;

    // SIP formula to calculate future value
    const futureValue = monthlyInvestment * (((Math.pow(1 + monthlyInterestRate, months) - 1) / monthlyInterestRate) * (1 + monthlyInterestRate));
    const totalInvestment = monthlyInvestment * months;
    const totalGain = futureValue - totalInvestment;

    // Update the display values
    currentValueDisplay.innerText = `${totalInvestment.toFixed(2)}rs`;
    futureValueDisplay.innerText = `${futureValue.toFixed(2)}rs`;
    totalGainDisplay.innerText = `${totalGain.toFixed(2)}rs`;
};

// Attach event listeners
[monthlyInvestmentRange, durationRange, interestRateRange].forEach(input => {
    input.addEventListener("input", updateValues);
});

// Initial calculation
updateValues();
