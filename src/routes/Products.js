const ProductController = require('../controller/ProductsController')


module.exports = (app) => {
  app.get("/product", ProductController.GetProduct);
  app.post("/product/createproduct", ProductController.CreateProduct);
  app.post("/product/updateproduct/:id", ProductController.UpdateProduct);
  app.get("/product/searchproductbyid/:id", ProductController.GetProductById);
  app.delete("/product/delete/:id", ProductController.DeleteProduct);
  app.get('/admin/suasp/:id', ProductController.getId);
  //giao dien
  app.get('/admin/addproduct', ProductController.LayoutCreateProduct);
  //giao dien
  // app.get('/admin/suasp', (req, res) => {
  //   res.render('template/admin/suasp',{layout: 'mainadmin'});
  // });
};