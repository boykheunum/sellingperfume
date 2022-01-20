const storeInfo = require('../model/StoreInfoModel');
const CONTANTS = require('../database/contains');

exports.GetStoreInfo = (req, res) => {
    storeInfo.GetAllStore((err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi ",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}

exports.CreateInfo = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "data is null"
        });
      }
    const info = new storeInfo({
        store_name: req.body.store_name,
        lat: req.body.lat,
        lng: req.body.lng,
        store_phone: req.body.store_phone,
        store_email: req.body.store_email,
        store_address: req.body.store_address
    });
    storeInfo.AddStore(info,(error,data)=> {
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
exports.UpdateInfo = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "data is null"
        });
      }
    const info = new storeInfo({
        store_name: req.body.store_name,
        lat: req.body.lat,
        lng: req.body.lng,
        store_phone: req.body.store_phone,
        store_email: req.body.store_email,
        store_address: req.body.store_address
    });
    storeInfo.UpdateStoreInfo(info,req.params.id,(error,data)=> {
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

exports.GetStoreInfoById = (req, res) => {
    let id = req.params.id
    storeInfo.SearchStoresById(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi",
            });
        } else {
            res.status(CONTANTS.STATUS_CODE.SUCCESS).send(data);
        }
    });
}



exports.DeleteStore = (req, res) => {
    let id = req.params.id
    storeInfo.DeleteStore(id, (err, data) => {
        if (err) {
            res.status(CONTANTS.STATUS_CODE.SERVER_ERROR).send({
                message: err.message || "Đã xảy ra một số lỗi ",
            });
        } else {
            res.send({ message: 'Thông tin đã được xóa' });
        }
    });
}