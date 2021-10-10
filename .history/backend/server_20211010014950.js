const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const path = require('path');


dotenv.config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,err => {
    if(err) throw err;
    console.log('connected to MongoDB')
});

const connection = mongoose.connection;
connection.once("open",()=>{
    console.log("mongodb Connection Success!");
})

const UserRouter =require("./routes/userRouter.js");
app.use("/userR",UserRouter);

const uploadRouter =require("./routes/uploadRouter.js");
app.use('/api/uploads', uploadRouter);



const hotelRouter =require("./routes/hotelsRouter.js");
app.use("/hotelR",hotelRouter);

const guideRouter =require("./routes/guideRouter.js");
app.use("/guideR",guideRouter);


const hspRouter =require("./routes/HotelServiceProviderRoute.js");
app.use("/hspR",hspRouter);

const guideReviewRouter =require("./routes/GuideReviewRoute.js");
app.use("/guideRviewR",guideReviewRouter);

const guidebookingRouter =require("./routes/GuideBookingRoute.js");
app.use("/guideBookingR",guidebookingRouter);


const hotelbookingRouter =require("./routes/hotelbookingRouter.js");
app.use("/hotelbookingR",hotelbookingRouter);

//const bookingRouter =require("./routes/bookingRouter.js");
//app.use("/bookingR",bookingRouter);


const roomRouter =require("./routes/roomRouter.js");
app.use("/roomR",roomRouter);


const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const destinationRoutes = require('./routes/destinations');



app.listen(PORT,()=>{
    console.log(`Server at http://localhost:${PORT}`)
})


