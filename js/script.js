function mobileMenu() {
    document.getElementById("mobile").classList.toggle("active");
    document.getElementById("1").classList.toggle("up-line-active");
    document.getElementById("2").classList.toggle("line-active");
    document.getElementById("3").classList.toggle("down-line-active");
};




const hkdchange = document.querySelector('.hkd input');
const btcchange = document.querySelector('.btc input');
getbutton = document.getElementById('icon');

window.addEventListener("load", () => {
    loadExchangeRate();
})

getbutton.addEventListener('click', e => {
    e.preventDefault();
    loadExchangeRate();
})

hkdchange.addEventListener('change', () => {
    getExchangeRate();
})

btcchange.addEventListener('change', () => {
    getExchangeRatebeta();
})

function loadExchangeRate() {

    fetch('https://api.coindesk.com/v1/bpi/currentprice/hkd.json')
        .then(response => response.json())
        .then(result => {
            let exchangeRate = result.bpi.HKD.rate_float;
            let totalExchangeRate = (1 * exchangeRate).toFixed(2);

            const exchangeRateTxt = document.querySelector(".exchange-rate");
            exchangeRateTxt.innerText = `1 USDT = ${totalExchangeRate} USD`;
        })
}

function getExchangeRate() {
    const HKDinput = document.querySelector(".hkd input");
    let amountHKD = HKDinput.value;

    fetch('https://api.coindesk.com/v1/bpi/currentprice/hkd.json')
        .then(response => response.json())
        .then(result => {
            let exchangeRate = result.bpi.HKD.rate_float;
            let totalExchangeHKD = (amountHKD / exchangeRate).toFixed(2);

            const finalExchangeHKD = document.querySelector(".btc input");
            finalExchangeHKD.value = `${totalExchangeHKD}`;
        })
}

function getExchangeRatebeta() {
    const BTCinput = document.querySelector(".btc input");
    let amountBTC = BTCinput.value;

    fetch('https://api.coindesk.com/v1/bpi/currentprice/hkd.json')
        .then(response => response.json())
        .then(result => {
            let exchangeRate = result.bpi.HKD.rate_float;
            let totalExchangeBTC = (amountBTC * exchangeRate).toFixed(2);

            const finalExchangeBTC = document.querySelector(".hkd input");
            finalExchangeBTC.value = `${totalExchangeBTC}`;
        })
}