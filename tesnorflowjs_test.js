const tf = require('@tensorflow/tfjs');

const model = tf.loadLayersModel('file://EN3_PersonNoPerson_classifier_TfJS/model.json');

const images = tf.fromPixels();