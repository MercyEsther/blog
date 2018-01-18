const Base = require("./base.js");
const colors = require("colors");

class Orm extends Base{
    constructor(){
        super();
    }

    findAll(table){
        let _table = this.getTable(table);
        let result = _table.findAll().then(r => {
            return r;
        })
        .catch(e => {
            throw new Error("[findAll error]".red, e)
        })
        return result;
    }

    findByName(table, name){
        let _table = this.getTable(table);
        let result = _table.findOne({where: {name: name}}).then(r => {
            return r;
        })
        .catch(e => {
            throw new Error("[findByName error]".red);
        })
        return result;
    }

    findById(table, id){
        let _table = this.getTable(table);
        let result = _table.findById(id).then(r => {
            return r;
        })
        .catch(e => {
            throw new Error("[findById error]".red);
        })
        return result;
    }

    async update(table,data,option){
        let _table = this.getTable(table);
        let r = await _table.findById(data.id)
        if(r){
            if(option == "delete"){
                await r.destroy();
            }
            else if(option == "update"){
                r.title = data.title;
                r.author = data.author;
                r.content = data.content;
                r.desc = data.desc;
                r.updateAt = Date.now();
                r.img = data.img;
                await r.save();
            }
            return true;
        }
        else{
            return false;
        }
        return result;
    }

    getTable(table){
        let _table = null;
        for(let t of this._tables){
            _table = t.name == table ? t.model : null;
            if(_table) break;
        }
        if(_table){
            return _table;
        }
        else{
            throw new Error("[getTable] error".red );
        }
    }

    async insertUser(data){
        let name = data.name;
        let oldName = await this.findByName("users",name);
        if(oldName == null){
            let _table = this.getTable("users");
            let r = _table.create({
                id: Date.now(),
                name: data.name,
                password: data.password,
                email: data.email,
                phone: data.phone,
                createAt: Date.now(),
                role: data.role || 0,
                img: data.img
            })
            .then(r => {
                return JSON.stringify(r);
            })
            .catch(e => {
                throw new Error("[insertUser error]".red);
            })
            return r;
        }
        else{
            throw new Error("[insertUser error: name exist]".red);
        }
    }

    insertPost(data){
        let _table = this.getTable("posts");
        let r = _table.create({
            id: Date.now(),
            title: data.title,
            author: data.author,
            content: data.content,
            desc: data.desc,
            createAt: Date.now(),
            updateAt: Date.now()
        }).then(r => {
            return r;
        }).catch(e => {
            throw new Error("[insertPost error]".red);
        })
        return r;
    }
}

module.exports = Orm;