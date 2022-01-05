const db = require('../database/connectionDB')

const Positions = position => {
    this.position_id = position.position_id;
    this.position_name = position.position_name;
    this.status = position.status;
}

Positions.AddPosition = (result, position) => {
    db.query("INSERT INTO positions(position_name) VALUES (?)", [position.position_name],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Positions.GetAllPositions = (result) => {
    db.query("SELECT * FROM positions",
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Positions.DeletePosition = (result, id) => {
    db.query("UPDATE positions SET status=? WHERE position_id = ?", [0, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Positions.SearchBillDetalById = (result, id) => {
    db.query("SELECT * FROM positions WHERE position_id = ?", [id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Positions.UpdatePosition = (result, id, position) => {
    db.query("UPDATE positions SET position_name=? WHERE position_id=?", [position.name,id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res)
        });
}
module.exports = Positions;