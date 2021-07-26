function getImage(event){
    event.preventDefault();
    const bunniForm = document.getElementById("myform");
    const name = document.getElementById("name");
    const fileInput = document.getElementById("image");
    const payload = new FormData(bunniForm);
    const file = fileInput.files[0]; // fileInput is the file upload input element
    payload.append("file", file);

    if(document.getElementById('name').value!=null){
        try{
            $('#output').text("Thanks!")

        const response = fetch("https://hackerr.azurewebsites.net/api/bunnimage-upload?", {
            method: 'POST',
            headers:{
                'codename': username
            },
            body: payload
        })
        $('#output').text("Your image has been stored successfully!")
    

        }catch(err){
            $('#output').text(err)
        }
    }
    else{
        alert("No name error.")
    }
   

}
