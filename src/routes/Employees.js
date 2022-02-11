const EmployeesController = require('../controller/EmployeesController')


module.exports = (app) => {
  app.get("/employees", EmployeesController.GetEmployees);
  app.post("/employees/create", EmployeesController.CreateEmployees);
  app.post("/employees/update/:id", EmployeesController.UpdateEmployees);
  app.get("/employees/searchemployeesbyid/:id", EmployeesController.GetEmployeesById);
  app.delete("/employees/delete/:id", EmployeesController.DeleteEmployees);
  app.get('/admin/suanv/:id', EmployeesController.getId);

  //giao dien
  // app.get('/admin/suanv', (req, res) => {
  //   res.render('template/admin/suanv', { layout: 'mainadmin' });
  // });
};