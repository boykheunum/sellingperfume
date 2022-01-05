const categoriesController = require("../controller/CategoriesController")

module.exports = (app) => {
    app.get('/getallcategories', categoriesController.getCategories)
}