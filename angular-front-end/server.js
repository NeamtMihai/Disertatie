const express = require('express')
const http = require('http')
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017';
const bodyParser = require("body-parser");
var router = require("express").Router();
var ObjectID = require('mongodb').ObjectID;
const app = express();
var cors = require('cors')

const port = 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())


router.get('/*', (req, res) => {
    // console.log("retriving articles...")
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

        if (err) throw err;

        const db = client.db("articles");

        db.collection('articles').find({}).toArray().then((docs) => {

            console.log("articles retrived");
            res.json(docs.sort( () => .5 - Math.random() ))

        }).catch((err) => {

            console.log(err);
        }).finally(() => {

            client.close();
        });
    });
    // res.json("salut varule")
}
)

router.put('/', (req, res) => {

    console.log("updating articles...")
    // console.log(req.body)

    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
        const db = client.db("articles");
        // var myquery = { url: req.body.url.toString() };
        var myquery = { "_id": ObjectID(req.body._id)}
        // console.log("myquery "+JSON.stringify(myquery))
        // var newvalues = { $set: {currentRate: req.body.currentRate.toString()}};
        var newvalues = { $set: {currentRate: req.body.currentRate.toString(), isGroundTruth : true}};
        console.log("newvalues "+JSON.stringify(newvalues))

        db.collection('articles').update(myquery, newvalues, function(err, res) {
            if (err) throw err;
            // console.log("1 document updated");
            console.log(res.result)
            client.close();
          });


        // db.collection('articles').findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        //     .then(data => {
        //         if (!data) {
        //             res.status(404).send({
        //                 message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        //             });
        //         } else res.send({ message: "Tutorial was updated successfully." });
        //     })
        //     .catch(err => {
        //         res.status(500).send({
        //             message: "Error updating Tutorial with id=" + id
        //         });
        //     });

    })          
})


app.use('', router);

const server = http.createServer(app)

server.listen(port, () => {
    console.log("Database Server Running on port " + port + " ...")
})

//to run this server tipe  node server.js