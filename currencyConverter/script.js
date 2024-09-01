const currencies = [
    "USD", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", 
    "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BRL", "BSD", "BTN", "BWP", 
    "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", "CNY", "COP", "CRC", "CUP", "CVE", "CZK", 
    "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", 
    "GEL", "GGP", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", 
    "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", 
    "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", 
    "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", 
    "MVR", "MWK", "MXN", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", 
    "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", 
    "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", "SRD", "SSP", 
    "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TVD", "TWD", 
    "TZS", "UAH", "UGX", "UYU", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XCD", "XDR", 
    "XOF", "XPF", "YER", "ZAR", "ZMW", "ZWL"
];

const currencyFrom = document.getElementById('currencyFrom');
const currencyTo = document.getElementById('currencyTo');
const amount = document.getElementById('amount');

(function populateCurrencies() {
    const arr = [currencyFrom , currencyTo]
    arr.forEach(x =>{
        currencies.forEach(currency => {
            const option = document.createElement('option');
            option.value = currency;
            option.text = currency;
            x.appendChild(option);
        });
    })
    
})()

const APIid = "c1e2a3ab26b9bb4f5d0120fd"
const Url = `https://v6.exchangerate-api.com/v6/${APIid}/pair`

const convertBtn = document.getElementById("convertBtn")
const exchangeRate = document.getElementById("exchangeRateData")
const convertedAmount = document.getElementById("convertedAmountData")
const exchangeRateDate = document.getElementById("exchangeRateDateData")


async function fetchData(url){
    try{
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json()
        return data
    }catch (error) {
        console.error('Request failed:', error);
        throw error;
    }
}

const changeData = async function(){
    const currencyOne = currencyFrom.value
    const currencySecond = currencyTo.value
    const url = `${Url}/${currencyOne}/${currencySecond}` 
    const data = await fetchData(url)
    const conversion_rate = data.conversion_rate
    exchangeRate.innerText = conversion_rate.toFixed(4)
    convertedAmount.innerText = `${(conversion_rate*amount.value).toFixed(2)}${data.target_code}`
    exchangeRateDate.innerText = data.time_last_update_utc
}           

convertBtn.addEventListener("click", changeData)
const dataChange = [amount,currencyFrom,currencyTo]
dataChange.forEach(change =>{
    change.addEventListener("change", changeData)
})

document.addEventListener("DOMContentLoaded" , changeData)
