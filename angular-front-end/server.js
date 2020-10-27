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

app.put('/*', (req, res) => {

    console.log(req)

    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;
    const db = client.db("articles");

    db.collection('articles').findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
                });
            } else res.send({ message: "Tutorial was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        });
})



const server = http.createServer(app)

server.listen(port, () => {
    console.log("Database Server Running on port " + port + " ...")
})

//to run this server tipe  node server.js