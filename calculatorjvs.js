const numbernow = document.querySelector('.numbernow');

const signmath = document.querySelector('.signmath');

const firstnumber = document.querySelector('.firstnumber p');

const numbers = document.querySelectorAll('.number');

const operatorsBtn = document.querySelectorAll('.operator');

const equalsBtn = document.querySelector('.equals');

const ClearBtn = document.querySelector('.clear');

const CalculateHistory = document.querySelector('.history');

const RemoveHistoryBtn = document.querySelector('.clear-btn')

let result='';



function operate () {
if(numbernow.innerHTML === '' && this.textContent ==='-'){
numbernow.innerHTML ='-';
return;
}
else if(numbernow.innerHTML===''){
return;
}
if(signmath.innerHTML!==''){
    showResult();
}
firstnumber.innerHTML=numbernow.innerHTML;
signmath.innerHTML=this.textContent;
numbernow.innerHTML='';
}


function CalculateNumber(){
if(this.textContent ==='.'&& numbernow.innerHTML.includes('.'))return;
if(this.textContent === '.' && numbernow.innerHTML === ' ')
return numbernow.innerHTML = '.0'; 

numbernow.innerHTML += this.textContent;
}


function showResult() {
if(firstnumber.innerHTML==='' ||numbernow.innerHTML==='')return;

let a = Number(firstnumber.innerHTML);
let b = Number(numbernow.innerHTML);
let operator = signmath.innerHTML;

switch(operator){
    case '+':
        result = a + b;
        break;
    case '-':
        result = b - a;
        break;
    case '/':
        result = b / a;
        break;
    case '*':
        result = b * a;
        break;
    case '2^':
        result = b ** a;
        break;
}

RemoveHistoryBtn.classList.add('active');
numbernow.innerHTML=result;
firstnumber.innerHTML='';
signmath.innerHTML='';
AddToHistory();
}

function AddToHistory() {
    const newelementHistory = document.createElement('li');
    newelementHistory = `${firstnumber.innerHTML} ${signmath.innerHTML} ${numbernow.innerHTML} = ${result}`;
    newelementHistory.classList.add('history-things');
    CalculateHistory.appendChild(newelementHistory);
} 

function ClearScreen() {
    numbernow.innerHTML='';
    signmath.innerHTML ='';
    firstnumber.innerHTML='';
    }

function ClearHistory() {
    
    }


//Nasłuchiwanie

operatorsBtn.forEach((button)=>button.addEventListener('click',operate));

equalsBtn.addEventListener('click',showResult);

ClearBtn.addEventListener('click', ClearScreen);

numbers.forEach((button)=>button.addEventListener('click',CalculateNumber));

RemoveHistoryBtn.addEventListener('click', ClearHistory);