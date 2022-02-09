const BillsController = require('../controller/BillsController')


module.exports = (app) => {
  app.get("/bills", BillsController.GetBills);
  app.get("/bills/searchbillsbyid/:id", BillsController.GetBillsById);
  app.delete("/bills/delete/:id", BillsController.DeleteBills);

  
};