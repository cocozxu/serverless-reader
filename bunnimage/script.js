function getImage(event){
    event.preventDefault();
    if(document.getElementById("username").value!=null){
        $('#output').text("Thanks")
    }
    else{
        alert("No name")
    }
}
