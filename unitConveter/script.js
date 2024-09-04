const units = {
    length: ["meter", "kilometer", "centimeter", "millimeter", "micrometer", "nanometer"],
    temp: ["C", "F", "K"],
    area: ["square_meters", "square_kilometers", "square_centimeters", "square_millimeters", "acres", "hectares", "square_yards", "square_feet"],
    speed: ["m/s", "km/h", "mph", "ft/s", "knots"],
    time: ["seconds", "minutes", "hours", "days", "weeks", "months", "years"],
    mass: ["grams", "kilograms", "milligrams", "micrograms", "pounds", "ounces", "stones"],
    data: ["bytes", "kilobytes", "megabytes", "gigabytes", "terabytes", "petabytes"]
};


const dataType = document.getElementById("dataType")
const fromUnit = document.getElementById("fromUnit")
const toUnit = document.getElementById("toUnit")
const convertBtn = document.getElementById("convert")
const inputValue = document.getElementById("inputValue")
const result = document.getElementById("result")

function loadBox() {
    const values = units[dataType.value];
    const fromUnitToUnit = [fromUnit, toUnit];
    fromUnitToUnit.forEach(box => {
        box.innerHTML = "";
        values.forEach(unit => {
            const option = document.createElement("option");
            option.value = unit;
            option.innerText = unit;
            box.appendChild(option);
        });
    });
};

dataType.addEventListener("change", loadBox);



function resultUpdate (data){
    result.innerText = `${data.value} ${data.from} = ${data.converted_value} ${data.to}`
}

async function fetchData(url) {
    try {
        const response = await fetch(url);
        const responseBody = await response.text(); // Capture the raw response in case of error

        if (!response.ok) {
            console.error(`HTTP Error: ${response.status}, Response: ${responseBody}`);
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = JSON.parse(responseBody);
        return data;
    } catch (error) {
        console.error('Request failed:', error);
        throw error;
    }
}


convertBtn.addEventListener("click", async () => {
    console.log("BTN Clicked");

    const type = dataType.value;
    const from = fromUnit.value;
    const to = toUnit.value;
    const value = inputValue.value;

    // Log input values to ensure they are populated
    console.log(`Type: ${type}, From: ${from}, To: ${to}, Value: ${value}`);

    // Validate inputs before making the request
    if (!type || !from || !to || !value) {
        console.error("Missing input values");
        return;
    }

    const url = 'https://convertify-a8r6.onrender.com/convert';
    const fullUrl = `${url}?type=${type}&value=${value}&from=${from}&to=${to}`;
    console.log(fullUrl);
    
    try {
        const data = await fetchData(fullUrl);
        console.log(data);
        resultUpdate(data.result);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
window.onload = loadBox