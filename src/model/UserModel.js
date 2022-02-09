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
    db.query("SELECT * FROM `user` WHERE status_user = ?", [1],
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
    db.query("SELECT * FROM user WHERE user_id= ? AND status_user = ? ", [id, 1],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            req.flash('danger', 'Please provide username and password!');
            return res.status(400).render('login');
        }

        db.query('SELECT * FROM user WHERE username = ?', [username], async (error, results) => {
            console.log(results);
            if (!results || !(await bcrypt.compare(password, results[0].password))) {
                req.flash('danger', 'Username or password is incorrect!');
                res.status(401).render('login')
            } else {
                const id = results[0].user_id;

                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });
                console.log("The token is: " + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }
                res.cookie('jwt', token, cookieOptions);
                req.flash('success', 'You logged in successfully');
                res.status(200).redirect("/");
            }
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = Users;