const BillDetaisController = require('../controller/BillDetailsController')


module.exports = (app) => {
  app.get("/billdetails", BillDetaisController.GetBillDetails);
  app.get("/billdetails/searchbilldetailsbyid/:id", BillDetaisController.GetBillDetailsById);
  app.delete("/billdetails/delete/:id", BillDetaisController)
};