const input = document.getElementById('dom-area__input');
const content = document.getElementById('dom-area__output');
const slider = document.getElementById('dom-area__slider');
const sliderText = document.getElementById('dom-area__slider-text');

let html = '';
let fakeHtml = '<p>HTML</p>';
let css = '<style>#dom-area__output {background-color: #000; color: #fff; width: 50%; height: 10vh;}</style>'
let jsEnabled = false;

function updateVal() {
    text = sliderText.innerText;
    text = text.slice(0, -1);
    text += slider.value;
    sliderText.innerText = text;
};

function updateSlider() {
    updateVal()
    jsEnabled = false;
    switch (parseInt(slider.value)) {
        case 1: {
            content.innerHTML = html;
            content.innerText = fakeHtml;
            break;
        };
        case 2: {
            content.innerHTML = html + css;
            content.innerText = fakeHtml + css;
            break;
        };
        case 3: {
            jsEnabled = true;
            content.innerHTML = html + css;
            break;
        };
    };
};


input.addEventListener('input', updateContent);
function updateContent() {
    if (jsEnabled) {
        content.innerHTML = input.value;
    };
}; 
