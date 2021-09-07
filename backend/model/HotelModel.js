const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hotelSchema = new Schema({
    
            hotelname:{ type: String, required: true},
            image:{ type: String},
            addressline1:{ type:String},
            addressline2:{ type: String},
            city:{ type: String, required: true},
            province:{ type: String, required: true},
            country:{ type: String, required: true},
            rating:{ type: Number, required: true},
            numReviews:{ type: Number, required: true},
            description:{ type: String, required: true},
            category:{ type: String, required: true},
},
{
    timestamps: true,
}

);
const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;