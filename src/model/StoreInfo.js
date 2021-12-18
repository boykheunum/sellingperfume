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

StoreInfo.AddStore = (err, result, storeinfo) => {
    db.query("INSERT INTO store_info(store_name, lat, lng, store_phone, store_email, store_address) VALUES (?,?,?,?,?,?)", [storeinfo.store_name, storeinfo.lat, storeinfo.lng, storeinfo.store_phone, storeinfo.store_email, storeinfo.store_address],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

StoreInfo.GetAllStore = (err, result) => {
    db.query("SELECT * FROM store_info",
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

StoreInfo.DeleteStore = (err, result, id) => {
    db.query("DELETE FROM `store_info` WHERE store_id = ?", [id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

StoreInfo.UpadteStoreInfo = (err, user, id, result) => {
    db.query("UPDATE categories SET category_name= ? WHERE category_id= ?", [category.category_name, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res)
        });
}

StoreInfo.SearchStoresById = (err, result, id) => {
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