const employees = require('../model/EmployeesModel');
const CONTANTS = require('../database/contains');

exports.GetEmployees = (req, res) => {
    employees.GetAllEmployees((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.GetEmployeesById = (req, res) => {
    let id = req.params.id
    employees.SearchEmployeesById(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}


exports.DeleteEmployees = (req, res) => {
    let id = req.params.id
    employees.DeleteEmployees(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.send({ message: `Xoa thành công nhân viên` });
        }
    });
}