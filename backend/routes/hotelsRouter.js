
const router = require("express").Router();
let Hotel = require("../model/HotelModel.js");
//insert
router.route("/add").post(async(req, res)=>{
    const   hotelname = req.body.hotelname;
    const   image= req.body.image;
    const   addressline1= req.body.addressline1;
    const   addressline2= req.body.addressline2;
    const   city= req.body.city;
    const   province= req.body.province;
    const   country= req.body.country;
    const   rating= Number(req.body.rating);
    const   numReviews= Number(req.body.numReviews);
    const  description= req.body.description;
    const  category= req.body.category;

   const newHotel = new Hotel({
    hotelname,
    image,
    addressline1,
    addressline2,
    city,
    province,
    country,
    rating,
    numReviews,
    description,
    category
   })

   newHotel.save().then(()=>{
      res.json("Hotel Added")
   }).catch((err)=>{
      console.log(err);
   })
})
//find all
router.route("/displayAll").get(async(req, res)=>{
    Hotel.find().then((hotels)=>{
      res.json(hotels)
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
})   
/***** router.route("/fetechHotelbyId/:Htlid").get(async (req, res) => {
  const hoteldetail = data.Hotel.findByOne((x) => x._id === req.params.Htlid);
  if (hoteldetail) {
    res.send(hoteldetail);
  } else {
    res.status(404).send({ message: 'hotel details Not Found' });
  }
});****/


//update
router.route("/update/:id").put(async (req, res) => {
  let hotelId = req.params.id;
  const {hotelname,
    image,
    addressline1,
    addressline2,
    city,
    province,
    country,
    rating,
    numReviews,
    description,
    category} = req.body;

  const updateHotel = {
        hotelname,
        image,
        addressline1,
        addressline2,
        city,
        province,
        country,
        rating,
        numReviews,
        description,
        category
  }

  const update = await Hotel.findByIdAndUpdate(hotelId, updateHotel)
  .then(() => {
    res.status(200).send({status: "hotel updated"})
  }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
  })
})
//delete
router.route("/delete/:id").delete(async (req, res) => {
  let hotelId = req.params.id;

  await Hotel.findByIdAndDelete(hotelId)
    .then(() => {
      res.status(200).send({status: "hotel deleted"});
    }).catch((errr) => {
      console.log(errr.message);
      res.status(500).send({status: "Error with delete hotel", error: err.message});
    })
})


module.exports = router;