import express, { json } from 'express'
import { ConnectDB } from './models/auth.js';
import cors from 'cors';
import router from './routes/auth.js';
const app = express();
const MONGO_UI = "mongodb://127.0.0.1:27017";
const PORT = 4000;

//connect DB
ConnectDB(MONGO_UI);

//middleware
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(json());
app.use(router);


app.listen(PORT,()=>{
       console.log("Server Start");
})
