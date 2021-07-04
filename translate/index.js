var fetch=require('node-fetch');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var result=await translate(req.query.textToTranslate);
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: result.contents.translated
    };
}

async function translate(text){
    const uriBase = "https://api.funtranslations.com/translate/minion.json";

    let params = new URLSearchParams({
        'text': text
    })

        //COMPLETE THE CODE
    let resp = await fetch(uriBase + '?' + params.toString(), {
    method: 'GET'
})

    let translatedResponse=await resp.json();
    return translatedResponse;

    
}