function y1k3s() {
   let params = new URLSearchParams({
        'name1': document.getElementById("name1").value,
        'name2': document.getElementById("name2").value,
        'name3': document.getElementById("name3").value,
        'name4': document.getElementById("name4").value,
        })
    

    let resp = fetch("https://hackerr.azurewebsites.net/api/twocatz?" + params.toString(),{
        method: 'GET',
    })

    document.getElementById("image1").src = "data:image/png;base64," + resp.catpic1;
    document.getElementById("image2").src = "data:image/png;base64," + resp.catpic2;
    document.getElementById("image3").src = "data:image/png;base64," + resp.catpic3;
    document.getElementById("image4").src = "data:image/png;base64," + resp.catpic4; 
    }
