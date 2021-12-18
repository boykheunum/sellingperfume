const db = require('../database/connectionDB')

const Employees = employees => {
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

Employees.AddEmployee = (err, result, employees) => {
    db.query("INSERT INTO employees(employee_name, birthday, address, sex, phone, image, position_id) VALUES (?,?,?,?,?,?,?)", [employees.employee_id, employees.birthday, employees.address, employees.sex, employees.phone, employees.image, employees.position_id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Employees.GetAllEmployees = (err, result) => {
    db.query("SELECT * FROM employees",
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Employees.DeleteEmployees = (err, result, id) => {
    db.query("UPDATE employees SET state=? WHERE employee_id = ?", [0, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Employees.SearchEmployeeById = (err, result, id) => {
    db.query("SELECT * FROM employees WHERE employee_id = ?", [id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Employees.UpdateEmployee = (err, result, id, employees) => {
    db.query("UPDATE employees SET employee_name=?, birthday=?,address=?,sex=?,phone=?,image=?,position_id=? WHERE employee_id=?", [employees.employee_name, employees.employee_birthday, employees.address,employees.sex, employees.phone,employees.image, employees.position_id, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res)
        });
}

module.exports = Employees;