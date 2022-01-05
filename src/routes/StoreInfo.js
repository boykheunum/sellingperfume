const storeInfoController = require('../controller/StoreInfoController')


module.exports = (app) => {
  app.get("/storeinfo", storeInfoController.GetStoreInfo);
  app.get("/storeinfo/searchbyid/:id",  storeInfoController.GetStoreInfoById);
  app.delete("/storeinfo/delete/:id", storeInfoController.DeleteStore)
};