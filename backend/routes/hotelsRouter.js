
const router = require("express").Router();
let Hotel = require("../model/HotelModel.js");
const Room = require("../model/HotelRoomsModel.js");
const { isAdmin , isServiceprovider} =  require("../utils.js");
//insert
router.route("/add",isAdmin,isServiceprovider).post(async(req, res)=>{
  const hotel = new Hotel({
    hotelname: 'sample name ' + Date.now(),
    image: 'defaultHotel.jpg',
    addressline1: 'Address 1',
    addressline2: 'Address 2',
    city: 'city',
    province:'province',
    country:'country',
    category:'category',
    rating: 0,
    numReviews: 0,
    description: 'sample description',
    hotelserviceProvider:req.user._id,
    
  });
  const createdHotel = await hotel.save();
  res.send({ message: 'Hotel Created', hotel: createdHotel });
});

//find all
router.route("/displayAll" ).get(async(req, res)=>{
  //const hotelserviceProvider = req.query.hotelserviceProvider || '';
 // const hotelserviceProviderFilter = hotelserviceProvider ? { hotelserviceProvider } : {};
  const hotels = await Hotel.find().then((hotels)=>{
     res.send(hotels)
   }).catch((err)=>{
     console.log(err)
     
   })
  })

  router.route("/displayAllforHSP/:userID" ).get(async(req, res)=>{
    let userId = req.params.userID;
    //const hotelserviceProvider = req.query.hotelserviceProvider || '';
   // const hotelserviceProviderFilter = hotelserviceProvider ? { hotelserviceProvider } : {};
    const hotels = await Hotel.find({hotelserviceProvider:userId}).then((hotels)=>{
       res.send(hotels)
     }).catch((err)=>{
       console.log(err)
       
     })
    })

//find one
  router.route("/fetechHotelbyId/:Htlid").get(async (req, res) => {
  let hotelId = req.params.Htlid;
  const hotel = await Hotel.findById(hotelId)
    .then((Hotel) => {
      res.send(Hotel);
    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with get hotel", error: err.message});
  })
}) ;  


/***** router.route("/fetechHotelbyId/:Htlid").get(async (req, res) => {
  const hoteldetail = data.Hotel.findByOne((x) => x._id === req.params.Htlid);
  if (hoteldetail) {
    res.send(hoteldetail);
  } else {
    res.status(404).send({ message: 'hotel details Not Found' });
  }
});****/


//update
router.route("/update/:id",isAdmin,isServiceprovider).put(async (req, res) => {
  const hotelId = req.params.id;
  const hotel = await Hotel.findById(hotelId);
    if (hotel) {
      hotel.hotelname = req.body.hotelname;
      hotel.image = req.body.image;
      hotel.addressline1 = req.body.addressline1;
      hotel.addressline2 = req.body.addressline2;
      hotel.city = req.body.city;
      hotel.province = req.body.province;
      hotel.description = req.body.description;
      hotel.category = req.body.category;
      const updatedHotel = await hotel.save();
      res.send({ message: 'Hotel Updated', hotel: updatedHotel });
    } else {
      res.status(404).send({ message: 'Hotel Not Found' });
    }
  });
  
//delete

    
router.route("/delete/:id",isAdmin,isServiceprovider).delete(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  if (hotel) {
    
    const deleteHotel = await hotel.remove();
    res.send({ message: 'Hotel Deleted', hotel: deleteHotel });
  } else {
    res.status(404).send({ message: 'Hotel Not Found' });
  }
});

 


module.exports = router;