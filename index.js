// Declare and initialize the variables for exercise 1 here:
/*
Variable	Value
engineIndicatorLight	"red blinking"
spaceSuitsOn	true
shuttleCabinReady	true
crewStatus	spaceSuitsOn && shuttleCabinReady
computerStatusCode	200
shuttleSpeed	15000
*/

let engineIndicatorLight = "redblinking";
let spaceSuitsOn= true;
let shuttleCabinReady= true;
let crewStatus= spaceSuitsOn && shuttleCabinReady; 
let computerStatusCode= 200
let shuttleSpeed= 1500



// BEFORE running the code, predict what will be printed to the console by the following statements:

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

if (crewStatus === true) {
  console.log("Crew Ready");
} else { 
  console.log("Crew Not Ready")
}
if (computerStatusCode === 200) {
  console.log("Please stand by." + "Computer is rebooting.");
} else if (computerStatusCode === 400) {
  console.log("Success! Computer online.");
} else {
  console.log("ALERT: Computer offline!")
}

let whatStarkLikes = "bone";
let whatBellaLikes = "ball";

// how to do conditionals

let whatsForDinner = "pizza";

console.log("don't stop me now!");



