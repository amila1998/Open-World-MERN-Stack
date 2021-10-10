const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var cartSchema = new Schema({
    type: {type:String},
    NameOnCard: {type:String},
    Bname: {type: String},
    cardNumber: {type: Number},
    CVV: {type: Number},
    Edate: {type:String }, 
    approve:{type:String },
    userId: { type: mongoose.Schema.Types.ObjectID, ref: 'User', required:true },  

})


const cart= mongoose.model("CardDetails",cartSchema);


module.exports = cart;


