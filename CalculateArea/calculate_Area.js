let length;
let width;
let area;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function trackGroceries() {
    let grocery1 = parseFloat(document.getElementById('grocery1').value);
    let grocery2 = parseFloat(document.getElementById('grocery2').value);
    let grocery3 = parseFloat(document.getElementById('grocery3').value);

    let total = grocery1 + grocery2 + grocery3;
    document.getElementById('groceryResult').innerText = `Total price of groceries: ${total}`;
}