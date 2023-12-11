const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorArea = document.getElementById("square");

function updateBackgroundColor() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value ;

    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
        alert("Значения должны быть в диапазоне от 0 до 255.");
        return;
    }

    const backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    colorArea.style.backgroundColor = backgroundColor;
}

redInput.addEventListener("input", updateBackgroundColor);
greenInput.addEventListener("input", updateBackgroundColor);
blueInput.addEventListener("input", updateBackgroundColor);