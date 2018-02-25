exports.params = {
  TableName : "prices",
  KeySchema: [       
    { AttributeName: "timestamptz", KeyType: "HASH" },
  ],
  AttributeDefinitions: [       
    { AttributeName: "timestamptz", AttributeType: "S" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 10,
    WriteCapacityUnits: 10,
  }
};