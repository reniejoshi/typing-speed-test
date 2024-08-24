const text = "In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.\n\n\"Whenever you feel like criticizing any one,\" he told me, \"just remember that all the people in this world haven't had the advantages that you've had.\"\n\nHe didn't say any more but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought\u2014frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon\u2014for the intimate revelations of young men or at least the terms in which they express them are usually plagiaristic and marred by obvious suppressions.";
//text will later be defined by switch
let newColor;
let newBackgroundColor;
let keyCounter = 0;

const divArray = [];

for (let i = 0; i < text.length; i++) {
    divArray[i] = document.createElement('div');
    divArray[i].textContent = text[i];
    divArray[i].className = "divArray";
    for (let i = divArray.length - 1; i >= 0; i--) {
        document.body.insertBefore(divArray[i], document.body.firstChild);
    }
}


document.addEventListener("keydown", changeColor);

function changeColor(e) {
    if (e.key === 'Shift' || e.key === 'Backspace') {
        return;
    }

    if (text[keyCounter] === e.key) {
        newColor = '#95c590';
        newBackgroundColor = '#edf7e7';
    }
    if (text[keyCounter] !== e.key) {
        newColor = '#d55b60';
        newBackgroundColor = '#ffdcd9';
    }

    divArray[keyCounter].style.color = newColor;
    divArray[keyCounter].style.backgroundColor = newBackgroundColor;

    keyCounter += 1;
}