const db = require('../database/connectionDB')

const Employees = function (employees) {
    this.employee_id = employees.employee_id;
    this.employee_name = employees.employee_name;
    this.birthday = employees.birthday;
    this.address = employees.address;
    this.sex = employees.sex;
    this.phone = employees.phone;
    this.image = employees.image;
    this.position_id = employees.position_id;
    this.status = employees.status;
}

Employees.AddEmployee = (employees, result) => {
    db.query("INSERT INTO employees(employee_name, birthday, address, sex, phone, image, position_id) VALUES (?,?,?,?,?,?,?)", [employees.employee_name, employees.birthday, employees.address, employees.sex, employees.phone, employees.image, employees.position_id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, {
                message: "Thêm thành công",
                id: res.insertId, ...employees
            });
        })
}

Employees.GetAllEmployees = (result) => {
    db.query("SELECT * FROM employees WHERE status = ?",[1],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
}

Employees.DeleteEmployees = (id, result) => {
    db.query("UPDATE employees SET status=? WHERE employee_id = ?", [0, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, {
            message: "Xóa thành công",

        });
    });
}

Employees.SearchEmployeeById = (id, result) => {
    db.query("SELECT * FROM employees WHERE employee_id = ? AND status = ?", [id, 1],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
}

Employees.UpdateEmployee = (id, employees, result) => {
    db.query("UPDATE `employees` SET `employee_name`=?,`birthday`=?,`address`=?,`sex`=?,`phone`=?,`image`=?,`position_id`=? WHERE employee_id=?", [employees.employee_name, employees.birthday, employees.address, employees.sex, employees.phone, employees.image, employees.position_id, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, {
                message: "Sửa thành công",
                id: res.insertId, ...employees
            });
        });
}

module.exports = Employees;