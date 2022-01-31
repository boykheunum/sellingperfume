const UserController = require('../controller/UserController')


module.exports = (app) => {
  app.get("/user", UserController.GetUser);
  app.get("/user/searchuserbyid/:id", UserController.GetUserById);
  app.post("/user/createuser", UserController.CreateUser);
  app.put("/user/updateuser/:id", UserController.UpdateUser);
  app.delete("/user/delete/:id", UserController.DeleteUser)
 
};