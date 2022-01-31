const categoriesController = require("../controller/CategoriesController")

module.exports = (app) => {
    app.get('/getallcategories', categoriesController.getCategories);
    app.post('/categories/create', categoriesController.CreateCategories);
    app.put('/categories/update/:id', categoriesController.UpdateCategories);
    app.get('/categories/searchcategoriesbyid/:id', categoriesController.GetCategoriesById);
    app.delete("/categories/delete/:id", categoriesController.DeleteCategories)
}
