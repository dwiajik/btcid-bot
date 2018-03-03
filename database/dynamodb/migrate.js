const AWS = require("aws-sdk");
const fs = require("fs");

const migrationDir = `${__dirname}/tables`;

const tables = fs.readdirSync(migrationDir)
  .map(file => JSON.parse(fs.readFileSync(`${migrationDir}/${file}`, 'utf8')));

AWS.config.update({
  region: process.env.AWS_REGION,
  endpoint: process.env.DYNAMODB_HOST,
});

const dynamodb = new AWS.DynamoDB();

tables.forEach(params => {
  dynamodb.createTable(params, function(err, data) {
    if (err) {
      console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
  });
});
