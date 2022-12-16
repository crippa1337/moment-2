const input = document.getElementById('dom-area__input');
const content = document.getElementById('dom-area__output');
const slider = document.getElementById('dom-area__slider');
const sliderText = document.getElementById('dom-area__slider-text');

let html = input.value;
let css = '<style>@keyframes rotate { from {transform: rotate(0deg);} to {transform: rotate(360deg);}} #dom-area__output {animation: rotate 5s linear alternate-reverse infinite; display: flex; justify-content: center; align-items: center; background-color: #000; color: #fff; width: 30%; height: 10vh; overflow: hidden;}</style>'

input.addEventListener('input', updateDOM);
slider.addEventListener('input', updateSlider);


function updateVal(type) {
    text = sliderText.innerText;
    text = text.replace(/1 HTML|2 CSS|3 SCRIPT|0 NONE/g, '')
    text += ' ' + slider.value + type;
    sliderText.innerText = text;
};

function updateSlider() {
    switch (parseInt(slider.value)) {
        case 0: {
            content.innerHTML = '';
            input.setAttribute("disabled", true);
            updateVal(" NONE");
            break;
        };
        case 1: {
            content.innerHTML = html;
            content.innerText = html + css;
            input.setAttribute("disabled", true);
            updateVal(" HTML");
            break;
        };
        case 2: {
            content.innerHTML = html + css;
            input.setAttribute("disabled", true);
            updateVal(" CSS");
            break;
        };
        case 3: {
            content.innerHTML = html + css;
            input.removeAttribute("disabled");
            updateVal(" SCRIPT");
            break;
        };
    };
};

function updateDOM() {
    html = input.value;
    updateSlider();
};