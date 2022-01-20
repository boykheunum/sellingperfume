const categories = require('../model/CategoriesModel');
const CONTANTS = require('../database/contains');

exports.getCategories = (req, res) => {
    categories.GetAllCategory((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else{
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}
exports.GetCategoriesById = (req, res) => {
    let id = req.params.id
    bills.SearchCategoriesById(id, (err, data) => {
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
    bills.DeleteCategories(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.send({ message: `Xóa thành công` });
        }
    });
}