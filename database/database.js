const config = require("./config.js");
const Seq = require("sequelize");

class Database{
    constructor(){
        this.isInit = false;
    }

    init(){
        this.seq = new Seq(config.database, config.user, config.password, {
            host: config.host,
            dialect: "mysql",
            pool: {
                max: 10,
                min: 0,
                idle: 30000
            },
            operatorsAliases: false
        })
        this._tables = [];
        this.definePosts();
        this.defineUsers();
    }

    definePosts(){
        let Posts = this.seq.define("posts",{
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
        this._tables.push({name: "posts", model: Posts});
    }

    defineUsers(){
        let Users = this.seq.define("users", {
            id: {
                type: Seq.BIGINT,
                primaryKey: true
            },
            name: Seq.STRING,
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
        this._tables.push({name: "users", model: Users});
    }

    insertUser(data){
        var now = Date.now();
        let _table = null;
        for(let t of this._tables){
            _table = t.name == "users"? t.model : null;
            if(_table) break;
        }

        var result = this.Users.create({
            id: now,
            name: data.name,
            password: data.password,
            email: data.email,
            phone: data.phone,
            createAt: now,
            role: data.role
        })
        .then(r => {
            console.log("[insert]".green,JSON.stringify(r));
            return JSON.stringify(r);
        })
        .catch(e => {
            console.log("[insert]".red, error);
            return e;
        })
    }

    insertPost(data){
        var now = Date.now();

        let _table = null;
        for(let t of this._tables){
            _table = t.name == "posts"? t.model : null;
            if(_table) break;
        }
        console.log("[table]".green, _table);

        var result = _table.create({
            id: now,
            title: data.title,
            author: data.author,
            createAt: now,
            updateAt: now,
            content: data.content,
            desc: data.desc
        })
        .then(result => {
            console.log("[insert]".green,JSON.stringify(result));
            return JSON.stringify(result);
        })
        .catch(error => {
            console.log("[insert]".red, error);
            return error;
        })

        return result;
    }

    async update(table,data){
        var now = Date.now();
        
        var _table = null;
        for(let t of this._tables){
            _table = t.name == table ? t.model : null;
            break;
        }

        if(_table != null){
            let r = await _table.findOne({
                where: {
                    id: data.id
                }
            });
            if(r != null){
            r.title = data.title;
            r.author = data.author;
            r.content = data.content;
            r.desc = data.desc;
            r.updateAt = now;
            await r.save();
            }
            else{
                throw new Error(`[database find error]: haven't this data`);
            }
        }
        else{
            throw new Error(`[database delete error]: haven't this table '${table}'`);
        }
    }

    async delete(table,data){
        var now = Date.now();

        var _table = null;
        for(let t of this._tables){
            _table = t.name == table ? t.model : null;
            break;
        }

        if(_table != null){
            let r = await _table.findAll({
                where: {
                    id: data.id
                }
            });
            await r.destroy();
        }
        else{
            throw new Error(`[database delete error]: haven't this table '${table}'`);
        }
    }

    async findAll(table){
        var _table = null;
        for(let t of this._tables){
            _table = t.name == table ? t.model : null;
            if(_table) break;
        }

        if(_table){
            let r = await _table.findAll();
            return r;
        }
        else{
            throw new Error(`[database search error]: haven't this table '${table}'`);
        }
    }

    async findById(table,id){
        var _table = null;
        for(let t of this._tables){
            _table = t.name == table ? t.model : null;
            if(_table) break;
        }

        if(_table){
            let r = await _table.findById(id);
            return JSON.stringify(r);
        }
        else{
            throw new Error(`[database search error]: havan't this data id:${id} in table: ${table}`);
        }
    }

    async findByName(table, name){
        var _table = null;
        for(let t of this._tables){
            _table = t.name == table ? t.model : null;
            if(_table) break;
        }

        if(_table){
            let r = await _table.findOne({
                where: {
                    name: name
                }
            });
            return JSON.stringify(r);
        }
        else{
            throw new Error(`[database search error]: havan't this data name:${name} in table: ${table}`);
        }
    }
}

module.exports = Database;