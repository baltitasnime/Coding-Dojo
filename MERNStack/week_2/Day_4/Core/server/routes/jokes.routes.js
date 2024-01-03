const JokesController=require("../controllers/jokes.controller")

module.exports=(app)=>{
    app.get("/api/jokes", JokesController.getAll)
    app.get("/api/:id" , JokesController.getById)
    app.post("/api/create", JokesController.create) 
    app.put("/api/update/:id",JokesController.update)
    app.delete("/api/delete/:id",JokesController.delete)

}