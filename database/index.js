const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://mongo:root@cluster0.uezds.mongodb.net/apologies?retryWrites=true&w=majority', {
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