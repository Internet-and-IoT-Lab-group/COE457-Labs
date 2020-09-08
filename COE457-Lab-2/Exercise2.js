var randTemp = (Math.random() * 12) + 18; // generating random number between 18 and 30
console.log("The room temprature is " + Math.round(randTemp));
var acStatus = false;
if (randTemp <= 25) {
    acStatus = true; // false means the AC is off, true means on
    console.log("It is getting too cold... AC Switched off");
}
else {
    console.log("It is getting too hot... AC switched on");
}
var doorStatus = Math.round(Math.random()) // generates random number between 0 and 1, then rounds it, so ans is either 0 or 1
                                           // if 0/false, then door is closed, else door is open
var lightStatus = false;
if (doorStatus) {
    lightStatus = true; // lights are open if lightStatus is true
    console.log("Someone just walked in...")
    console.log("Welcome home...lights switched on")
}
else {
    console.log("Door is closed");
    console.log("Lights are still off");
}

// exercise 2 
var sensorValues = {
    "temperature": Math.round(randTemp),
    "lightsOn": lightStatus
}

console.log("The room sensors’ values are:")
console.log("\tTemperature: " + sensorValues.temperature + "C")
console.log("\tLights-On: " + sensorValues.lightsOn)