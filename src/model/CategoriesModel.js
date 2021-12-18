const db = require('../database/connectionDB');

const Categories = category => {
    this.category_id = category.category_id;
    this.category_name = category.category_name;
    this.state = category.state;
}

Categories.AddCategory = (err, category, result) => {
    db.query("INSERT INTO categories (category_id, category_name) VALUES (?,?)", [category.category_id, category.category_name],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
}

Categories.GetAllCategory = (err, result) => {
    db.query("SELECT categories(category_id, category_name)  FROM categories",
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
}

Categories.DeleteCategory = (err, id, result) => {
    db.query("UPDATE categories SET state = ? WHERE category_id= ?", [0, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res)
        });
}

Categories.UpdateCategory = (err, category, id, result) => {
    db.query("UPDATE categories SET category_name= ? WHERE category_id= ?", [category.category_name, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res)
        });
}

Categories.SearchCategoriesById = (err, result, id) => {
    db.query("SELECT * FROM categories WHERE category_id= ?", [id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
}

module.exports = Categories;