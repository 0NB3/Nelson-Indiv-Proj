var bodyParser = require("body-parser");
var idCount = 2;
var data = [{id: 0, item:'Entry 12'}, {id: 1, item:'Entry 2'}, {id: 2, item:'Entry 3'}];
var urlencodedParser = bodyParser.urlencoded({extended:true});

module.exports = function(app){

	app.get("/",function(req,res){
	  res.render("todo",{todos:data});
	});

	app.post("/",urlencodedParser,function(req,res){
		data.push({item: req.body.item, id: idCount+1});
		idCount++;
		res.redirect('/');
	});

	app.get("/delete/:id",function(req,res){
		data = data.filter(arr => {
			if (arr.id != req.params.id) return true;
		});
		res.redirect('/');
	});

};
