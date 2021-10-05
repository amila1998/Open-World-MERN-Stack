const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema ({

    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    age:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    licence:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    languages:{
        type:[{type:String}],
        required:true
    },
    guideImg:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    

   
   

},
{
    timestamps: true,
 });

//module.exports = mongoose.model('Guide',guideSchema);
const Guide = mongoose.model('Guide', guideSchema);

module.exports = Guide;
