let colorPickerContainer = document.getElementById('colorPickerContainer');
let selectedColor = document.getElementById('selectedColor');

function changeToPrimary() {
    colorPickerContainer.style.backgroundColor = "#0d6efd";
    selectedColor.textContent = 'Primary';
    selectedColor.style.color = '#0d6efd';
    colorPickerContainer.style.color="#000000";
}

function changeToSecondary() {
    colorPickerContainer.style.backgroundColor = "#6c757d";
    selectedColor.textContent = 'Secondary';
    selectedColor.style.color = '#6c757d';
    colorPickerContainer.style.color="#000000";
}

function changeToSuccess() {
    colorPickerContainer.style.backgroundColor = "#198754";
    selectedColor.textContent = 'Success';
    selectedColor.style.color = '#198754';
    colorPickerContainer.style.color="#000000";
}

function changeToDanger() {
    colorPickerContainer.style.backgroundColor = "#dc3545";
    selectedColor.textContent = 'Danger';
    selectedColor.style.color = '#dc3545';
    colorPickerContainer.style.color="#000000";
}

function changeToWarning() {
    colorPickerContainer.style.backgroundColor = "#ffc107";
    selectedColor.textContent = 'Warning';
    selectedColor.style.color = '#ffc107';
    colorPickerContainer.style.color="#000000";
}

function changeToInfo() {
    colorPickerContainer.style.backgroundColor = "#0dcaf0";
    selectedColor.textContent = 'Info';
    selectedColor.style.color = '#0dcaf0';
    colorPickerContainer.style.color="#000000";
}

function changeToLight() {
    colorPickerContainer.style.backgroundColor = "#f8f9fa";
    selectedColor.textContent = 'Light';
    selectedColor.style.color = '#f8f9fa';
    colorPickerContainer.style.color="#000000";
}

function changeTodark() {
    colorPickerContainer.style.backgroundColor = "#212529";
    selectedColor.textContent = 'Dark';
    selectedColor.style.color = '#212529';
    colorPickerContainer.style.color="#ffffff";
}