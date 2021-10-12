const mongoose = require('mongoose');
const { stringify } = require('querystring');

const vbookingSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    contact_number:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    pickup_location:{
        type:String,
        require:true
    },
    drop_off_location:{
        type:String,
        require:true
    },
    pickup_date:{
        type:String,
        require:true
    },
    return_date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    need_driver:{
        type:String,
        require:true
    },

});

module.exports = mongoose.model('vbooking',vbookingSchema);