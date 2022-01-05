const UserController = require('../controller/UserController')


module.exports = (app) => {
  app.get("/user", UserController.GetUser);
  app.get("/user/searchuserbyid/:id", UserController.GetUserById);
  app.delete("/user/delete/:id", UserController.DeleteUser)
};