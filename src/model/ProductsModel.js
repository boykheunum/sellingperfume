const db = require('../database/connectionDB')

const Products = function (product) {
    this.product_id = product.product_id;
    this.category_id = product.category_id;
    this.product_name = product.product_name;
    this.price = product.price;
    this.importprice = product.importprice;
    this.image = product.image;
    this.description = product.description;
    this.quantity = product.quantity;
    this.date = product.date;
    this.state = product.state;
}

Products.AddProduct = (product, result) => {
    db.query("INSERT INTO products(category_id, product_name, price, importprice, image, description, quantity, date) VALUES (?,?,?,?,?,?,?,?)", [product.category_id, product.product_name, product.price, product.importprice, product.image, product.description, product.quantity, product.date],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, {
                message: "Them moi thanh cong",
                id: res.insertId, ...product
            });
        })
}

Products.GetAllProducts = (result) => {
    db.query("SELECT * FROM products WHERE state = ?", [1],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Products.DeleteProducts = (id, result) => {
    db.query("UPDATE products SET state=? WHERE product_id= ?", [0, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Products.UpdateProduct = (id, product, result) => {
    db.query("UPDATE products SET category_id=?,product_name=?,price=?,importprice=?,image=?,description=?,quantity=?,date=? WHERE product_id= ?", [product.category_id, product.product_name, product.price, product.importprice, product.image, product.description, product.quantity, product.date, product.state, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, {
            message: "Sửa thành công",
            id: res.insertId, ...product
        });
    })
}

Products.SearchProductById = (id, result) => {
    db.query("SELECT * FROM products WHERE product_id=? AND state = ?", [id, 1], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Products.SearchProductByName = (name, result) => {
    db.query("SELECT * FROM products WHERE id=? AND state = ?", [name, 1],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Products.SearchProductByNameRandom = (name, result) => {
    db.query("SELECT * FROM products WHERE product_name LIKE ?", ['%' + name + '%'], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}
module.exports = Products;