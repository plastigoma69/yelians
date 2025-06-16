const { response, request } = require("express");

class RoleController{
constructor(){
console.log("Instancia de rolecontroller");
}
getAll(req = request,res = response){

    return res.status(201).json({
        msj:"Test del endpoint and you know"
    })

}

getOne(req = request,res = response){
    const {id} = req.params; //extraemos el id 
    return res.status(201).json({
        msj:"Get One",
        id
    })

}

created(req = request,res = response){
const {name} = req.body; // extraemos el body
    return res.status(201).json({
        msj:"Created",
        role:{
            name
        }
    })

}

updated(req = request,res = response){
const {id} = req.params; // extraemos el id
const {name} = req.body; // extraemos el body
    
return res.status(201).json({
        msj:"Updated",
        id
    })

}


deleted(req = request,res = response){
const {id} = req.params; // extraemos el id    
return res.status(201).json({
        msj:"Deleted",
        id
    })

}

}




module.exports ={
RoleController
}