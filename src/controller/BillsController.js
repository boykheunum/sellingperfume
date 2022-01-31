const bills = require('../model/BillsModel');
const CONTANTS = require('../database/contains');

exports.GetBills = (req, res) => {
    bills.GetAllBills((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.GetBillsById = (req, res) => {
    let id = req.params.id
    bills.SearchBillsById(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.DeleteBills = (req, res) => {
    let id = req.params.id
    bills.DeleteBills(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.send({ message: `Xóa thành công` });
        }
    });
}


exports.CreateBills = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    const Bill = new bills({
        "bills_date": req.body.bills_date,
        "totalmoney": req.body.totalmoney,
        "employee_id": req.body.employee_id,
        "coupon_id": req.body.coupon_id,
        "status_bills": req.body.status_bills,
        "user_id": req.body.user_id,
    });
    bills.AddBill(Bill, (error, data) => {
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