const express = require('express');
const Vbookings = require('../model/vbookings');

const router = express.Router();

//save vehicle bookings
router.post('/vbooking/save',(req,res) => {
    let newVbooking = new Vbookings(req.body);

    newVbooking.save((err) => {
        if(err) {
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"vehicle bookings saved successful"
        });
    });

});

// get vehicle bookings
router.get('/vbookings',(req,res) =>{
    Vbookings.find().exec((err,vbookings) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingVbookings:vbookings
        });
    });
});

//get a specific vehicle booking
router.get("/vbooking/:id",(req,res)=>{
    let vbookingId = req.params.id;
    Vbookings.findById(vbookingId,(err,vbooking)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            vbooking
        });
    });
});



//update vehicle bookings
router.put('/vbooking/update/:id',(req,res)=>{
    Vbookings.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            (err,vbooking)=>{
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

//delete vehicle bookings
router.delete('/vbooking/delete/:id',(req,res) =>{
    Vbookings.findByIdAndRemove(req.params.id).exec((err,deletedVbooking) =>{
        if(err) return res.status(400).json({
                message:"delete unsuccesful",err
        });
        return res.json({
            success:"delete successfully",deletedVbooking
        });
    });
});

module.exports = router;