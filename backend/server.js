require("dotenv").config();
const express =require("express");
const cors =require("cors");
const path =require("path");

const app=express();

//Middlewares to hanlde cors
app.use(
    cors({
        origin:"*",
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization"],
    })
);

//Middleware
app.use(express.json());

// Routes


//Server uploads folder
app.use("/uploads",express.static(path.join(__dirname,"uploads"),{}));

//start server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

