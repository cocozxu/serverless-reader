var multipart = require("parse-multipart")
const connectionString = "DefaultEndpointsProtocol=https;AccountName=createmystorageaccoun;AccountKey=Zho2VHb0+qhiL6mA6Rvg0/jWzOWtFT80EW5cfJIMouV5GBAAd0sWxFQhY+rHeYvNeipmTNUaJTjZ5mGfkqcSqg==;EndpointSuffix=core.windows.net";
const { BlobServiceClient } = require("@azure/storage-blob");
module.exports = async function (context, req) {
    var boundary = multipart.getBoundary(req.headers['content-type']);
    var body = req.body;
    var parsedBody = multipart.Parse(body, boundary);
    var the_header_value = req.headers['codename'];

    var responseMessage = ""
    if (body == null) {
    responseMessage = "Sorry! No image attached."
    } else {
    var password = the_header_value// get the header called "codename"
    var filetype = parsedBody[0].type;
    if (filetype == "image/png") {
    ext = "png";
    } else if (filetype == "image/jpeg") {
    ext = "jpeg";
    } else if (filetype == "image/jpg") {
    ext = "jpg"
    } else {
    username = "invalidimage"
    ext = "";
    }
    responseMessage = await uploadFile(parsedBody, ext, password);
    }


    context.res = {
    body: responseMessage
    };

   
}
async function uploadFile(parsedBody, ext,password){
    const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
    const containerName = 'image';
    const containerClient = blobServiceClient.getContainerClient(containerName);    // Get a reference to a container

    const blobName = password + ext;    // Create the container
    const blockBlobClient = containerClient.getBlockBlobClient(blobName); // Get a block blob client

    const uploadBlobResponse = await blockBlobClient.upload(parsedBody[0].data, parsedBody[0].data.length);

}
