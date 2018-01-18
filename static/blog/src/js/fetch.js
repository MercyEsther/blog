export default async(url="", method="GET", data={}) => {
    
    let header = new Headers({
        "Content-Type": "application/json"
    })
    let options = {};

    if (method == "GET" && data.length != 0){
        url = url + "?";
        let keys = Object.keys(data);
        for(let i in keys){
            url += keys[i] + "=" + data[keys[i]] + "&";
        }
        url = url.substring(0, url.length - 1);
        options = {
            method: method,
            headers: header
        }
    }

    else if (method == "POST"){
        data = JSON.stringify(data);
        options = {
            method: method,
            headers: header,
            body: data
        }
    }

    if (window.fetch){
        const result = await fetch(url, options)
        const response = result.ok ? 
            result.json() :
            result.status;
        return response;
    }
    else{
        console.log("该浏览器不支持fetch");
    }
}