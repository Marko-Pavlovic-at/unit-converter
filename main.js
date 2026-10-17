// Get Dom Elements

const unitInput = document.getElementById("unit-input");
const convertBtn = document.getElementById("convert-btn");
const cards = document.querySelector(".cards");

//console.log(unitInput, convertBtn, cards);

// Event Listener

convertBtn.addEventListener("click", function () {
  if (unitInput.value.trim()) {
    return;
  }
  render();
  unitInput.value = "";
});

// functions

// Hard Coded Way

function render() {
  // - 1 meter = 3.281 feet
  //- 1 liter = 0.264 gallon
  //- 1 kilogram = 2.204 pound
  const unit = Number(unitInput.value);
  const metersToFeet = unit * 3.281;
  const feetToMeter = unit / 3.281;
  const literToGallon = unit * 0.264;
  const gallonToLiter = unit / 0.264;
  const kiloToPound = unit * 2.204;
  const poundToKilo = unit / 2.204;

  cards.innerHTML = `

    

    <div class = "card">
    <h2>Length (Meter/Feet)</h2>
    <p>${unit} meters = ${metersToFeet.toFixed(3)} feet | ${unit} Feet = ${feetToMeter.toFixed(3)} meters</p>
    </div>


        <div class = "card">
    <h2>Volume (Liter/Gallon)</h2>
    <p>${unit} liter = ${literToGallon.toFixed(3)} gallon | ${unit} gallon = ${gallonToLiter.toFixed(3)} liter</p>
    </div>

          <div class = "card">
    <h2>Mass (Kilo/Pound)</h2>
    <p>${unit} kilo = ${kiloToPound.toFixed(3)} pounds | ${unit} pound = ${poundToKilo.toFixed(3)} kilo</p>
    </div>

  `;
}
