function getImage(event){
    event.preventDefault();
    if(document.getElementById('name').value!=null){
        $('#output').text("Thanks!")
    }
    else{
        alert("No name error.")
    }
}