let express = require("express")
let router = express.Router()
let MongoClient = require('mongodb').MongoClient
let url = "mongodb+srv://sabbirdb:sabbirdb123@cluster0.kqrao.mongodb.net?retryWrites=true&w=majority"
let config = { useUnifiedTopology: true }
MongoClient.connect(url, config, (err, MyMongoClient) => {
    if (err) {
        console.log('connection failed');
    } else {
        console.log('mongodb connection success');
        //InsertData(MyMongoClient);
        //DeleteData(MyMongoClient);
        //find(MyMongoClient);
        //find(MyMongoClient);


    }
});

// function InsertData(MyMongoClient) {
//     var myDatabase = MyMongoClient.db('school');
//     var myCollection = myDatabase.collection('students');
//     var myData = { name: 'sabbirrrr', id: '01' };

//     myCollection.insertOne(myData, (err) => {
//         if (err) {
//             console.log('fail');
//         } else {
//             console.log('success');;
//         }
//     });
// }

// function DeleteData(MyMongoClient) {
//     var myDatabase = MyMongoClient.db('school');
//     var myCollection = myDatabase.collection('students');
//     var deleteItem = { id: '02' };

//     myCollection.deleteMany(deleteItem, (err, resultObj) => {
//         if (err) {
//             console.log('fail');
//         } else {
//             console.log(resultObj.result);;
//         }
//     });
// }

// function find(MyMongoClient) {
//     var myDatabase = MyMongoClient.db('school');
//     var myCollection = myDatabase.collection('students');
//     myDatabase.dropCollection('teachers', (err, res) => { console.log(res) })
// }
// router.get('/mongoose', ((req, res) => {
//     res.send('mongoose page');

// }));


module.exports = router;