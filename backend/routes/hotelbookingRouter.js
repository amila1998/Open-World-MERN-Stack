const HotelBookingrouter = require("express").Router();
let Booking = require("../model/HotelBookingModel.js");
let Hotel = require("../model/HotelModel.js");


const {isAuth, isAdmin , ishotelServiceProvider} =  require("../utils.js");

HotelBookingrouter.route("/addaHotelRoomBooking/:hotelID", isAuth, ).post(async(req, res)=>{
  try {
  const hoteldata = await Hotel.findById(req.params.hotelID);
  console.log(hoteldata);
  if(hoteldata){
    const hotelbook = new Booking({
      hotel:req.body.hotel,
      room:req.body.room,
      startDate:req.body.startDate,
      endDate:req.body.endDate,
      price:req.body.price,
      message:req.body.message,
      userID:req.body.userID,
      hotelOwner:hoteldata.hotelserviceProvider,
            
    });
    const hotelbooked = await hotelbook.save();
    res.send({ message: 'Hotel booking success', hotelbook: hotelbooked });
  }else{
    console.log(err);
  }
  
  } catch (error) {
    console.log(error);
  }
  
 
  
});
HotelBookingrouter.route("/get" ,isAdmin ).get(async(req, res)=>{
  

  try{
    
      const hotelbookedDetails = await Booking.find();
      if(hotelbookedDetails){
        res.send(hotelbookedDetails)

      }else{
        res.send({message:"Bookings"})
      }

  }catch (error) {
    console.log(error)
  }
 
});

HotelBookingrouter.route("/getforHotelSPBooking/:userid" ,ishotelServiceProvider ).get(async(req, res)=>{
  let userId = req.params.userid;

  try{
    
      const hotelbookedDetails = await Booking.find({userID:userId});
      if(hotelbookedDetails){
        res.send(hotelbookedDetails)

      }else{
        res.send({message:"Can not Bookings"})
      }

   

  }catch (error) {
    console.log(error)
  }
 
});

HotelBookingrouter.route("/getforuserBooking/:userid" ,isAuth ).get(async(req, res)=>{
  let userId = req.params.userid;

  try{
    
      const hotelbookedDetails = await Booking.find({userID:userId});
      if(hotelbookedDetails){
        res.send(hotelbookedDetails)

      }else{
        res.send({message:"Can not Bookings"})
      }

   

  }catch (error) {
    console.log(error)
  }
 
});

//const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
HotelBookingrouter.route("/getAllDaysforOneRoom/:roomId/:hotelId").get(async(req, res)=>{
  let Roomid = req.params.roomId;
  let hotelid = req.params.hotelId;
  try {
   
    //start
    
    const hotel= await Hotel.findById(hotelid);
     if (hotel) {
       const room = await hotel.rooms.find((x) => x._id = Roomid);
      if(room){
        const hotelroomBooked = await Booking.find({room:Roomid});
        if(hotelroomBooked){
          const datelist =hotelroomBooked.map(e => getDates (e.startDate, e.endDate))
          function getDates (startDate, endDate) {
            const dates = []
            let currentDate = startDate
            const addDays = function (days) {
              const date = new Date(this.valueOf())
              date.setDate(date.getDate() + days)
              return date
            }
            while (currentDate <= endDate) {
              dates.push(currentDate)
              currentDate = addDays.call(currentDate, 1)
            }
            return dates
          }
          res.send({datelist});
        }else{
          res.send({message: "can't find days"});
        }

        
      }else{
       res.send({message: "can't find Room data"});
      }
        
       }else{
         res.send({message: "can't find Hotel data"});
       }
    //end
   
  } catch (error) {
    console.log(error)
  }
 
  });

module.exports = HotelBookingrouter;