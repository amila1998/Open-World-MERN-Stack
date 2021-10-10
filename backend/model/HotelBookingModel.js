const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const bookedHotelRoomSchema = new Schema({
    
   hotel:{type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
   room:{type: mongoose.Schema.Types.ObjectId, ref: 'Hotel.rooms'},
   startDate:{type: Date, required: true},
   endDate:{type: Date, required: true},
   serviceProviderAcception:{type: Boolean,default:false},
   ispaid:{type: Boolean,default:false},
   paymenttype:{type: String},
   price:{type:Number},
   paidAt:{type: Date},
   paidprice:{type:Number},
   message:{type: String},
   userID:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
   hotelOwner:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
   
    
    
},
{
timestamps: true,
}
);



const HotelBooking = mongoose.model('HotelRoomBooking', bookedHotelRoomSchema);

module.exports = HotelBooking;
