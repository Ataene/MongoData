const { MongoClient, ObjectId } = require("mongodb");

    //name of the connection url
const url = "mongodb://127.0.0.1:27017";

    //Name of Database and collection, can be created for you when you specify
let dbName = "projectOne";
collectionName = "myFirstProject"

    //Connection to Database
async function firstMongo(){

    try {
        let connection = await MongoClient.connect(url, { useNewUrlParser: true });
        let db = connection.db(dbName);
        console.log(`Mongo is connected corrected to database ${dbName} and collection ${collectionName}`)
        return db;
    } catch (error) {
        
        console.log(`This is an error ${error}`);
    }
    // finally {
    //     await client.close();
    // }
}
    // Connection to Collection in database
async function firstCollection(){

    let db = await firstMongo();
    let collection = db.collection(collectionName);
    return collection;
}

    //Creating a document in database
async function createDoc(){

    let collection = await firstCollection("people")
    
    let result =  await collection.insertMany([{
    name: "Emmanuel",
     age: 33,
     class: "InceptionU",
     year: 2022,
     paid: "Government of Alberta"
    },
    {
        name: "Nicole",
         age: 32,
         class: "InceptionU",
         year: 2022,
         paid: "Government of Alberta"
    },
    {
        name: "Eva",
         age: 4,
         class: "InceptionU",
         year: 2022,
         paid: "Government of Alberta"
    },
])
    console.log(result);
}

    //Find individual elements in a collection and also documents.
async function findCollection(){

    let callFind = await firstCollection();
    let result = await callFind.find().toArray({namme: "Emmanuel"}); // returns and array of "Cursor" and you iterate of the array to find the documents
    console.log(result);
}
findCollection();
createDoc();