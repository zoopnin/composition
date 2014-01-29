var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');
AWS.config.update({region:'Ireland'});

var dynamoDB = new AWS.DynamoDB({
	apiVersion : '2012-08-10'
});

var s3 = new AWS.S3({
	paramValidation: false,
    computeChecksums: false,
    params:{Bucket:'www.faisana.com'}
});

exports.dynamoDB = dynamoDB;
exports.s3 = s3;