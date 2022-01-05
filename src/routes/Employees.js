const EmployeesController = require('../controller/EmployeesController')


module.exports = (app) => {
  app.get("/employees", EmployeesController.GetEmployees);
  app.get("/employees/searchemployeesbyid/:id", EmployeesController.GetEmployeesById);
  app.delete("/employees/delete/:id", EmployeesController.DeleteEmployees)
};