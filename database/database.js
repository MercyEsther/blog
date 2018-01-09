const mysql = require("mysql");

class Database{
    constructor(host = "127.0.0.1", port = "3306", user = "root", password = "", database = "blog"){
        this.dbConfig = {
            host: host,
            port: port,
            user: user,
            password: password,
            database: database
        };
        this.connection = mysql.createConnection(this.dbConfig);
        this.isInit = false;
    }

    init(){
        this.connection.connect(function(err){
            if(err){
                console.log("[mysql connect]:",err);
                this.isInit = true;
            }
            else{
                console.log("[mysql connect]:","success");
                this.isInit = false;
            }
        })
        this.connection.on("error",function(err){
            console.log("db error",err);
            if(err.message == "PROTOCOL_CONNECTION_LOST"){
                handlerConnect();
            }
            else{
                throw err;
            }
        })
    }

}

module.exports = Database;