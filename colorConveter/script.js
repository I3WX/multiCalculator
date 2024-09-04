const colorFrom = document.getElementById("colorFrom");
const colorTo = document.getElementById("colorTo");
const colorCode = document.getElementById("colorCode");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

const url = 'https://x-colors.yurace.pro/api/';

convertBtn.addEventListener('click', dataUpdate);

async function dataUpdate() {
    const from = colorFrom.value;
    const to = colorTo.value;
    const colorInput = colorCode.value.trim();

    // Clear previous result
    result.innerHTML = '';

    if (!validateInput(colorInput, from)) {
        displayError(`Invalid ${from.toUpperCase()} color code`);
        return;
    }

    try {
        const Url = `${url}${from}2${to}?value=${colorInput}`;
        const data = await fetchData(Url);

        if (!data[from] || !data[to]) {
            displayError('Conversion failed. Please check the input and try again.');
            return;
        }

        displayResult(`${data[from]} ${from.toUpperCase()} is ${data[to]} ${to.toUpperCase()}`);
    } catch (error) {
        displayError('Error fetching data. Please try again later.');
    }
}

async function fetchData(Url) {
    try {
        const response = await fetch(Url);
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Request failed:', error);
        throw error;
    }
}

function displayResult(message) {
    const p = document.createElement('p');
    p.innerText = message;
    result.appendChild(p);
}

function displayError(message) {
    const error = document.createElement('p');
    error.style.color = 'red';
    error.innerText = message;
    result.appendChild(error);
}

// Validate the input based on the selected format
function validateInput(color, format) {
    switch (format) {
        case 'rgb':
            return /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(color);
        case 'hsl':
            return /^hsl\(\d{1,3},\s*(\d{1,3})%,\s*(\d{1,3})%\)$/.test(color);
        case 'hex':
            return /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(color);
        default:
            return false;
    }
}
