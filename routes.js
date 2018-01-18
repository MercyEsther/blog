const fs = require('fs');
const mapping = require("./controller/index.js");

function routes(router){
    for(var url in mapping){
        if(url.startsWith("GET")){
            var path = url.substring(4);
            path = new RegExp(path);
            router.get(path, mapping[url]);
        }
        else if(url.startsWith("POST")){
            var path = url.substring(5);
            path = new RegExp(path);
            router.post(path, mapping[url]);
        }
        else{
            console.log(`url error: ${url}`);
        }
    }
}

module.exports = routes;