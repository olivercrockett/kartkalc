function calcGear() {
  const teethMotor = document.getElementById("teethMotor").value;
  const teethAxle = document.getElementById("teethAxle").value;
  const diameter = document.getElementById("diameter").value;
  const rpm = document.getElementById("rpm").value;
  const display = document.getElementById("output");
  
  //calculate
  const speed = 2.23694*((rpm/60)*(teethMotor/teethAxle))*((diameter/100)*3.141592);
  display.textContent = speed;
  alert(speed+" MPH!");
}

function calcTorque() {
  const teethMotor = document.getElementById("teethMotor1").value;
  const teethAxle = document.getElementById("teethAxle1").value;
  const diameter = document.getElementById("diameter1").value;
  const torque = document.getElementById("torque1").value;
  const display = document.getElementById("output1");
  
  //calculate
  const result = (torque*(teethAxle/teethMotor))/(diameter/200);
  display.textContent = result;
  alert(result+" N/m!");
}

function calcCurrent() {
  const voltage = document.getElementById("voltage2").value;
  const power = document.getElementById("power2").value;
  const display = document.getElementById("output2");
  
  //calculate
  const current = power/voltage;
  display.textContent = current;
  alert(current+" Amps!");
} 

function calcPower() {
  const speed = document.getElementById("speed3").value;
  const mass = document.getElementById("mass3").value;
  const display = document.getElementById("output3");
  
  //calculate
  const power = 177*((speed*speed)/mass);
  display.textContent = power;
  alert(power+" Watts!");
}