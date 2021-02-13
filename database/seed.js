const mongoose = require('mongoose');
const Apologies = require('./index.js');

const beginnings = ["I'm sorry that I ", "I wish I hadn't ", "I'm finally forgiving myself because I "];
const actions = ["ate your cake.", "yelled at my mom.", "stole a bike.", "cheated on a test.", " ran over a squirrel.", "been lying", " stole your money"];

const returnApology = function() {
  let apology = {
    apology: beginnings[Math.floor(Math.random() * 3)] + actions[Math.floor(Math.random() * 7)],
    date: "2021-02-13"
  };

  return apology;
}

for (let i = 0; i < 20; i++) {
  Apologies.create(returnApology())
  .then(()=> {
    if (i === 19) {
      console.log('seeding complete');
      mongoose.connection.close();
    }
  })
  .catch((err) => {
    console.log(err);
  })
}
