const mongoose = require('mongoose');
const { stringify } = require('querystring');

const destinationSchema = new mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    description1:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    url1:{
        type:String,
        require:true
    },
    amenities:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true
    },
    image1:{
        type:String,
        require:true
    },
    

});

module.exports = mongoose.model("Destinations",destinationSchema);