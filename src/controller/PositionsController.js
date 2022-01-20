const position = require('../model/PositionsModel');
const CONTANTS = require('../database/contains');

exports.GetPosition = (req, res) => {
    position.GetAllPositions((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.GetPositionById = (req, res) => {
    let id = req.params.id
    position.SearchPositionById(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.DeletePosition = (req, res) => {
    let id = req.params.id
    position.DeletePosition(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.send({ message: `Xóa thành công chức vụ!` });
        }
    });
}