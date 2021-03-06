const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    
    roomname: { type: String, required:true  },
    image1: { type: String },
    price: { type: Number,required:true },
    description:{type: String,},
    category:{type: String,},
    rating:{ type: Number},
    numReviews:{ type: Number},
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required:true  },
    avalability:{type: Boolean, default: true}
    
},
{
timestamps: true,
}

);
const hotelSchema = new Schema({
    
            hotelname:{ type: String, required: true},
            image:{ type: String},
            addressline1:{ type:String},
            addressline2:{ type: String},
            city:{ type: String, required: true},
            province:{ type: String, required: true},
            country:{ type: String, required: true},
            rating:{ type: Number},
            numReviews:{ type: Number},
            description:{ type: String, required: true},
            category:{ type: String, required: true},
            rooms: [
                roomSchema
            ],
            hotelserviceProvider:  { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
            isverify:{type: Boolean, default: false},
},
{
    timestamps: true,
}

);


const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;