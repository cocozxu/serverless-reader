<<<<<<< HEAD
const querystring = require('querystring');
const fetch = require('node-fetch');

module.exports = async function (context, req) {
    const queryObject = querystring.parse(req.body);

    let resp = await fetch(queryObject.MediaUrl0,{
        method: 'GET',
    })

    let data = await resp.arrayBuffer()
    var result = await analyzeImage(imageData);
    let age = result[0].faceAttributes.age
    let id;
    if (age > 5 && age < 25) {
        id = "GenZ"
    }
    else if (age > 24 && age < 41) {
        id = "GenY"
    }
    else if (age > 40 && age < 57) {
        id = "GenX"
    }
    else if (age > 56 && age < 76) {
        id = "BabyBoomers"
    }
    else{
        id = "Unknown"
    }
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: id
    };
}

async function analyzeImage(img){
    const subscriptionKey = process.env.SUBSCRIPTIONKEY1;
    const uriBase = process.env.ENDPOINT + '/face/v1.0/detect';
    let params = new URLSearchParams({
        'returnFaceId': 'true',
        'returnFaceAttributes': 'age'
    })
    let resp = await fetch(uriBase + '?' + params.toString(), {
        method: 'POST',
        body: img,
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    })
    let emotionData = await resp.json()
    return emotionData;
}

function genDetermine(age){
    let id;
    if (age >= 5 && age <= 25) {
        id = "GenZ"
    }
    else if (age >= 26 && age <= 41) {
        id = "GenY"
    }
    else if (age >= 42 && age <= 57) {
        id = "GenX"
    }
    else if (age >= 58 && age <= 76) {
        id = "BabyBoomers"
    }
    else{
        id = "Unknown"
    }
    return id
=======
const querystring = require('querystring');
const fetch = require('node-fetch');

module.exports = async function (context, req) {
    const queryObject = querystring.parse(req.body);

    let resp = await fetch(queryObject.MediaUrl0,{
        method: 'GET',
    })

    let data = await resp.arrayBuffer()
    var result = await analyzeImage(imageData);
    let age = result[0].faceAttributes.age
    let id;
    if (age >= 5 && age <= 25) {
        id = "GenZ"
    }
    else if (age >= 26 && age <= 41) {
        id = "GenY"
    }
    else if (age >= 42 && age <= 57) {
        id = "GenX"
    }
    else if (age >= 58 && age <= 76) {
        id = "BabyBoomers"
    }
    else{
        id = "Unknown"
    }
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: id
    };
}

async function analyzeImage(img){
    const subscriptionKey = process.env.SUBSCRIPTIONKEY1;
    const uriBase = process.env.ENDPOINT + '/face/v1.0/detect';
    let params = new URLSearchParams({
        'returnFaceId': 'true',
        'returnFaceAttributes': 'age'
    })
    let resp = await fetch(uriBase + '?' + params.toString(), {
        method: 'POST',
        body: img,
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': subscriptionKey
        }
    })
    let emotionData = await resp.json()
    return emotionData;
}

function genDetermine(age){
    let id;
    if (age >= 5 && age <= 25) {
        id = "GenZ"
    }
    else if (age >= 26 && age <= 41) {
        id = "GenY"
    }
    else if (age >= 42 && age <= 57) {
        id = "GenX"
    }
    else if (age >= 58 && age <= 76) {
        id = "BabyBoomers"
    }
    else{
        id = "Unknown"
    }
    return id
>>>>>>> 587c60d68e509a52e2085188bdebdadf3b98272b
}
