const Seq = require("sequelize");
const config = require("./config.js");

class Base{
    constructor(){
        this.seq = new Seq(config.database, config.user, config.password, {
            host: config.host,
            dialect: "mysql",
            pool: {
                max: 10,
                min: 0
            },
            operatorsAliases: false
        }),
        this._tables = [];
        this.definePosts();
        this.defineUsers();
    }

    definePosts(){
        let Posts = this.seq.define("posts", {
            id: {
                type: Seq.STRING,
                primaryKey: true
            },
            title: Seq.STRING,
            author: Seq.STRING,
            createAt: Seq.BIGINT,
            updateAt: Seq.BIGINT,
            content: Seq.TEXT,
            desc: Seq.STRING
        },{
            timestamps: false
        })
        let _table = {
            name: "posts",
            model: Posts
        }
        this._tables.push(_table);
    }

    defineUsers(){
        let Users = this.seq.define("users", {
            id: {
                type: Seq.BIGINT,
                primaryKey: true
            },
            name: {
                type: Seq.STRING,
                unique: "compositeIndex"
            },
            password: Seq.STRING,
            email: Seq.STRING,
            phone: Seq.STRING,
            createAt: Seq.BIGINT,
            role: {
                type: Seq.TINYINT,
                defaultValue: 0
            }
        },{
            timestamps: false
        })
        let _table = {
            name: "users",
            model: Users
        }
        this._tables.push(_table);
    }
}

module.exports = Base;