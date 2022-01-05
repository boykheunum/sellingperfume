const db = require('../database/connectionDB')

const BillDetails = billdetail => {
    this.bill_id = billdetail.bill_id;
    this.product_id = billdetail.product_id;
    this.detail_quantily = billdetail.detail_quantily;
    this.detail_cost = billdetail.detail_cost;
    this.detail_price = billdetail.detail_price;
    this.detail_status = billdetail.detail_status;
}

BillDetails.AddBillDeltail = (result, billdetail) => {
    db.query("INSERT INTO bill_details(bill_id, product_id, detail_quantily, detail_cost, detail_price) VALUES (?,?,?,?,?)", [billdetail.bill_id, billdetail.product_id, billdetail.detail_quantily, billdetail.detail_cost, billdetail.detail_price],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

BillDetails.GetAllBillDetails = (result) => {
    db.query("SELECT * FROM bill_details",
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

BillDetails.SearchBillDetalById = (result, id) => {
    db.query("SELECT * FROM bill_details WHERE bill_id = ?", [id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

module.exports = BillDetails;