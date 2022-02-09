const categories = require('../model/CategoriesModel');
const CONTANTS = require('../database/contains');

exports.getCategories = (req, res) => {
    
    categories.GetAllCategory((err, data) => {
        console.log("Hello");
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.render('template/admin/dsloaisp',
            {
                layout: 'mainadmin',
                data:data
            });
        }
    });
}
exports.GetCategoriesById = (req, res) => {
    let id = req.params.id
    categories.SearchCategoriesById(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.DeleteCategories = (req, res) => {
    let id = req.params.id
    categories.DeleteCategory(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.send({ message: `Xóa thành công` });
        }
    });
}

exports.UpdateCategories = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    const Categorie = new categories({
        "category_name": req.body.category_name,
    });
    categories.UpdateCategory(Categorie, req.params.id, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Không thể thêm mới"
            });
        }
        else {
            res.send(data);
        }
    });
}

exports.CreateCategories = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    const Categorie = new categories({
        "category_name": req.body.category_name,
    });
    categories.AddCategory(Categorie, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Không thể thêm mới"
            });
        }
        else {
            res.send(data);
        }
    });
}