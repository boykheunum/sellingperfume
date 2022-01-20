const coupons = require('../model/CouponsModel');
const CONTANTS = require('../database/contains');

exports.GetCoupons = (req, res) => {
    coupons.GetAllCoupons((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
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
                message: err.message || "Đã xảy ra một số lỗi",
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
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.send({ message: `Xóa thành công!` });
        }
    });
}

exports.UpdateCoupons = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    const Coupon = new Coupons({
        "value": req.body.value,
        "quantity": req.body.quantity,
        "manufacturing_date": req.body.manufacturing_date,
        "expiry_date": req.body.expiry_date,
        "state": req.body.state,
        "proviso": req.body.proviso,
    });
    coupons.UpadteCoupons(Coupon, req.params.id, (error, data) => {
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

exports.CreateCoupons = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    const Coupon = new Coupons({
        "value": req.body.value,
        "quantity": req.body.quantity,
        "manufacturing_date": req.body.manufacturing_date,
        "expiry_date": req.body.expiry_date,
        "state": req.body.state,
        "proviso": req.body.proviso,
    });
    coupons.AddCoupon(Coupon, (error, data) => {
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