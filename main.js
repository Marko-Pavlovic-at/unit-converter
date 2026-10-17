// Get Dom Elements

const unitInput = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-btn");
const cards = document.querySelector(".cards");

//console.log(unitInput, convertBtn, cards);

// Event Listener

convertBtn.addEventListener("click", function () {
  render();
});

// functions

// Hard Coded Way

function render() {
  // - 1 meter = 3.281 feet
  //- 1 liter = 0.264 gallon
  //- 1 kilogram = 2.204 pound
  let unit = Number(unitInput.value);
  let metersToFeet = unit * 3.281;
  let feetToMeter = unit / 3.281;
  let literToGallon = unit * 0.264;
  let gallonToLiter = unit / 0.264;
  let kiloToPound = unit * 2.204;
  let poundToKilo = unit / 2.204;

  cards.innerHTML += `
    <div class = "card">
    <h2>Length (Meter/Feet)</h2>
    <p>${unit} meters = ${metersToFeet.toFixed(3)} feet | ${unit} Feet = ${feetToMeter.toFixed(3)} meters</p>
    </div>
  `;
}
