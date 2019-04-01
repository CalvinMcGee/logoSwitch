var fs = require('fs');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

module.exports.switch = function() {
    var imgPath = './img/';
    var svgPath = './svg/';

    var imgFiles = fs.readdirSync(imgPath);
    var svgFiles = fs.readdirSync(svgPath);

    var imgFile = fs.readFileSync(imgPath + imgFiles[Math.floor(Math.random() * imgFiles.length)]);
    var svgFile = fs.readFileSync(svgPath + svgFiles[Math.floor(Math.random() * svgFiles.length)]);

    putFile('email/logo.png', imgFile, 'image/png');
    putFile('html/logo.svg', svgFile, 'image/svg+xml');
};

var putFile = function(key, data, contentType) {

    var params = {
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
