const multipart = require('parse-multipart');
var fetch=require('node-fetch');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    
    var boundary = multipart.getBoundary(req.headers['content-type']);
    var body = req.body;

    // parse the body
    var parts = multipart.Parse(body, boundary);

    //module.exports function
    //analyze the image
    var result = await analyzeImage(parts[0].data);

    let emotions = result[0].faceAttributes.emotion;

    let objects = Object.values(emotions);


    const main_emotion = Object.keys(emotions).find(key => emotions[key] === Math.max(...objects));

    let gifurl=await findGifs(main_emotion);




    context.res = {
	    body: gifurl
    };
    console.log(result)
    context.done(); 

    }

    async function analyzeImage(img){
        const subscriptionKey = process.env.SUBSCRIPTIONKEY;
        const uriBase = process.env.ENDPOINT + '/face/v1.0/detect';

        let params = new URLSearchParams({
            'returnFaceId': 'true',
            'returnFaceAttributes': 'emotion'     //FILL IN THIS LINE
        })

            //COMPLETE THE CODE
    let resp = await fetch(uriBase + '?' + params.toString(), {
        method: 'POST',  //WHAT TYPE OF REQUEST?
        body: img,  //WHAT ARE WE SENDING TO THE API?
      
      	//ADD YOUR TWO HEADERS HERE
        headers: {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': subscriptionKey


        }
    })

    let emotionData=await resp.json();
    return emotionData;

        
    }

    async function findGifs(emotion){
        //COMPLETE THE CODE
        const giphykey=process.env.giphykey;
    
        const apiResult = await fetch ("https://api.giphy.com/v1/gifs/translate?api_key="+giphykey+"&s="+emotion);


        const jsonResult = await apiResult.json();//WHAT GOES HERE?.json();

        return jsonResult.data.url;
    }
    

