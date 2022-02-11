const employees = require('../model/EmployeesModel');
const position = require('../model/PositionsModel');
const CONTANTS = require('../database/contains');

exports.GetEmployees = (req, res) => {
    employees.GetAllEmployees((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.render('template/admin/dsnv',
                {
                    layout: 'mainadmin',
                    data: data
                });
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
        "image": req.file.filename,
        "position_id": req.body.position_id,
    });
    employees.UpdateEmployee(req.params.id, Employee, (error, data) => {
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
        "image": req.file.filename,
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

exports.getId = (req, res) => {
    let id = req.params.id;
    position.GetAllPositions((err, listPosition) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
<<<<<<< HEAD
            employees.SearchEmployeeById(id, (err, data_old) => {
                if (err) {
                    res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                        message: err.message || "Đã xảy ra một số lỗi",
                    });
                } else {
                    res.render('template/admin/suanv', { layout: 'mainadmin', data:id, listPosition:listPosition, employee: data_old});
                }
            });
        
           
=======
            res.render('template/admin/suanv', { layout: 'mainadmin', data: id, listPosition: data });
        }
    });
}

exports.LayoutCreateEmployees = (req, res) => {
    position.GetAllPositions((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.render('template/admin/themnv', { layout: 'mainadmin', listPosition: data });
>>>>>>> f4da31ba4054fca448098e44b89868230eda2395
        }
    });
}

