const UserController = require('../controller/UserController')


module.exports = (app) => {
  app.get("/user", UserController.GetUser);
  app.get("/user/searchuserbyid/:id", UserController.GetUserById);
  app.post("/user/createuser", UserController.CreateUser);
  app.post("/user/updateuser/:id", UserController.UpdateUser);
  app.delete("/user/delete/:id", UserController.DeleteUser);
  app.get('/admin/suauser/:id', UserController.getId);
  app.get('/admin/adduser', UserController.LayoutCreateUser);


  // app.get('/admin/suauser/:id', (req, res) => {
  //   res.render('template/admin/suauser',{layout: 'mainadmin'});
  // });
  app.get('/home/dangnhap',UserController.LayoutLogin);
  app.post('/home/login',UserController.Login);
  app.get('/home/dangky',UserController.LayoutSigin);
  app.post('/user/sigin',UserController.Sigin)
  

};