const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");
const colorArea = document.getElementById("square");
let Color;

function updateBackgroundColor() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value ;

    if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
        alert("Значения должны быть в диапазоне от 0 до 255.");
        return;
    }

    Color= `rgb(${red}, ${green}, ${blue})`;
    colorArea.style.backgroundColor = Color;
}

redInput.addEventListener("input", updateBackgroundColor);
greenInput.addEventListener("input", updateBackgroundColor);
blueInput.addEventListener("input", updateBackgroundColor);

const button = document.getElementById("buttonInput");
const block = document.getElementById("block");
let count = 0;
const max = 15;

button.addEventListener("click", () => {
    const newBlockId = count % max;
    const existingBlock = document.getElementById(newBlockId.toString());

    if (count >= max && existingBlock) {
        existingBlock.style.backgroundColor = Color;
    } else {
        const newBlock = document.createElement("div");
        newBlock.className = "newBlock";
        newBlock.id = newBlockId.toString();
        newBlock.style.padding = '5%';
        newBlock.style.backgroundColor = Color;
        block.appendChild(newBlock);
    }

    count++;
});