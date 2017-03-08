var async = require('async');
var fs = require('fs');
var csv = require("fast-csv");
var request = require('request');
const ProductModel = require('../models/product');

module.exports = {
	ImportFromCSVUrl: function(req, next){
	var url = req.query.url;
	
	fs.exists(url, function(exists){
	csv.fromStream(request(url), {headers: true }) //ignore csv file headers
	.on("data", function(data){
		async.eachSeries(data, function(){
		   Product = new ProductModel();
		   
		   Product.name= data['name'];
		   Product.productUrl= data['productUrl'];
		   Product.imageUrl= data['imageUrl'];
		   Product.description= data['description'];
		   Product.price= data['price'];
		   Product.currency= data['currency'];
		   Product.TDProductId= data['TDProductId'];
		   Product.TDCategoryID= data['TDCategoryID'];
		   Product.TDCategoryName= data['TDCategoryName'];
		   Product.merchantCategoryName= data['merchantCategoryName'];
		   Product.sku= data['sku'];
		   Product.shortDescription= data['shortDescription'];
		   Product.promoText= data['promoText'];
		   Product.previousPrice= data['previousPrice'];
		   Product.warranty= data['warranty'];
		   Product.availability= data['availability'];
		   Product.inStock= data['inStock'];
		   Product.shippingCost= data['shippingCost'];
		   Product.deliveryTime= data['deliveryTime'];
		   Product.weight= data['weight'];
		   Product.size= data['size'];
		   Product.brand= data['brand'];
		   Product.model= data['model'];
		   Product.ean= data['ean'];
		   Product.upc= data['upc'];
		   Product.isbn= data['isbn'];
		   Product.condition= data['condition'];
		   Product.mpn= data['mpn'];
		   Product.techSpecs= data['techSpecs'];
		   Product.manufacturer= data['manufacturer'];
		   Product.programName= data['programName'];
		   Product.programLogoPath= data['programLogoPath'];
		   Product.programId= data['programId'];
		   Product.fields= data['fields'];
		   
		   Product.save(function (err, data) {
				if (err) console.log(err);
				else {
				  console.log('Saved ', data['name'] );
				}
			});
		});
	})
	.on("end", function(){
		console.log('Data is imported Successfully.');
		next();
		}); 
	});
	}
};