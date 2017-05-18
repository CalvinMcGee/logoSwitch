var fs = require('fs');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

module.exports.switch = function() {
    var imgPath = './img/';
    imgFiles = fs.readdirSync(imgPath);
    imgFile = fs.readFileSync(imgPath + imgFiles[Math.floor(Math.random() * imgFiles.length)]);

    putFile('email/logo.png', imgFile, 'image/png');

};

var putFile = function(key, data, contentType) {

    params = {
        Bucket: 'static.wallsin.com',
        Key: key,
        Body: data,
        ContentType: contentType,
        CacheControl: 'max-age=86400'
    };

    s3.putObject(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
}