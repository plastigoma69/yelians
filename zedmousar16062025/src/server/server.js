
const express = require('express');
const cors = require('cors')
class Server{

    constructor(){
        console.log("Instancia del servidor");
        this.app = express(); //config del express
        this.port = 3500;
        this.pre="/api";
    
        //definir paths
        this.paths = {
            role:`${this.pre}/roles`,
            user:`${this.pre}/users`,
        }
//
        this.middlewares();
        this.routes();

    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }
    routes(){
        this.app.use(this.paths.role,require('../routes/role.route'))
        this.app.use(this.paths.user,require('../routes/user.route'))
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }

}

module.exports = {
   Server 
}

