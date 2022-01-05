const coupons = require('../model/CouponsModel');
const CONTANTS = require('../database/contains');

exports.GetCoupons = (req, res) => {
    coupons.GetAllCoupons((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.GetCouponsById = (req, res) => {
    let id = req.params.id
    coupons.SearchCouponsById(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.DeleteCoupons = (req, res) => {
    let id = req.params.id
    coupons.DeleteCoupons(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
            });
        } else {
            res.send({ message: `Customer was deleted successfully!` });
        }
    });
}