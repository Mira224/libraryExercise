/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {
  sails.bcrypt = require('bcryptjs');
  var salt = await sails.bcrypt.genSalt(10);

  var hash = await sails.bcrypt.hash('123456', salt);

  if (await User.count() > 0) {
    return;
  };
  await User.createEach([
    { username: "admin", password: hash,role:"admin", },
    { username: "member", password: hash, role:"member",},


  ]);
  if (await Book.count() > 0) {
    return;
  }

  await Book.createEach([
    { serial:"AN001",title: "Harry Potter 1",author:"J.K. Rowling",year:1991,categroy:"art", status:"available",location:"L5",classification:"Advanture",period:70 },
    { serial:"AN002",title: "Twilight",author:"Stephenie Meyer",year:2008,categroy:"art", status:"available",location:"L5",classification:"Romance",period:140 },
    { serial:"AN003",title: "The outsider",author:"Stephen King",year:2018,categroy:"art", status:"unavailable",location:"L4",classification:"Horror",period:140 },
    { serial:"SP001",title: "The Selfish Gene",author:"	Richard Dawkins",year:1976,categroy:"science", status:"available",location:"L3",classification:"Scientific",period:140 },
  ]);

};
