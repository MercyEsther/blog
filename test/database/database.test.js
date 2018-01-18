var Orm = require("../../database/orm.js");
var expect = require("chai").expect;
var colors = require("colors");

describe('数据库测试',function(done){
    var database = new Orm();
    var data = {};
    
    it("[数据库写入user]", function(done){
        var data = {
            name: "hyh",
            password: "admin",
            role: 1
        }
        database.insertUser(data)
            .then(res => {
                var id = JSON.parse(res).id;
                expect(id).to.be.not.equal(undefined);
            })
            .catch(e => {
                console.log("[database insert error]".red, e.message);
            })
        done();
    })
})
