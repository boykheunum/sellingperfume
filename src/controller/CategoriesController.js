const categories = require('../model/CategoriesModel');
const CONTANTS = require('../database/contains');

exports.getCategories = (req, res) => {
    categories.GetAllCategory((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
            });
        } else{
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}
