const express = require('express');
const bodyParser = require('body-parser');
const Apologies = require('../database/index.js');
const fs = require('fs');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('./dist', {
  index: "index.html"
}))

app.get('/api/apologies', (req, res) => {
  Apologies.find({})
  .then((data) => {
    if (data.length > 0) {
      res.status(200).send(data);
    }
  })
  .catch((err) => {
    res.status(404).send(err);
  })
})

app.post('/api/apologies', (req, res) => {
  Apologies.create({ apology: req.body.apology, date: req.body.data })
  .then(() => {
    res.sendStatus(200)
  })
  .catch((err) => res.send(err))
})

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`));