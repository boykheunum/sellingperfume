const db = require('../database/connectionDB')

const Users = user => {
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

Users.AddUser = (err, result, user) => {
    db.query("INSERT INTO user(username, password, name, birthday, phone, email, address, avatar, sex ) VALUES (?,?,?,?,?,?,?,?,?)", [user.username, user.password, user.name, user.birthday, user.phone, user.email, user.address, user.avatar, user.sex],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Users.GetAllUser = (err, result) => {
    db.query("SELECT * FROM user",
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Users.DeleteUser = (err, result, id) => {
    db.query("UPDATE user SET status_user = ? WHERE user_id = ?", [0, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Users.UpdateUser = (err, user, id, result) => {
    db.query("UPDATE user SET username=?,password=?,name=?,birthday=?,phone=?,email=?,address=?,avatar=?,sex=? WHERE user_id= ?", [user.username, user.password, user.name, user.birthday, user.phone,user.email, user.address,user.avatar,user.sex,id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res)
        });
}

Users.SearchUserById = (err, result, id) => {
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