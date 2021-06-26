const fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    
    var names = ["Shreya","Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"];
    var random_value = Math.floor(names.length * Math.random());
    var name1 = names[random_value];

    var random_value2 = Math.floor(names.length * Math.random());
    var name2 = names[random_value2];

    let resp = await fetch("https://cataas.com/cat/cute/says/Bitcamp", {
        method: 'GET'
    });

    let data = await resp.arrayBuffer()

    let base64data1 = Buffer.from(data).toString('base64')
    // we need to receive it as a buffer since this is an image we are receiving from the API
    // Buffer?? https://developer.mozilla.org/en-US/docs/Web/API/Blob
    
    let resp1 = await fetch("https://cataas.com/cat/cute/says/Bitcamp", {
        method: 'GET'
    });

    let data1 = await resp1.arrayBuffer()

    let base64data2 = Buffer.from(data1).toString('base64')

    context.res = {
        body: {
            cat1: base64data1,
            cat2: base64data2,
            names: [name1, name2]
        }
    };
}
