const db = require('../database/connectionDB')

const Bills = bill => {
    this.bills_id = bill.bills_id;
    this.bills_date = bill.bills_date;
    this.totalmoney = bill.totalmoney;
    this.employee_id = bill.employee_id;
    this.coupon_id = bill.coupon_id;
    this.status_bills = bill.status_bills;
    this.processing_status = bill.processing_status;
    this.user_id = bill.user_id;
}

Bills.AddBill = (result, bill) => {
    db.query("INSERT INTO bills (bills_date, totalmoney, employee_id, coupon_id, processing_status, user_id) VALUES (?,?,?,?,?,?)", [bill.bills_date, bill.totalmoney, bill.employee_id, bill.coupon_id, bill.status, bill.processing_status, bill.user_id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Bills.GetAllBills = (result) => {
    db.query("SELECT * FROM bills",
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Bills.DeleteBill = (result, id) => {
    db.query("UPDATE bills SET status_bills=? WHERE bills_id = ?", [0, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Bills.SearchByUserId = (result, userId) => {
    db.query("SELECT * FROM bills WHERE user_id = ?", [userId],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Bills.SearchByProcessingStatus = (result) => {
    db.query("SELECT * FROM bills WHERE processing_status = ?", [0],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

module.exports = Bills;