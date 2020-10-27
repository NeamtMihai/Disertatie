const express = require('express')
const http = require('http')
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017';

const app = express();

const port = 3001


app.get('/*', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

        if (err) throw err;

        const db = client.db("articles");

        db.collection('articles').find({}).toArray().then((docs) => {

            // console.log(docs);
            res.json(docs)

        }).catch((err) => {

            console.log(err);
        }).finally(() => {

            client.close();
        });
    });



    // res.json("salut varule")
}
)

const server = http.createServer(app)

server.listen(port, () => {
    console.log("Database Server Running on port "+port+" ...")
})

//to run this server tipe  node server.js