/**
 * DogController
 *
 * @description :: Server-side logic for managing dogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  find: function(req, res){
    res.view('dogs/find');
  }

};

