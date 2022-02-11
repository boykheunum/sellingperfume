const user = require('../model/UserModel');
const CONTANTS = require('../database/contains');

const jwt = require("jsonwebtoken");
const config = require("../database/jwt_config");
const session = require("express-session");
const res = require("express/lib/response");
const { cookie } = require("express/lib/response");
exports.GetUser = (req, res) => {
    user.GetAllUser((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.render('template/admin/dsnguoidung', { layout: 'mainadmin', data: data });
        }
    });
}

exports.GetUserById = (req, res) => {
    let id = req.params.id
    user.SearchUserById(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi ",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}


exports.CreateUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    console.log(req.file)
    const User = new user({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        birthday: req.body.birthday,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        avatar: req.file.filename,

        sex: req.body.sex,

    });
    user.AddUser(User, (error, data) => {
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

exports.UpdateUser = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    const User = new user({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        birthday: req.body.birthday,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        avatar: req.file.filename,
        sex: req.body.sex,
    });
    user.UpdateUser(User, req.params.id, (error, data) => {
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

exports.DeleteUser = (req, res) => {
    let id = req.params.id
    user.DeleteUser(id, (err) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.send({ message: 'Xóa thành công người dùng' });
        }
    });
}

exports.getId = (req, res) => {
    let id = req.params.id;
    res.render('template/admin/suauser',
        {
            layout: 'mainadmin',
            data: id
        });
}

exports.LayoutCreateUser = (req, res) => {
    res.render('template/admin/themuser',
        {
            layout: 'mainadmin',
        });
}

exports.LayoutLogin = (req, res) => {
    res.render('template/user/dangnhap', { layout: 'main' });
}

exports.Login = (req, res) => {
    user.login(req.body.username, req.body.password,
        (err, data) => {
            if (err) {
                if (err.kind === "Not_found") {
                    res.status(200).send({
                        message: `Username or password is not correct`
                    });
                } else {
                    res.status(500).send({
                        message: "False in server"
                    });
                }
            } else {
                const access = jwt.sign({ dataItem: data }, config.access_token, {
                    expiresIn: '10h'
                });
                res.cookie("username", data);
                res.send({ data, access });
            }
        });
}

exports.LayoutSigin = (req, res) => {
    res.render('template/user/dangky', { layout: 'main' });
}
exports.Sigin = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "data is null"
        });
    }
    console.log(req.file)
    const User = new user({
        username: req.body.username,
        password: req.body.password,
        name: req.body.name,
        birthday: req.body.birthday,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        avatar: req.file.filename,
        sex: req.body.sex,

    });
    user.AddUser(User, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Không thể thêm mới"
            });
        }
        else {
            const access = jwt.sign({ dataItem: data}, config.access_token, {
                expiresIn: '10h'
            });
            res.cookie("username", data);
            res.send({ data, access });
        }
    });
}