
var errorCustom = function (err,res) {
      if (err) {
          return next(err);
      }
      res.send('Product Created successfully');
  }

  module.exports.ErrorCustom = errorCustom;
