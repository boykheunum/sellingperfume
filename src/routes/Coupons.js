const CouponsController = require('../controller/CouponsController')


module.exports = (app) => {
  app.get("/coupons", CouponsController.GetCoupons);
  app.post("/coupons/createcoupons", CouponsController.CreateCoupons);
  app.get("/admin/addcoupons", CouponsController.LayoutCreateCoupons);
  app.post("/coupons/updatecoupons/:id", CouponsController.UpdateCoupons);
  app.get("/coupons/searchcouponsbyid/:id", CouponsController.GetCouponsById);
  app.delete("/coupons/delete/:id", CouponsController.DeleteCoupons);
  app.get('/admin/suacoupon/:id', CouponsController.getId);
  //giao dien
  //  app.get('/admin/suacoupon', (req, res) => {
  //   res.render('template/admin/suacoupon',{layout: 'mainadmin'});
  // });
};