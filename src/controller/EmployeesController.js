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
    employees.SearchEmployeeById(id, (err, data) => {
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
            res.send({ message: 'Xoa thành công nhân viên' });
        }
    });
}

exports.UpdateEmployees = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    const Employee = new employees({
        "employee_name": req.body.employee_name,
        "birthday": req.body.birthday,
        "address": req.body.address,
        "sex": req.body.sex,
        "phone": req.body.phone,
        "image": req.body.image,
        "position_id": req.body.position_id,
    });
    employees.UpdateEmployee(req.params.id,Employee, (error, data) => {
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

exports.CreateEmployees = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    const Employee = new employees({
        "employee_name": req.body.employee_name,
        "birthday": req.body.birthday,
        "address": req.body.address,
        "sex": req.body.sex,
        "phone": req.body.phone,
        "image": req.body.image,
        "position_id": req.body.position_id,
    });
    employees.AddEmployee(Employee, (error, data) => {
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