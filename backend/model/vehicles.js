const mongoose = require('mongoose');
const { stringify } = require('querystring');

const vehicleSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    brand:{
        type:String,
        require:true
    },
    price_per_day:{
        type:String,
        require:true
    },
    image1:{
        type:String,
        require:true
    },
    image2:{
        type:String,
        require:true
    },
    image3:{
        type:String,
        require:true
    },
    image4:{
        type:String,
        require:true
    },
    image5:{
        type:String,
        require:true
    },
    year:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    seat_capacity:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    contact_number:{
        type:String,
        require:true
    },
    is_booked:{
        type:String,
        require:true
    },

});

module.exports = mongoose.model('vehicle',vehicleSchema);