const categoriesController = require("../controller/CategoriesController")

module.exports = (app) => {
  app.get('/getallcategories', categoriesController.getCategories);
  app.post('/categories/create', categoriesController.CreateCategories);
  app.post('/categories/update/:id', categoriesController.UpdateCategories);
  app.get('/categories/searchcategoriesbyid/:id', categoriesController.GetCategoriesById);
  app.delete("/categories/delete/:id", categoriesController.DeleteCategories);
  app.get('/admin/sualoaisp/:id', categoriesController.getId);
  //giao dien
  //app.get('/admin/sualoaisp/:id', (req, res) => {
  //  res.render('template/admin/sualoaisp', { layout: 'mainadmin' });
  //});
    //app.get('/admin/sualoaisp/:id', categoriesController.getId); 

  //admin them
  app.get('/admin/createcategory', categoriesController.LayoutCreateCategory);
}
