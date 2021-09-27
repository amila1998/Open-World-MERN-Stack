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
});*/

roomRouter.route("/displayAllRooms/:hotelId").get(async(req, res)=>{
  let hotelId = req.params.hotelId;
  const hotel= await Hotel.findById(hotelId);
  if (hotel) {
    
   if(hotel.rooms){
    
     res.send(hotel.rooms);
   }else{
    res.send({message: "No Rooms"});
   }
     
    }else{
      res.send({message: "can't find Hotel data"});
    }
    
 });


roomRouter.route("/:hotelid/deleteRoom/:Roomid").delete(async (req, res) => {
   let Roomid = req.params.Roomid;
   let hotelId = req.params.hotelid;
   const hotel= await Hotel.findById(hotelId);
    if (hotel) {
      const room = await hotel.rooms.find((x) => x._id = Roomid);
     if(room){
       const deleteroom = await room.remove();
       hotel.save();
       res.send({message: 'Room Deleted',room:deleteroom});
     }else{
      res.send({message: "can't find Room data"});
     }
       
      }else{
        res.send({message: "can't find Hotel data"});
      }
      
   });


   roomRouter.route("/:hotelid/FindARoom/:Roomid").get(async (req, res) => {
    let Roomid = req.params.Roomid;
    let hotelId = req.params.hotelid;
    const hotel= await Hotel.findById(hotelId);
     if (hotel) {
       const room = await hotel.rooms.find((x) => x._id = Roomid);
      if(room){
        res.send(room );
      }else{
       res.send({message: "can't find Room data"});
      }
        
       }else{
         res.send({message: "can't find Hotel data"});
       }
       
    });

 roomRouter.route("/:hotelId/updateRoom/:roomId").put(async (req, res) => {
      const hotelId = req.params.hotelId;
      const roomId = req.params.roomId;
      const hotel = await Hotel.findById(hotelId);
        if (hotel) {
          const room = await hotel.rooms.find((x) => x._id = roomId);
          if(room){
            room.roomname = req.body.roomname;
            room.price = req.body.price;
            
            const updatedRoom = await room.save();
            hotel.save();
            res.send({ message: 'Room Updated', room: updatedRoom });
          }else{
           res.send({message: "can't find Room data"});
          }
         
        } else {
          res.status(404).send({ message: 'Hotel Not Found' });
        }
      });

 

  



        
module.exports = roomRouter;
