const dotenv = require('dotenv').config();
module.exports.accessKeyId = process.env.accessKeyId;
module.exports.secretAccessKey = process.env.secretAccessKey;
module.exports.bucketName = process.env.bucketName;
module.exports.region = process.env.region;
