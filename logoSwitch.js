const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.switch = function() {
    const imgPath = './img/';
    const svgPath = './svg/';

    const imgFiles = fs.readdirSync(imgPath);
    const svgFiles = fs.readdirSync(svgPath);

    const daySinceEpoch = Math.floor((new Date()).getTime() / (24 * 60 * 60 * 1000));

    const imgFile = fs.readFileSync(imgPath + imgFiles[daySinceEpoch % imgFiles.length]);
    const svgFile = fs.readFileSync(svgPath + svgFiles[daySinceEpoch % svgFiles.length]);

    putFile('email/logo.png', imgFile, 'image/png');
    putFile('html/logo.svg', svgFile, 'image/svg+xml');
};

const putFile = function(key, data, contentType) {

    const params = {
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
