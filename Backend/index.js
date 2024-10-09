import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT=process.env.PORT || 4001;
const URI = process.env.MONGODB_URI;
//connect to mongoDB
try{
   mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
   })
   console.log("connected to mongoDB")
}catch(error){
console.log("error:",error)
}
//defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

//code for deployment
if (process.env.NODE_ENV === "production") {
  
  const dirPath = path.resolve();

  app.use(express.static("./Frontend/dist"));  

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirPath, "./Frontend/dist", "index.html"));  
  });
}


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})