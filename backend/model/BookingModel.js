const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookedHotelRoomSchema = new Schema({
    
    room:{type: mongoose.Schema.Types.ObjectId, ref: 'Hotel.rooms'},
    starDate:{type: Date, required: true},
   endDate:{type: Date, required: true},
   serviceProviderAcception:{type: Boolean,default:false},
    
 },
 {
 timestamps: true,
 }
 );


const bookedHotelSchema = new Schema({
    
   hotel:{type: mongoose.Schema.Types.ObjectId, ref: 'Hotel'},
   rooms:[ bookedHotelRoomSchema ],
   
   ispaid:{type: Boolean,default:false},
   paymenttype:{type: String},
   price:{type:Number},
   paidAt:{type: Date}
   
    
    
},
{
timestamps: true,
}
);

const BookedSchema = new Schema({
    
    bookedbyuser:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    hotelBooked:[
        bookedHodelSchema
    ],
    totalPrice:{type: Number}
    /**payment:{type: mongoose.Schema.Types.ObjectId, ref: 'Payment'}**/

   
},
{
timestamps: true,
}
);

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;