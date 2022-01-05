const PositionController = require('../controller/PositionsController')


module.exports = (app) => {
  app.get("/position",PositionController.GetPosition);
  app.get("/Position/searchPositionbyid/:id", PositionController.GetPositionById);
  app.delete("/Position/delete/:id", PositionController.DeletePosition)
};