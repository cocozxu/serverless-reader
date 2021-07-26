async function getImage(event) {

      event.preventDefault();
      var myform = document.getElementById('myform');
      //get image and filename uploaded by user via the form
      let nameInput = document.getElementById('username');
      let fileInput = document.getElementById('image');
      let file = fileInput.files[0]; //get image data
    
      var payload = new FormData(myform);
      console.log(payload);
      payload.append('file', file);
      $('#output').text('Thanks!');
    
      if (document.getElementById('username').value != '') {
        try {
          let url = 'https://hackerr.azurewebsites.net/api/bunnimage-upload';
          console.log('Image was uploaded, making POST request to Azure function');
          // create request to Azure functions
          const resp = await fetch(url, {
            method: 'POST',
            headers: {
              "codename": nameInput.value
            },
            body: payload,
          });
    
          $('#output').text('Your image has been stored successfully!');
        } catch (err) {
          $('#output').text(err);
        }
      } else {
        alert('No name error.');
      }
    }
    
    async function downloadImage () {
      let username = document.getElementById(('downloadusername').value)
    
      if ( username != '') {
    
       try {
        let url = "https://hackerr.azurewebsites.net/api/bunnimage-download"
    
        console.log("Documented file name; making GET request to download image"); 
      
        const resp = await fetch (url, {
          method: 'GET',
          header: {
            "username": username
          }
        })
       
          let data = await resp.json ()
          let imageUrl = data.downloadUri
      
          console.log("Made GET request successfully");
      
          window.open(imageUrl, "_self")
      
       } catch(err) {
          alert(err)
       }
    
      
      } else {
        alert('No name error.');
      }
    }
=======
      event.preventDefault();
      var myform = document.getElementById('myform');
      //get image and filename uploaded by user via the form
      let nameInput = document.getElementById('username');
      let fileInput = document.getElementById('image');
      let file = fileInput.files[0]; //get image data
    
      var payload = new FormData(myform);
      console.log(payload);
      payload.append('file', file);
      $('#output').text('Thanks!');
    
      if (document.getElementById('username').value != '') {
        try {
          let url = 'https://hackerr.azurewebsites.net/api/bunnimage-upload';
          console.log('Image was uploaded, making POST request to Azure function');
          // create request to Azure functions
          const resp = await fetch(url, {
            method: 'POST',
            headers: {
              "codename": nameInput.value
            },
            body: payload,
          });
    
          $('#output').text('Your image has been stored successfully!');
        } catch (err) {
          $('#output').text(err);
        }
      } else {
        alert('No name error.');
      }
    }
    
    async function downloadImage () {
      let username = document.getElementById(('downloadusername').value)
    
      if ( username != '') {
    
       try {
        let url = "https://hackerr.azurewebsites.net/api/bunnimage-download"
    
        console.log("Documented file name; making GET request to download image"); 
      
        const resp = await fetch (url, {
          method: 'GET',
          header: {
            "username": username
          }
        })
       
          let data = await resp.json ()
          let imageUrl = data.downloadUri
      
          console.log("Made GET request successfully");
      
          window.open(imageUrl, "_self")
      
       } catch(err) {
          alert(err)
       }
    
      
      } else {
        alert('No name error.');
      }
    }
