const db = require('../database/connectionDB')

const Positions = function (position) {
    this.position_id = position.position_id;
    this.position_name = position.position_name;
    this.status = position.status;
}

Positions.AddPosition = (position, result) => {
    db.query("INSERT INTO positions(position_name) VALUES (?)", [position.position_name],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, {
                message: "Thêm mới thành công",
            });
        })
}

Positions.GetAllPositions = (result) => {
    db.query("SELECT * FROM positions WHERE STATUS = ?", [1],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        });
}

Positions.DeletePosition = (id, result) => {
    db.query("UPDATE positions SET status=? WHERE position_id = ?", [0, id], (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, res);
    });
}

Positions.SearchPositionDetalById = (id, result) => {
    db.query("SELECT * FROM positions WHERE position_id = ? AND status = ?", [id, 1],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res);
        })
}

Positions.UpdatePosition = (id, position, result) => {
    db.query("UPDATE `positions` SET `position_name`= ? WHERE `position_id` = ?", [position.position_name, id],
        (err, res) => {
            if (err) {
                result(err, null);
                return;
            }
            result(null, res)
        });
}
module.exports = Positions;