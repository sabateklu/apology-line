const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://mongo:root@cluster0.kzf2e.mongodb.net/apologies?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true,
})
  .then((results) => results)
  .catch((err) => err);


const apologiesSchema = new mongoose.Schema({
  apology: String,
  date: String
});

const Apologies = mongoose.model('Apologies', apologiesSchema);

module.exports = Apologies;