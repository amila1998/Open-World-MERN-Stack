const HotelSPRouter = require("express").Router();
const bcrypt =require("bcryptjs")
let User = require("../model/userModel.js");

HotelSPRouter.route("/registerSP/:userId" ).put(async(req, res)=>{
    const user = await User.findById(req.params.userId);
    if (user) {
       
      user.ishotelServiceProvider = "true",
      user.hotelserviceProvider.firstname = req.body.firstname || user.hotelserviceProvider.firstname;
      user.hotelserviceProvider.lastname = req.body.lastname || user.hotelserviceProvider.lastname;
      user.hotelserviceProvider.logo = "dfProfilehsp.jpg"
      user.hotelserviceProvider.description = req.body.description || user.hotelserviceProvider.description;
      

      const updatedUser = await user.save();
      res.send(
        "Registration Success"
      );
    }
  }
);


module.exports = HotelSPRouter;