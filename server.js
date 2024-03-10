require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app  =  express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware")

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
  };
app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);


app.use(errorMiddleware);


// app.get("/",(req,res) => {

//     res.status(200).send("puneet dubey is here");
// });

// app.get("/register",(req,res) => {

//     res.status(200).send("registration page");
// });





const PORT = 5000;

connectDb().then(() => { 
app.listen(PORT, () => {
    console.log(`server is running at the port: ${PORT}`);

});
});