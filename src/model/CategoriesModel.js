const db = require('../database/connectionDB');

const Categories = function (category) {
    this.category_id = category.category_id;
    this.category_name = category.category_name;
    this.state = category.state;
}

Categories.AddCategory = (category, result) => {
    db.query("INSERT INTO categories (category_id, category_name) VALUES (?,?)", [category.category_id, category.category_name],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
}

Categories.GetAllCategory = (result) => {
    db.query("SELECT * FROM categories WHERE state=?", [1],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
}

Categories.DeleteCategory = (id, result) => {
    db.query("UPDATE categories SET state = ? WHERE category_id= ?", [0, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res)
        });
}

Categories.UpdateCategory = (category, id, result) => {
    db.query("UPDATE categories SET category_name= ? WHERE category_id = ?", [category.category_name, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, {
                message: "Sửa thành công",
                id: res.insertId, ...category
            })
        });
}

Categories.SearchCategoriesById = (id, result) => {
    db.query("SELECT * FROM categories WHERE category_id= ? and state=?", [id, 1],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
}

module.exports = Categories;