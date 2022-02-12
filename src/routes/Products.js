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
  app.get('/home', ProductController.HomePage);
  app.get('/home/chitietsanpham/:id', ProductController.chitietsanpham);

  //tìm kiếm
  app.post('/searchkey', ProductController.timkiemsanphamtheoten);

  //giohang
  app.get('/giohang', ProductController.LayoutCart);
 
};