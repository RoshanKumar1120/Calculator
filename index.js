let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

// Function to make the calculator speak
function speak(text) {
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; // Set language
    speech.rate = 1; // Set speed (1 is normal)
    speech.volume = 1; // Full volume
    window.speechSynthesis.speak(speech);
}

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            string = eval(string);
            input.value = string;
            speak(string); // Speak the result
        }
        else if (value == 'AC') {
            string = "";
            input.value = string;
        }
        else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (value == 'x²') {
            string = Math.pow(parseFloat(string), 2);
            input.value = string;
            speak(string);
        }
        else if (value == 'x³') {
            string = Math.pow(parseFloat(string), 3);
            input.value = string;
            speak(string);
        }
        else if (value == '√') {
            string = Math.sqrt(parseFloat(string));
            input.value = string;
            speak(string);
        }
        else if (value == 'log') {
            string = Math.log10(parseFloat(string));
            input.value = string;
            speak(string);
        }
        else {
            string += value;
            input.value = string;
            speak(value); // Speak the clicked number/operator
        }
    });
});
