(function () {
    "use strict";

    const colors = ['white', 'red', 'blue', 'green', 'yellow'];
    const hexColors = ['#2e4999', '#ff6447', '#d97ed3', '#93cc29', '#ad85e6'];

let btnColor = document.getElementById('change-color');
let btnHex = document.getElementById('change-color-hex');

btnColor.addEventListener('click', function () {
    let random = colors[randomNum()];
    document.body.style.backgroundColor = random;
    document.getElementById('color').innerText = random;
    });

btnHex.addEventListener('click', function () {
        let random = hexColors[randomNum()];
        document.body.style.backgroundColor = random;
        document.getElementById('color').innerText = random;
    });
function randomNum() {
    return Math.floor(Math.random() * 5);
}

})();