/**const router = require("express").Router();
let Booking = require("../model/BookingModel.js");

const { isAdmin , isServiceprovider} =  require("../utils.js");

router.route("/addaHotelRoomBooking").post(async(req, res)=>{
    
  
    const booking = new Booking({
        bookedbyuser:userId,
        hotelBooked:hotelbooking,
        totalPrice:req.body.totalPrice
        
        
      
    });
   
    const hotelbooking = {
        hotel: req.body.hotelId,
        rooms:roombooking,
        ispaid:req.body.ispaid,
        paymenttype:req.body.paymenttype,
        paidAt:req.body.paidAt,
        price:req.body.price
        

      };
    const roombooking = {
        room: req.roomId,
        starDate:req.body.starDate,
        endDate:req.body.endDate,
        
      };
    
    
      const createdBooking = await booking.save();
    

    res.send({ message: 'Booking Request Success!', booking: createdBooking });
  });**/