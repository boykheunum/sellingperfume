const storeInfoController = require('../controller/StoreInfoController')


module.exports = (app) => {
  app.get("/storeinfo", storeInfoController.GetStoreInfo);
  app.post("/storeinfo/createinfo", storeInfoController.CreateInfo);
  app.put("/storeinfo/updateinfo/:id", storeInfoController.UpdateInfo);
  app.get("/storeinfo/searchstorebyid/:id", storeInfoController.GetStoreInfoById);
  app.delete("/storeinfo/delete/:id", storeInfoController.DeleteStore)

  //admin them 
  app.get("/admin/createinfo", storeInfoController.LayoutCreateInfo);
   //admin  sua 
   app.get('/admin/suattch/:id', storeInfoController.getId);

  
};