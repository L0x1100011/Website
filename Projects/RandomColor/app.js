const showColorText = document.querySelector('#rgbColor');
const changeColorBtn = document.querySelector('#changeColorBtn');

changeColorBtn.addEventListener('click', () => {
    const newColor = randomColor();
    showColorText.innerText = newColor;
    document.body.style.backgroundColor = newColor;
});

const randomColor = () => {
    const red = Math.floor(Math.random() * 256) + 1;
    const green = Math.floor(Math.random() * 256) + 1;
    const blue = Math.floor(Math.random() * 256) + 1;
    return  `rgb(${red}, ${green}, ${blue})`;
}