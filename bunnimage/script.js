function getImage(event){
    event.preventDefault()

    const myform = document.getElementById("myform");
    let nameInput = document.getElementById("name")
    let fileInput = document.getElementById("image")
    const file = fileInput.files[0]; // fileInput is the file upload input element
    // get image uploaded, save in payload
    var payload = new FormData(myform);
    console.log(payload)
    payload.append("file", file);
    $('#output').text("Thanks!")

    console.log(payload)
    if (document.getElementById("name").value != ''){
        try{
            let url = "https://hackerr.azurewebsites.net/api/bunnimage-upload"
             console.log("Image was uploaded, making POST req to azure func");
            // create request to azure function!
            const resp = fetch(url, {
                method: 'POST',
                headers: {
                    'codename': nameInput.value // was username
                },
                body: payload
                })
            $('#output').text("Your image has been stored successfully!")
        } catch (err){
            $('#output').text(err)
        }
    }
    else{
        alert("No name error.")
    }
}
