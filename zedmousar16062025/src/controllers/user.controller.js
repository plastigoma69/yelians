const { response, request } = require("express");

class Usercontroller {
    constructor() {
        console.log("Instancia de Usercontroller");
    }
    getAll(req = request, res = response) {

        return res.status(201).json({
            msj: "Test del endpoint and you know"
        })

    }

    getOne(req = request, res = response) {
        const { id } = req.params; //extraemos el id 
        return res.status(201).json({
            msj: "Get One",
            id
        })

    }

    created(req = request, res = response) {

        const { name, email, pasword, role_id } = req.body; // extraemos el body

        return res.status(201).json({
            msj: "Created",
            role: {
                name,
                email,
                pasword,
                role_id
            }
        })

    }

    updated(req = request, res = response) {
        const { id } = req.params; //extraemos el id 
        const { name, email, pasword, role_id } = req.body; // extraemos el body

        return res.status(201).json({

            msj: "Updated",
            name,
            email,
            pasword,
            role_id,
            id
        })

    }


    deleted(req = request, res = response) {
        const { name } = req.body; // extraemos el id    
        const { id } = req.params; //extraemos el id 
        return res.status(201).json({
            msj: `Deleted ${name} was deleted`,
            id

        })

    }

}




module.exports = {
    Usercontroller
}