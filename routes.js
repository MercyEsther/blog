const fs = require('fs');

function routes(router){

    // 获得/controller下所有的.js文件
    var jsFiles = fs.readdirSync(__dirname + "/controller");
    jsFiles = jsFiles.filter(f => {
        return f.endsWith(".js");
    })

    function addMapping(router, mapping){
        for(var url in mapping){
            if(url.startsWith("GET")){
                var path = url.substring(4);
                router.get(path, mapping[url]);
            }
            else if(url.startsWith("POST")){
                var path = url.substring(5);
                router.post(path, mapping[url]);
            }
            else{
                console.log(`url error: ${url}`);
            }
        }
    }

    !function addController(router){
        for(var file of jsFiles){
            let mapping = require(__dirname + "/controller/" + file);
            addMapping(router, mapping);
        }
    }(router);
}

module.exports = routes;