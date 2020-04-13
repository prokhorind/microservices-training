const User = require('../models/user.model');
const error = require('../errors/mainerror');


exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.save = function(req, res) {
  let user = new User(
    {
      name: req.body.name,
      password: req.body.password,
      authType: req.body.authType,
      email: req.body.email
    }
  );
  user.save(err => error.ErrorCustom(err,res));
};

exports.get = function (req, res) {
    User.find({email:req.params.id}, function (err, user) {
        if (err) {
        return next(err);
      }
        console.log('user was found:');
        res.send(user);
    })
};
