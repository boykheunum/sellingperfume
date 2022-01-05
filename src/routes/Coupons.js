const CouponsController = require('../controller/CouponsController')


module.exports = (app) => {
  app.get("/coupons", CouponsController.GetCoupons);
  app.get("/coupons/searchcouponsbyid/:id", CouponsController.GetCouponsById);
  app.delete("/coupons/delete/:id", CouponsController.DeleteCoupons)
};