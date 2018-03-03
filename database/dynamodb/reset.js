const AWS = require("aws-sdk");
const fs = require("fs");

const migrationDir = `${__dirname}/tables`;

AWS.config.update({
  region: process.env.AWS_REGION,
  endpoint: process.env.DYNAMODB_HOST,
});

const dynamodb = new AWS.DynamoDB();

const tables = fs.readdirSync(migrationDir)
  .map(file => file.substring(0, file.indexOf('.json')));

tables.forEach(table => {
  dynamodb.deleteTable({ TableName: table }, function(err, data) {
    if (err) console.error(err);
    else console.log(data);
  });
});
