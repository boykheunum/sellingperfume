const PositionController = require('../controller/PositionsController')


module.exports = (app) => {
  app.get("/Position", PositionController.GetPosition);
  app.post("/Position/update/:id", PositionController.UpdatePosition);
  app.post("/Position/create", PositionController.CreatePosition);
  app.get("/Position/searchPositionbyid/:id", PositionController.GetPositionById);
  app.delete("/Position/delete/:id", PositionController.DeletePosition);
  app.get('/admin/suachucvu/:id', PositionController.getId);

  //giao dien
  // app.get('/admin/suachucvu/:id', (req, res) => {
  //   res.render('template/admin/suachucvu',{layout: 'mainadmin'});
  // });
};