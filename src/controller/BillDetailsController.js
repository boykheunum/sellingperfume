const billDetails = require('../model/BillDetailsModel');
const CONTANTS = require('../database/contains');

exports.GetBillDetails = (req, res) => {
    billDetails.GetAllBillDetails((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
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
                message: err.message || "Some error occurred while retrieving...",
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
                message: err.message || "Some error occurred while retrieving...",
            });
        } else {
            res.send({ message: `Customer was deleted successfully!` });
        }
    });
}