const tf = require('@tensorflow/tfjs');
const fs = require('fs')
async function predictImage() {
    const model = await tf.loadLayersModel('https://raw.githubusercontent.com/Internet-and-IoT-Lab-group/COE457-Labs/master/EN3_PersonNoPerson_classifier_TfJS/model.json');

    // fs.readFile('image.jpg', function(err, data) {
    //     const result = model.predict(data);
    //     console.log(model);
    //  })
}

predictImage();
