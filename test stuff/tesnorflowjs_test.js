const { max, math, min, tensor } = require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');

function getTensor3dObject(numOfChannels, inputImage) {
 
    // decodes base64
    // const imageData = inputImage.replace('data:image/jpeg;base64','')
    //                     .replace('data:image/png;base64','');
    let imageArray = new Uint8Array(inputImage); // replace with imageData when decoding base64
    let tensor3d = tf.node.decodeJpeg( imageArray, 3 );
    tensor3d = tf.image.resizeBilinear(tensor3d, [224,224]);

    tensor3d = tensor3d.sub(tensor3d.min()).div(tensor3d.max().sub(tensor3d.min()));
    tensor3d.print();
    tensor3d = tensor3d.reshape([1, 224, 224, 3])

    //console.log(tensor3d.shape)
    return tensor3d;
}

async function predictImage() {
    const model = await tf.loadLayersModel('https://raw.githubusercontent.com/Internet-and-IoT-Lab-group/COE457-Labs/master/EN3_PersonNoPerson_classifier_TfJS/model.json');
    const imageData = 
    fs.readFile('WIN_20201015_13_51_39_Pro.jpg', function(err, data) {
        var img = getTensor3dObject(0, data);
        //console.log(img);
        prediction = model.predict(img);
        prediction.print()
     })
}

predictImage();
