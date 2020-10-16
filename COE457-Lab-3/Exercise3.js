var net = require('net');
var client = new net.Socket();
// add your phone's IP and port
client.connect(4242, '10.0.1.42', function() {
console.log("connected to the logger");
});
// call backs to process events
// -- when receiving data
client.on('data', function(data) {
try{
//convert data to a JSON object
acc = JSON.parse(data.toString());
// console.log(acc);
accValues = acc.accelerometer.value;
// console.log('Acceleration at x: ' + accValues[0]);
// console.log('Acceleration at y: ' + accValues[1]);
// console.log('Acceleration at z: ' + accValues[2] + '\n');

accZ = accValues[2]; // z axis changes the most when moving up and down
if (accZ > 10.2) 
    console.log('moving downwards');
if (accZ < 9.4)
    console.log('moving upwards');
// else
//     console.log('no z movement')
} catch(err){
console.log(err.message);
}
});
// -- when closing connection
client.on('close', function() {
console.log('Connection closed');
});