const db = require('../database/connectionDB')

const StoreInfo = storeinfo => {
    this.store_id = storeinfo.store_id;
    this.store_name = storeinfo.store_name;
    this.lat = storeinfo.lat;
    this.lng = storeinfo.lng;
    this.store_phone = storeinfo.store_phone;
    this.store_email = storeinfo.store_email;
    this.store_address = storeinfo.store_address;
}

StoreInfo.AddStore = (storeinfo, result) => {
    db.query("INSERT INTO store_info(store_name, lat, lng, store_phone, store_email, store_address) VALUES (?,?,?,?,?,?)", [storeinfo.store_name, storeinfo.lat, storeinfo.lng, storeinfo.store_phone, storeinfo.store_email, storeinfo.store_address],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

StoreInfo.GetAllStore = (result) => {
    db.query("SELECT * FROM store_info",
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            if (res.length == 0) {
                result({ msg: "Not Found" }, null);
            }
            result(null, res);
        });
}

StoreInfo.DeleteStore = (id,result) => {
    db.query("DELETE FROM `store_info` WHERE store_id = ?", [id], (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        result(null, res);
    })
}

StoreInfo.UpadteStoreInfo = (storeInfo, id, result) => {
    db.query("UPDATE `store_info` SET `store_name`=?,`lat`=?,`lng`=?,`store_phone`=?,`store_email`=?,`store_address`=? WHERE store_id = ?", [storeInfo.store_name, storeInfo.lat, storeInfo.lng, storeInfo.store_phone, storeInfo.store_email,id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res)
        });
}

StoreInfo.SearchStoresById = (id, result) => {
    db.query("SELECT * FROM store_info WHERE store_id = ?", [id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

module.exports = StoreInfo;