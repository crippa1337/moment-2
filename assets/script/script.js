const input = document.getElementById('dom-area__input');
const content = document.getElementById('dom-area__output');
const slider = document.getElementById('dom-area__slider');
const sliderText = document.getElementById('dom-area__slider-text');

let html = input.value;
let css = '<style>@keyframes rotate { from {transform: rotate(0deg);} to {transform: rotate(360deg);}} #dom-area__output {animation: rotate 5s linear alternate-reverse infinite; display: flex; justify-content: center; align-items: center; background-color: #000; color: #fff; width: 30%; height: 10vh; overflow: hidden;}</style>'
let jsEnabled = false;

input.addEventListener('input', updateDOM);
slider.addEventListener('input', updateSlider);

function updateDOM() {
    html = input.value;
    updateSlider();
};


function updateVal() {
    text = sliderText.innerText;
    text = text.slice(0, -1);
    text += slider.value;
    sliderText.innerText = text;
};

function updateSlider() {
    updateVal()
    input.setAttribute("disabled", true);

    switch (parseInt(slider.value)) {
        case 0: {
            jsEnabled = false;
            content.innerHTML = '';
            console.log(slider.value, jsEnabled)
            break;
        };
        case 1: {
            jsEnabled = false;
            content.innerHTML = html;
            content.innerText = html + css;
            console.log(slider.value, jsEnabled)
            break;
        };
        case 2: {
            jsEnabled = false;
            content.innerHTML = html + css;
            console.log(slider.value, jsEnabled)
            break;
        };
        case 3: {
            jsEnabled = true;
            content.innerHTML = html + css;
            input.removeAttribute("disabled");
            console.log(slider.value, jsEnabled)
            break;
        };
    };
};