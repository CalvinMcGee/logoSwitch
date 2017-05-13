var fs = require('fs');
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

module.exports.switch = function() {
    var path = './img/';

    files = fs.readdirSync(path);

    data = fs.readFileSync(path + files[Math.floor(Math.random() * files.length)]);

    params = {
        Bucket: 'static.wallsin.com',
        Key: 'email/logo.png',
        body: data
    };

    s3.putObject(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
};