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
  const queryString = "DELETE from customer WHERE cid = '?'";
  console.log(name);
  con.query(queryString,[id],function(err,result,field){
    if(err){
    console.log("TCL: err", err)
    return
    }
  	res.redirect('/pager2');
  }); 

  }); 

module.exports = router;
