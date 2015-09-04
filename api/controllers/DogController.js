/**
 * DogController
 *
 * @description :: Server-side logic for managing dogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req, res){
    Dog.find().then(function(dogs){
      res.view
    });
  }

};

