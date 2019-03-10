function getJSON(url) {
    var promise = new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.open("GET", url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.responseType = "json";
        xhr.send();
    });

    return promise;
}

var url = "";

getJSON(url).then(function(res) {
    console.log(res);
}).catch(function(error) {
    console.error("Error Occur", error);
});