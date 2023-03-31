

const Sallecontroller = require("../controller/Salle.controller"); 

module.exports = (app)=>{
    app.post("/api/CreateSalle",Sallecontroller.CreateSalle); 
    app.get("/api/GetAllSalle",Sallecontroller.GetAllSalles); 
    app.get("/api/GetOneSalle/:id",Sallecontroller.GetOneSalle); 
    app.delete("/api/DeleteSalle/:id", Sallecontroller.DeleteSalle);
    app.put("/api/EditSalle/:id", Sallecontroller.EditSalle);
}