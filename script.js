const palette = document.getElementById('palette');
const generateBtn = document.getElementById('generate-btn');

function generateColor() {
    const randomColor = "#" + 
    Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return randomColor.toUpperCase();
}

function generatePalette(count = 5) {
    palette.innerHTML = ''; // Clear previous colors
    for (let i = 0; i < count; i++) {
        const color = generateColor();
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.textContent = color;

        colorBox.addEventListener('click', () => {
            navigator.clipboard.writeText(color);
            colorBox.textContent = 'Copiado!';
            setTimeout(() => colorBox.textContent = color, 1000);
        });
        
        palette.appendChild(colorBox);
    }
}
    
generateBtn.addEventListener('click', () => generatePalette());
generatePalette();
