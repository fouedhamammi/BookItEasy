const AdminController = require("../controller/Admin.controller");


module.exports = (app)=>{
    app.post("/api/CreateAdmin",AdminController.createAdmin); 
  
}
