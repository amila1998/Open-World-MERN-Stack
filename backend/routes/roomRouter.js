const roomRouter = require("express").Router();
let Room = require("../model/HotelRoomsModel.js");
//insert
roomRouter.route("/addroom").post(async(req, res)=>{
    const   roomname = req.body.roomname;
    const   image= req.body.image;
    const   price= req.body.price;
    const   rating= req.body.rating;
    const   numReviews= req.body.numReviews;
    
    const   hotel= req.body.hotel;
   

   const newRoom = new Room({
    roomname,
    image,
    price,
    rating,
    numReviews,
    hotel
    
   })

   newRoom.save().then(()=>{
      res.json("Room Added")
   }).catch((err)=>{
      console.log(err);
   })
});

roomRouter.route("/displayAllRooms").get(async(req, res)=>{
   Room.find().then((rooms)=>{
     res.json(rooms)
   }).catch((err)=>{
     console.log(err)
     
   })
})

roomRouter.route("/RoombyId/:Roomid").get(async (req, res) => {
   let Roomid = req.params.Roomid;
   const room = await Room.findById(Roomid)
     .then((room) => {
       res.send(room);
     }).catch((err) => {
       console.log(err.message);
       res.status(500).send({status: "Error with get Room", error: err.message});
   })
 })   
  



        
module.exports = roomRouter;
