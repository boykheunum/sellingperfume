const db = require('../database/connectionDB')

const Users = function (user) {
    this.user_id = user.user_id;
    this.username = user.username;
    this.password = user.password;
    this.name = user.name;
    this.birthday = user.birthday;
    this.phone = user.phone;
    this.email = user.email;
    this.address = user.address;
    this.avatar = user.avatar;
    this.sex = user.sex;
    this.status_user = user.status_user;
}

Users.AddUser = (user, result) => {
    db.query("INSERT INTO user(username, password, name, birthday, phone, email, address, avatar, sex) VALUES (?,?,?,?,?,?,?,?,?)", [user.username, user.password, user.name, user.birthday, user.phone, user.email, user.address, user.avatar, user.sex],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, {
                message: "Them moi thanh cong",
                id: res.insertId, ...user
            });
        })
}

Users.GetAllUser = (result) => {
    db.query("SELECT * FROM user",
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Users.DeleteUser = (id, result) => {
    db.query("UPDATE user SET status_user = ? WHERE user_id = ?", [0, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Users.UpdateUser = (user, id, result) => {
    db.query("UPDATE user SET username=?,password=?,name=?,birthday=?,phone=?,email=?,address=?,avatar=?,sex=? WHERE user_id= ?", [user.username, user.password, user.name, user.birthday, user.phone, user.email, user.address, user.avatar, user.sex, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, {
                message: "Sửa thành công",
                id: res.insertId, ...user
            })
        });
}

Users.SearchUserById = (id, result) => {
    db.query("SELECT * FROM user WHERE user_id= ?", [id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
}

module.exports = Users;