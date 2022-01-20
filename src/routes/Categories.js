const categoriesController = require("../controller/CategoriesController")

module.exports = (app) => {
    app.get('/getallcategories', categoriesController.getCategories);
    app.get('/categories/searchcategoriesbyid', categoriesController.GetCategoriesById);
    app.delete("/categories/delete/:id", categoriesController.DeleteCategories)
}
