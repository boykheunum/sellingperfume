const coupons = require('../model/CouponsModel');
const CONTANTS = require('../database/contains');

exports.GetCoupons = (req, res) => {
    coupons.GetAllCoupon((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.render('template/admin/dsmagiamgia',
            {
                layout: 'mainadmin',
                data:data
            });
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
    coupons.DeleteCoupon(id, (err, data) => {
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
    const Coupon = new coupons({
        "value": req.body.value,
        "quantity": req.body.quantity,
        "manufacturing_date": req.body.manufacturing_date,
        "expiry_date": req.body.expiry_date,
        "proviso": req.body.proviso,
        "code":req.body.code
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
    const Coupon = new coupons({
        "value": req.body.value,
        "quantity": req.body.quantity,
        "manufacturing_date": req.body.manufacturing_date,
        "expiry_date": req.body.expiry_date,
        "proviso": req.body.proviso,
        "code":req.body.code
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

exports.getId = (req, res) => {
    let id = req.params.id;
    res.render('template/admin/suacoupon',
        {
            layout: 'mainadmin',
            data: id
        });
}