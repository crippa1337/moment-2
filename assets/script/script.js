const input = document.getElementById('dom-area__input');
const content = document.getElementById('dom-area__output');
const slider = document.getElementById('dom-area__slider');
const sliderText = document.getElementById('dom-area__slider-text');

let html = input.value;
// String of CSS to be added to the innerHTML
let css = '<style>@keyframes rotate { from {transform: rotate(0deg);} to {transform: rotate(360deg);}} #dom-area__output {animation: rotate 5s linear alternate-reverse infinite; display: flex; justify-content: center; align-items: center; background-color: #000; color: #fff; width: 30%; height: 10vh; overflow: hidden;}</style>'

// When the text input updates, call updateDOM. When the slider updates, call updateSlider
input.addEventListener('input', updateDOM);
slider.addEventListener('input', updateSlider);


// @brief: Using regular expression (regex), replace the current value of the slider text with the new value text
function updateVal(type) {
    text = sliderText.innerText;   // Get the current value of the slider text
    text = text.replace(/1 HTML|2 CSS|3 SCRIPT|0 NONE/, '')     // Replace the current value with whitespace using regex
    text += ' ' + slider.value + type;   // Add the new value to the text variable
    sliderText.innerText = text;  // Update the slider text with the new text 
};


function updateDOM() {
    // Update the html variable with the value of the text input
    html = input.value;
    // Actually update the on-screen elements with the new value
    updateSlider();
};


// @brief: Update the DOM playground based on the value of the slider
function updateSlider() {
    switch (parseInt(slider.value)) {
        case 0: {
            // Everything is hidden
            content.innerHTML = '';
            input.setAttribute("disabled", true);
            updateVal(" NONE");
            break;
        };
        case 1: {
            // Only the HTML is shown
            content.innerHTML = html;
            content.innerText = html + css;
            input.setAttribute("disabled", true);
            updateVal(" HTML");
            break;
        };
        case 2: {
            // Enable CSS styling
            content.innerHTML = html + css;
            input.setAttribute("disabled", true);
            updateVal(" CSS");
            break;
        };
        case 3: {
            // Enable JavaScript
            content.innerHTML = html + css;
            input.removeAttribute("disabled");
            updateVal(" SCRIPT");
            break;
        };
    };
};