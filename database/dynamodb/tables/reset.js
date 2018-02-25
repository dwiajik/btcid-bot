const AWS = require("aws-sdk");

AWS.config.update({
  region: process.env.AWS_REGION,
  endpoint: process.env.DYNAMODB_HOST,
});

const dynamodb = new AWS.DynamoDB();

var tables = [
  'prices',
  'transactions'
];

tables.forEach(table => {
  dynamodb.deleteTable({ TableName: table }, function(err, data) {
    if (err) console.error(err);
    else console.log(data);
  });
});
