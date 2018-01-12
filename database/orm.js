const Base = require("./base.js");
const colors = require("colors");

class Orm extends Base{
    constructor(){
        super();
    }

    findAll(table){
        let _table = this.getTable(table);
        _table.findAll().then(r => {
            return JSON.stringify(r);
        })
        .catch(e => {
            throw new Error("[findAll error]".red, e)
        })
    }

    findByName(table, name){
        let _table = this.getTable(table);
        let r = _table.findOne({where: {name: name}}).then(r => {
            return JSON.stringify(r);
        })
        .catch(e => {
            throw new Error("[findByName error]".red);
        })
        return r;
    }

    findById(table, id){
        let _table = this.getTable(table);
        _table.findById(id).then(r => {
            return JSON.stringify(r);
        })
        .catch(e => {
            throw new Error("[findById error]".red);
        })
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

    insertUser(data){
        let name = data.name;
        let oldName = this.findByName("users",name).then(r => {
            return r;
        })
        if(!oldName){
            let _table = this.getTable("users");
            let r = _table.create({
                id: Date.now(),
                name: data.name,
                password: data.password,
                email: data.email,
                phone: data.phone,
                createAt: Date.now(),
                role: data.role || 0
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
            return JSON.stringify(r);
        }).catch(e => {
            throw new Error("[insertPost error]".red);
        })
        return r;
    }
}

// var o = new Orm();
// var user = {
//     name: "huangyh",
//     password: "admin",
//     email: "",
//     phone: "",
//     role: 1
// }
// var post = {
//     title: "test",
//     author: "huangyh",
//     content: "content",
//     desc: "desc"
// }
// o.insertPost(post).then(r => {
//     console.log("[insertPost]".green, r);
// }).catch(e => {
//     console.log("[insertPost]".red, e);
// })