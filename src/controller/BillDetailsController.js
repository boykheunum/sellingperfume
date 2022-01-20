const billDetails = require('../model/BillDetailsModel');
const CONTANTS = require('../database/contains');

exports.GetBillDetails = (req, res) => {
    billDetails.GetAllBillDetails((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.GetBillDetailsById = (req, res) => {
    let id = req.params.id
    billDetails.SearchBillDetailsById(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.DeleteBillDetails = (req, res) => {
    let id = req.params.id
    billDetails.DeleteBillDetails(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.send({ message: `Xóa thành công` });
        }
    });
}

exports.CreateBillsDetail = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    const BillDetail = new BillDetails({
        "product_id": billdetail.product_id,
        "detail_quantily": billdetail.detail_quantily,
        "this.detail_cost": billdetail.detail_cost,
        "this.detail_price": billdetail.detail_price,
    });
    billDetails.AddBill(BillDetails, (error, data) => {
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