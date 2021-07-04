const querystring = require('querystring');
const fetch = require('node-fetch');
const { SSL_OP_SINGLE_DH_USE } = require('constants');

module.exports = async function (context, req) {
    const queryObject = querystring.parse(req.body);
    const songs = {"GenZ":"https://open.spotify.com/track/0SIAFU49FFHwR3QnT5Jx0k?si=1c12067c9f2b4fbf", 
"GenY":"https://open.spotify.com/track/1Je1IMUlBXcx1Fz0WE7oPT?si=a04bbdf6ec4948b9", 
"GenX":"https://open.spotify.com/track/4Zau4QvgyxWiWQ5KQrwL43?si=790d9e3ef2ed408d", 
"BabyBoomers":"https://open.spotify.com/track/4gphxUgq0JSFv2BCLhNDiE?si=1abb329f2dc24f50", 
"Unknown":"https://open.spotify.com/track/5ygDXis42ncn6kYG14lEVG?si=84b49b41d09d4d11"}


    let resp = await fetch(queryObject.MediaUrl0,{
        method: 'GET',
    })

    let data = await resp.arrayBuffer()
    var result = await analyzeImage(data);
    let age = result[0].faceAttributes.age
    let id="";
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
        body: "We guessed you're part of this generation: "+ id + "! Happy listening! "+ songs[id]

    };
}

async function analyzeImage(img){
    const subscriptionKey = process.env.SUBSCRIPTIONKEY;
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
