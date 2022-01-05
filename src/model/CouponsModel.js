const db = require('../database/connectionDB')

const Coupons = coupon => {
    this.coupon_id = coupon.coupon_id;
    this.value = coupon.value;
    this.quantity = coupon.quantity;
    this.manufacturing_date = coupon.manufacturing_date;
    this.expiry_date = coupon.expiry_date;
    this.state = coupon.state;
    this.proviso = coupon.proviso;
}

Coupons.AddCoupon = (coupon, result) => {
    db.query("INSERT INTO coupons(value, quantity, manufacturing_date, expiry_date, discount_type, proviso) VALUES (?,?,?,?,?,?)", [coupon.value, coupon.quantity, coupon.manufacturing_date, coupon.expiry_date, coupon.discount_type, coupon.proviso],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Coupons.GetAllCoupon = (result) => {
    db.query("SELECT * FROM coupons",
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Coupons.DeleteCoupon = (id, result) => {
    db.query("UPDATE coupons SET state=? WHERE coupon_id = ?", [0, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Coupons.SearchCouponsById = (id, result) => {
    db.query("SELECT * FROM coupons WHERE coupon_id = ?", [id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Coupons.UpadteCoupons = (coupon, id, result) => {
    db.query("UPDATE `coupons SET value=?,quantity=?,manufacturing_date=?,expiry_date=?,discount_type=?,proviso=? WHERE coupon_id=?", [coupon.value, coupon.quantity, coupon.manufacturing_date, coupon.expiry_date, coupon.discount_type, coupon.proviso, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res)
        });
}

module.exports = Coupons;