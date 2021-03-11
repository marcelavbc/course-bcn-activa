"use strict";
let car;
let allCars;
function validatePlate(input) {
    let regex = /^[0-9]{4}[A-Z]{3}$/;
    return regex.test(input) ? true : false;
}
function validateWheels(input) {
    if (input === null || input < 0.4 || input > 2) {
        return false;
    }
    else {
        return true;
    }
}
function containsCar(car, list) {
    let i;
    for (i = 0; i < list.length; i++) {
        if (list[i].plate === car) {
            return true;
        }
    }
    return false;
}
const theWheels = document.getElementById('wheelsDiv');
if (theWheels) {
    theWheels.style.display = 'none';
}
const theTable = document.getElementById('tablesDiv');
function createCar(plate, brand, color) {
    car = new Car(plate, color, brand);
}
let plateInput = document.getElementById("carPlate");
let colorInput = document.getElementById("carColor");
let brandInput = document.getElementById("carBrand");
let theFormDiv = document.getElementById('formDiv');
function getCarData(event) {
    event.preventDefault();
    let errors = 0;
    const plate = plateInput.value.toUpperCase();
    const color = colorInput.value.toUpperCase();
    const brand = brandInput.value.toUpperCase();
    if (!validatePlate(plate)) {
        errors++;
        plateInput.classList.add('is-invalid');
        alert('The plate must have the format: 1234ABC');
    }
    else {
        plateInput.classList.remove('is-invalid');
    }
    if (containsCar(plate, allCars)) {
        errors++;
        plateInput.classList.add('is-invalid');
        alert('The plate exists');
    }
    else {
        plateInput.classList.remove('is-invalid');
    }
    if (errors === 0) {
        createCar(plate, brand, color);
        if (theFormDiv) {
            theFormDiv.style.display = 'none';
        }
        const theWheelsDiv = document.getElementById('wheelsDiv');
        if (theWheelsDiv) {
            theWheelsDiv.style.display = 'inline';
        }
    }
}
function getWheelsData(event) {
    event.preventDefault();
    let errors = 0;
    let wData = document.getElementsByClassName('wheelData');
    let wheels = [];
    for (let i = 0; i < wData.length; i++) {
        let brandInput = document.getElementsByClassName("bWheel")[i].value;
        let diamInput = Number(document.getElementsByClassName("dWheel")[i].value);
        if (!validateWheels(diamInput)) {
            errors++;
            wData[i].children[1].classList.add('is-invalid');
        }
        else {
            wData[i].children[1].classList.remove('is-invalid');
            wheels.push([diamInput, brandInput]);
            console.log('wheels', wheels);
            console.log('diam', diamInput);
            console.log('brand', brandInput);
        }
    }
    if (errors === 0) {
        if (!containsCar(car, allCars)) {
            for (let i = 0; i < wheels.length; i++) {
                car.addWheel(new Wheel(Number(wheels[i][0]), String(wheels[i][1])));
            }
            allCars.push(car);
            addToList();
            if (theFormDiv) {
                theFormDiv.style.display = 'inline';
            }
            if (theWheels) {
                theWheels.style.display = 'none';
            }
        }
        else {
            alert('This car has been added before');
        }
    }
    else {
        alert('The wheel diameter must be a value between .4 and 2');
    }
}
let theCarList = document.getElementById("carList");
function addToList() {
    for (let i = 0; i < allCars.length; i++) {
        let newCarRow = document.createElement("tr");
        newCarRow.classList.add('toDelete');
        newCarRow.innerHTML = `
            <td>${allCars[i].plate}</td>
            <td>${allCars[i].brand}</td>
            <td>${allCars[i].color}</td>
            <td>Brand: ${allCars[i].wheels[0].brand} | Diam.: ${allCars[i].wheels[0].diameter}</td>
            <td>Brand: ${allCars[i].wheels[1].brand} | Diam.: ${allCars[i].wheels[1].diameter}</td>
            <td>Brand: ${allCars[i].wheels[2].brand} | Diam.: ${allCars[i].wheels[2].diameter}</td>
            <td>Brand: ${allCars[i].wheels[3].brand} | Diam.: ${allCars[i].wheels[3].diameter}</td>`;
        theCarList.appendChild(newCarRow);
    }
}
function removeTableData() {
    let node = document.getElementById('carList');
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
    if (theTable) {
        theTable.style.display = 'none';
    }
    const theFormDiv = document.getElementById('formDiv');
    if (theFormDiv) {
        theFormDiv.style.display = 'inline';
    }
    plateInput.value = '';
    colorInput.value = '';
    brandInput.value = '';
}
const wForm = document.getElementById('wheelsForm');
const cForm = document.getElementById('carForm');
wForm.addEventListener('submit', getWheelsData, false);
cForm.addEventListener('submit', getCarData, false);
