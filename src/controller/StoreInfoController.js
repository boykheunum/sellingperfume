const storeInfo = require('../model/StoreInfoModel');
const CONTANTS = require('../database/contains');

exports.GetStoreInfo = (req, res) => {
    storeInfo.GetAllStore((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.GetStoreInfoById = (req, res) => {
    let id = req.params.id
    storeInfo.SearchStoresById(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.DeleteStore = (req, res) => {
    let id = req.params.id
    storeInfo.DeleteStore(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
            });
        } else {
            res.send({ message: `Customer was deleted successfully!` });
        }
    });
}