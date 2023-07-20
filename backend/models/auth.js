import mongoose from "mongoose";

//schema
const authSchema = new mongoose.Schema({
       name:String,
       email:String,
       Password:String
})

//Model
export const authModel = mongoose.model("DataStore",authSchema);

//DB Connection
export const ConnectDB = (MONGO_UI) =>{
       mongoose.connect(MONGO_UI,{
              dbName:"Authentication"
            }).then(()=>{
                   console.log("Database Connected")
            }).catch((err)=>{
                   console.log(err);
            })
}