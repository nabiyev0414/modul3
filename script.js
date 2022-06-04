let rubone = document.querySelector(".RUB_one");
let usdone = document.querySelector(".USD_one");
let eurone = document.querySelector(".EUR_one");
let gbpone = document.querySelector(".GBP_one");

let rubtwo = document.querySelector(".RUB_two");
let usdtwo = document.querySelector(".USD_two");
let eurtwo = document.querySelector(".EUR_two");
let gbptwo = document.querySelector(".GBP_two");

let rateleft = document.querySelector('.rate-left');
let rateright = document.querySelector('.rate-right');

let inputleft = document.querySelector(".input-left"); 
let inputright = document.querySelector(".input-right");

let leftCurrency="RUB";
let rightCurrency="USD"
let entervalue;

function convert () {
    entervalue = Number(inputleft.value.replace(",", "."));
        fetch(`https://api.exchangerate.host/latest?base=${leftCurrency}&symbols=${rightCurrency}`)
        .then(res => res.json())
        .then(data => {
            rateleft.innerText = `1 ${leftCurrency} = ${data.rates[rightCurrency]} ${rightCurrency}`;
            inputright.value = parseFloat(entervalue* data.rates[rightCurrency]).toFixed(4);
        })
        
        fetch(`https://api.exchangerate.host/latest?base=${rightCurrency}&symbols=${leftCurrency}`)
        .then(res => res.json())
        .then(data => {
            rateright.innerText = `1 ${rightCurrency} = ${data.rates[leftCurrency]} ${leftCurrency}`;
        })
    }

inputleft.addEventListener('keyup', convert);

rubone.addEventListener('click', () => {
    leftCurrency = rubone.innerText;
    convert();
});

usdone.addEventListener('click', () => {
    leftCurrency = usdone.innerText;
    convert();
});

eurone.addEventListener('click', () => {
    leftCurrency = eurone.innerText;
    convert();
});

gbpone.addEventListener('click', () => {
    leftCurrency = gbpone.innerText;
    convert();
});

rubtwo.addEventListener('click', () => {
    rightCurrency = rubtwo.innerText;
    convert();
});

usdtwo.addEventListener('click', () => {
    rightCurrency = usdtwo.innerText;
    convert();
});

eurtwo.addEventListener('click', () => {
    rightCurrency = eurtwo.innerText;
    convert();
});

gbptwo.addEventListener('click', () => {
    rightCurrency = gbptwo.innerText;
    convert();
});