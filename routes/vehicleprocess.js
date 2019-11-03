var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"dms"
});

/* GET home page. */
router.post('/', function(req, res, next) {
  var name=req.body.name;

  var colour=req.body.colour;

  var price=req.body.price;

  var year=req.body.year;

  console.log(name);
  con.query("insert into vehicle(vname,vcolour,vprice,vyear) values(?,?,?,?)",[name,colour,price,year],function(err,result,field){
    if(err){
      console.log('Error adding new vehicle '+err)
      throw err
    }
  	res.redirect('/pager2');
  }); 

  }); 

module.exports = router;
