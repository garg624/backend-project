import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadOnCloudinary(filepath){
    try {
        if(!filepath)return null ;
        // below is the actual working
        const response=await cloudinary.uploader.upload(filepath,{resource_type:"auto"});
        console.log("File successfully uploaded",response)
        return response.url;
    } catch (error) {
        // it will remove the file from the temporary folder.
        fs.unlinkSync(filepath);
        return null;
    }
}

export {uploadOnCloudinary};