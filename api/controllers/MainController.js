/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home: function(req, res){
    // res.send('this is my homepage')
    res.view('main/home');
  },

  about: function(req, res){
    // res.send('about');
    res.view('main/about');
  }
};


