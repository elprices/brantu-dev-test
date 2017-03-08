var mongoose = require('mongoose');

//creat a schema for data maniplutaion
var Product = mongoose.Schema({
								name: String,
								productUrl: String,
								imageUrl: String,
								description: String,
								price: Number,
								currency: String,
								TDProductId: Number,
								TDCategoryID: Number,
								TDCategoryName: String,
								merchantCategoryName: String,
								sku: String,
								shortDescription: String,
								promoText: String,
								previousPrice: Number,
								warranty: String,
								availability: String,
								inStock: String,
								shippingCost: Number,
								deliveryTime: String,
								weight: Number,
								size: String,
								brand: String,
								model: String,
								ean: String,
								upc: String,
								isbn: String,
								condition: String,
								mpn: String,
								techSpecs: String,
								manufacturer: String,
								programName: String,
								programLogoPath: String,
								programId: Number,
								fields: String
                              });
							  
module.exports = mongoose.model('Product', Product ,'products');





