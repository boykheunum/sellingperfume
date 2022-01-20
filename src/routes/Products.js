const ProductController = require('../controller/ProductsController')


module.exports = (app) => {
  app.get("/product",ProductController.GetProduct);
  app.post("/product/createproduct", ProductController.CreateProduct);
  app.put("/product/updateproduct/:id", ProductController.UpdateProduct);
  app.get("/product/searchproductbyid/:id", ProductController.GetProductById);
  app.delete("/product/delete/:id", ProductController.DeleteProduct)
};