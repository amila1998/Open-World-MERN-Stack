const mongoose = require('mongoose')

var adventure = mongoose.model('adventure',{
    adventure_name: {type:String},
    image1: {type:String},
    image2: {type:String},
    city: {type:String},
    province: {type:String},
    country: {type:String},
    description: {type:String},
    adventure_type: {type:String},
    price: {type:String},
})

module.exports = { adventure }