const mongoose = require('mongoose');
const Schema = mongoose.Schema;
    const userSchema = new Schema(
        {
          name: { type: String, required: true },
          email: { type: String, required: true, unique: true },
          password: { type: String, required: true },
          isAdmin: { type: Boolean, default: false, required: true },
          ishotelServiceProvider: { type: Boolean, default: false, required: true },
          hotelserviceProvider: {
            name: String,
            logo: String,
            description: { type: String,},
            rating: { type: Number, default: 0, required: true },
            numReviews: { type: Number, default: 0, required: true },
          },
          isGuide: { type: Boolean, default: false, required: true },
          guide:{
            firstName:{
              type:String,
              
          },
      
          lastName:{
              type:String,
             
          },
      
          age:{
              type:String,
              
          },
      
          phone:{
              type:String,
              
          },
          email:{
              type:String,
              
          },
          gender:{
              type:String,
              
          },
          licence:{
              type:String,
              
          },
          education:{
              type:String,
             
          },
          languages:{
              type:[{type:String}],
             
          },
          guideImg:{
              type:String,
           
          },
          }

         
        },
       {
        timestamps: true,
       }
      );
      const User = mongoose.model('User', userSchema);

      module.exports = User;
