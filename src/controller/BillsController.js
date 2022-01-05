const bills = require('../model/BillsModel');
const CONTANTS = require('../database/contains');

exports.GetBills = (req, res) => {
    bills.GetAllBills((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
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
                message: err.message || "Some error occurred while retrieving...",
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
                message: err.message || "Some error occurred while retrieving...",
            });
        } else {
            res.send({ message: `Customer was deleted successfully!` });
        }
    });
}