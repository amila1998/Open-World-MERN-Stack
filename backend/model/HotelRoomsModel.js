/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const roomSchema = new Schema({

            roomname: { type: String, required:true  },
            image: { type: String },
            price: { type: Number,required:true },
            rating:{ type: Number, required: true},
            numReviews:{ type: Number, required: true},
            hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required:true  },
            
},
{
    timestamps: true,
}

);
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;*/