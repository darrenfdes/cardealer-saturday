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
  var id=req.body.id;

  var address=req.body.address;

  var phone=req.body.phone;

  var name=req.body.name;

  var sid= req.body.sid;
  console.log(name);
  con.query("insert into customer(caddress,cphone,cname,sid) values(?,?,?,?)",[address,phone,name,sid],function(err,result,field){
    
  	res.redirect('/pager2');
  }); 

  }); 

module.exports = router;
