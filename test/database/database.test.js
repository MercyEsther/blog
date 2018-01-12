var Database = require("../../database/database.js");
var expect = require("chai").expect;
var colors = require("colors");

describe('数据库测试',function(done){
    var database = new Database();
    var data = {};
    
    it("[数据库写入post]", function(done){
        database.init();
        var data = {
            name: "huangyh",
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

    it("数据库查找", function(done){
        database.findAll("users")
            .then(res => {
                data = res[0];
                expect(res[0].id).to.be.an("string")
                done();
            })
            .catch(e => {
                console.log("[database search error]".red,e.message);
            })

    })

    it("[数据库更新post]",function(done){
        database.update("users",data)
            .catch(e => {
                console.log("[database update error]".red,e.message);
            })
        done();
    })

    it("[数据库删除post]",function(done){
        database.delete("post", data);
        done();
    })
})
