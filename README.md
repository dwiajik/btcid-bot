#Bot for Bitcoin.co.id

##Start DynamoDB locally
```
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```

##Migrate DB

```
AWS_REGION=ap-southeast-1 DYNAMODB_HOST=http://localhost:8000 yarn db:init
```

##Reset DB
```
AWS_REGION=ap-southeast-1 DYNAMODB_HOST=http://localhost:8000 yarn db:reset
```
