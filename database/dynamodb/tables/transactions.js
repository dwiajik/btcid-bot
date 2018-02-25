exports.params = {
  TableName : "transactions",
  KeySchema: [       
    { AttributeName: "timestamptz", KeyType: "HASH" },
    { AttributeName: "type", KeyType: "RANGE" },
  ],
  AttributeDefinitions: [       
    { AttributeName: "timestamptz", AttributeType: "S" },
    { AttributeName: "type", AttributeType: "S" },
  ],
  ProvisionedThroughput: {       
    ReadCapacityUnits: 10, 
    WriteCapacityUnits: 10,
  }
};