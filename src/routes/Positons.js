const PositionController = require('../controller/PositionsController')


module.exports = (app) => {
  app.get("/Position", PositionController.GetPosition);
  app.post("/Position/create", PositionController.CreatePosition);
  app.get("/Position/searchPositionbyid/:id", PositionController.GetPositionById);
  app.delete("/Position/delete/:id", PositionController.DeletePosition);
  
};