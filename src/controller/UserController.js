const user= require('../model/UserModel');
const CONTANTS = require('../database/contains');

exports.GetUser = (req, res) => {
    user.GetAllUser((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.GetUserById = (req, res) => {
    let id = req.params.id
    user.SearchUserById(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.DeleteUser = (req, res) => {
    let id = req.params.id
    user.DeleteUser(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Some error occurred while retrieving...",
            });
        } else {
            res.send({ message: `Customer was deleted successfully!` });
        }
    });
}