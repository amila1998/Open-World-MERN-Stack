const roomRouter = require("express").Router();
const Hotel = require("../model/HotelModel.js");
/*let Room = require("../model/HotelRoomsModel.js");*/
//insert
roomRouter.route("/addroom/:HID").post(async(req, res)=>{
    
  const hotelId = req.params.HID;
  const hotel = await Hotel.findById(hotelId);
  if (hotel) {
     const room = {
      roomname: req.body.roomname,
      image:req.body.image,
      price:req.body.price,
      rating:req.body.rating,
      numReviews:req.body.numReviews,
      hotel:hotelId
    };
    
    hotel.rooms.push(room);
     const updatedHotel = await hotel.save();
    res.status(201).send({
      message: 'Room Created',
      
    });
  } else {
    res.status(404).send({ message: 'Hotel Not Found' });
  }
});
   /* const   roomname = req.body.roomname;
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
 
  const rooms = await Hotel.rooms.find().then((rooms)=>{
     res.send(rooms)
   }).catch((err)=>{
     console.log(err)
     
   })
  })*/


roomRouter.route("/:hotelid/RoombyId/:Roomid").get(async (req, res) => {
   let Roomid = req.params.Roomid;
   let hotelId = req.params.hotelid;
   const hotel= await Hotel.findById(hotelId);
    if (hotel) {
      const room =await hotel.rooms.find((x) => x._id == Roomid);
      if (room) {
       res.send(room);
      }else{
        res.send({message: "can't find Room data"});
      }
      }
   });

 

  



        
module.exports = roomRouter;
