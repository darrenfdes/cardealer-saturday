var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"dms"
});


// var input = prompt('Enter the customers id','cid');
// var id = parseInt(input,10);
const queryString = "select * from customer where cid = ?";
/* GET home page. */
router.get('/', function(req, res, next) {
    const id = req.body.id;
  con.query(queryString,[parseInt(id)],function(err,result,field){
      if(err){
      console.log("TCL: err", err)
      }
      res.render('dummy',{result:result});  
  }); 
});

module.exports = router;