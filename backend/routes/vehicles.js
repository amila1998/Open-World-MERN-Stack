const express = require('express');
const Vehicles = require('../model/vehicles');
var multer = require('multer')
var uniqid = require('uniqid')

const router = express.Router();

//save vehicles
router.post('/vehicle/save',(req,res) => {
    let newVehicle = new Vehicles(req.body);

    newVehicle.save((err) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"vehicles saved successful"
        });
    });

});

// get vehicles
router.get('/vehicles',(req,res) =>{
    Vehicles.find().exec((err,vehicles) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingVehicles:vehicles
        });
    });
});

//get a specific vehicle
router.get("/vehicle/:id",(req,res)=>{
    let vehicleId = req.params.id;
    Vehicles.findById(vehicleId,(err,vehicle)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            vehicle
        });
    });
});



//update vehicles
router.put('/vehicle/update/:id',(req,res)=>{
    Vehicles.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            (err,vehicle)=>{
                if(err){
                    return res.status(400).json({
                        error:err
                    });
                }
                return res.status(200).json({
                    success:"updated successfully"
                });
            }
    );
});

//delete vehicle
router.delete('/vehicle/delete/:id',(req,res) =>{
    Vehicles.findByIdAndRemove(req.params.id).exec((err,deletedVehicle) =>{
        if(err) return res.status(400).json({
                message:"delete unsuccesful",err
        });
        return res.json({
            success:"delete successfully",deletedVehicle
        });
    });
});


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'RV_image')
  },
  filename: function (req, file, cb) {
    cb(null, uniqid() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')

router.post('/vehicle/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

})

module.exports = router