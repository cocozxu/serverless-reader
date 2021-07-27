const fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    
    var names = ["Shreya","Emily", "Fifi", "Beau", "Evelyn", "Julia", "Daniel", "Fardeen"];
    var random_value = Math.floor(names.length * Math.random());
    var name1 = req.query.name1;
    var name2 = req.query.name2;
    var name3 = req.query.name3;
    var name4 = req.query.name4;

    async function getCat(name){
        let endpoint="https://cataas.com/cat/cute/says/"+name
        let resp1 = await fetch(endpoint, {
        method: 'GET'
    });

    let data1 = await resp1.arrayBuffer()

    let base64data2 = Buffer.from(data1).toString('base64')
    return base64data2;

    }
    

   let cat1=await getCat(name1)
   let cat2=await getCat(name2)
   let cat3=await getCat(name3)
   let cat4=await getCat(name4)

    
    context.res = {
        body: {
            cat1: cat1,
            cat2: cat2,
            cat3: cat3,
            cat4: cat4
        }
    };
}

