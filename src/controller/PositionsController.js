const position = require('../model/PositionsModel');
const CONTANTS = require('../database/contains');

exports.GetPosition = (req, res) => {
    position.GetAllPositions((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.render('template/admin/dschucvu', { layout: 'mainadmin', data: data });
        }
    });
}

exports.GetPositionById = (req, res) => {
    let id = req.params.id
    position.SearchPositionDetalById(id, (err, data) => {
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

exports.UpdatePosition = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    const Position = new position({
        "position_name": req.body.position_name,
    });
    position.UpdatePosition(req.params.id, Position, (error, data) => {
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

exports.CreatePosition = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    const Position = new position({
        "position_name": req.body.position_name,
    });
    position.AddPosition(Position, (error, data) => {
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
    res.render('template/admin/suachucvu',
        {
            layout: 'mainadmin',
            data: id
        });
}

exports.LayoutCreatePositions = (req, res) => {
    
    res.render('template/admin/themcv',
        {
            layout: 'mainadmin',
        });
}