const ProductController = require('../controller/ProductsController')


module.exports = (app) => {
  app.get("/product",ProductController.GetProduct);
  app.get("/product/searchproductbyid/:id", ProductController.GetProductById);
  app.delete("/product/delete/:id", ProductController.DeleteProduct)
};