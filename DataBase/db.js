import mongoose from "mongoose";

export const Connection = async (URL) =>
{

    try{
       await mongoose.connect(URL , {useUnifiedTopology:true, useNewurlParser:true});
       console.log("DataBase Is  connected Successfully")
    }
    catch(error){
        console.log("Error While Connecting to DataBase " , error.message)

    }
}

export default Connection;