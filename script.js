let keyCounter = 0;
let text;
const container = document.querySelector('.container');
const authorElem = document.querySelector('.author');
const divArray = [];

document.addEventListener("keydown", changeColor);

function changeColor(e) {
    if (e.key === 'Shift' || e.key === 'Backspace') {
        return;
    }

    if (text[keyCounter] === e.key) {
        divArray[keyCounter].classList.add('correct-key');
    }
    if (text[keyCounter] !== e.key) {
        divArray[keyCounter].classList.add('incorrect-key');
    }

    keyCounter++;

    if (keyCounter === divArray.length) {
        results();
    }
}

function results() {
    calculateAccuracy();
    //calculateWPM();
    displayResults();
}

function calculateAccuracy() {
    let numOfCorrect = 0;
    let accuracy;

    for (let i = 0; i < divArray.length; i++) {
        if(divArray[i].style.color === 'rgb(149, 197, 144)') {
            numOfCorrect += 1;
        }
    }

    accuracy = numOfCorrect * 100 / divArray.length;

    displayResults(accuracy);
}

function calculateWPM() {
    const seconds = 60;
    const WPM = words / seconds;
}

function displayResults(accuracy) {
    document.getElementById('complete').innerHTML = "Typing Test Complete!";
    document.getElementById('test-name').innerHTML = "You typed the <b>Accuracy Calculator Typing Test</b>";
    document.getElementById('accuracy').innerHTML = "Your accuracy was ";
    document.getElementById('accuracy-percentage').innerHTML = accuracy + "%";
}

async function fetchRandomQuote() {
    const data = await fetch('https://zenquotes.io/api/random');
    const result = await data.json();
    const quoteTxt = result.q;
    const author = result.a;

    for (let i = 0; i < quoteTxt.length; i++) {
        divArray[i] = document.createElement('div');
        divArray[i].textContent = quoteTxt[i];
        divArray[i].className = "divArray";
    }
    for (let i = 0; i <= divArray.length; i++) {
        container.appendChild(divArray[i]);
    }

    authorElem.textContent = author;
    console.log(author);
}

function playTypingTest() {
    fetchRandomQuote();
    displayQuote();
}

function displayQuote() {
    
}

window.addEventListener('load', playTypingTest);