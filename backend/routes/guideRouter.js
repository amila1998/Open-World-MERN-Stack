const express = require('express');
const Guide = require('../model/GuideModel');
const User = require('../model/userModel')
const ReviewData = require('../model/GuideReviewModel')
const multer = require("multer");
const { compareSync, hashSync } = require('bcrypt');



const router =express.Router();

const DateNow = Date.now();

 
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../frontend/public/uploads");
    },
    filename:(req,file,callback)=>{

        callback(null,DateNow+file.originalname);

    }
})
 
const upload=multer({storage:storage});




  router.post('/add/:userid' , upload.single("guideImg") ,async(req,res)=>{
    try {
     const user = await User.findById(req.params.userid);
     if(user){
        
        

            const guideData=new Guide({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                age:req.body.age,
                gender:req.body.gender,
                phone:req.body.phone,
                email:req.body.email,
                licence:req.body.licence,
                education:req.body.education, 
                languages:req.body.languages,

                guideImg:DateNow+req.file.originalname,

               //guideImg:req.body.guideImg,
                //password: hashSync(req.body.password, 8),
            });
           const createdGuide= await guideData
            .save();
            user.isGuide="true",
            user.guide=createdGuide._id
            await user.save();
             res.json(guideData)
           
        
          
         } else {
           res.status(404).send({ message: 'user Not Found' });
         }
      
     
    } catch (error) {
     console.log(error)
     res.status(400).json(`Error:${error}`)
    }
    
 }); 



/*
 
router.post('/add', upload.single("guideImg") ,async(req,res)=>{
   try {
    const guideData=new Guide({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        gender:req.body.gender,
        phone:req.body.phone,
        email:req.body.email,
        licence:req.body.licence,
        education:req.body.education, 
        languages:req.body.languages,
        guideImg:req.file.originalname,
        password: hashSync(req.body.password, 8),
    });
   await guideData
    .save();
    res.json(guideData)
   } catch (error) {
    console.log(err)
    res.status(400).json(`Error:${err}`)
   }
   
});


 
*/





router.get('/',async(req,res)=>{
        try{
        const data = await Guide.find()
        const dataMapping = await data?.map(async da=>{

        const reviews = await ReviewData.find({guideId: da._id})
       
            return {
                "languages":da.languages,
                "id":da.id,
                "firstName":da.firstName,
                "lastName":da.lastName,
                "age":da.age,
                "gender":da.gender,
                "phone":da.phone,
                "licence":da.licence,
                "education":da.education,
                "guideImg":da.guideImg,
                reviewsAvg:reviews.length === 0 ? 0 : reviews.map(re => re.rating).reduce((a,b)=>(a+ b))/reviews.length
            }

        })

        const promiseMappedData = await Promise.all(dataMapping)
            return res.json({
                success:true,
                     existingGuide: promiseMappedData
            })

        }catch (err){
            
            return res.status(400).json({
                error:err
            });
        }
       
    });

router.get('/:id',(req,res)=>{
    let guideId=req.params.id;
    Guide.findById(guideId , (err,guidedata)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
       
        return res.status(200).json({
            success:true,
            guide:guidedata
        });
    });
});



router.route("/view/:email").get((req,res)=>{

    const email = req.params.email;
    

    Guide.findOne({email:email}).then((guide)=>{
        
       if (guide == null){

        success:false;

       }else{
           success:true;
          
          res.json({
            id:guide._id,

        firstName:guide.firstName,
        lastName:guide.lastName,
        age:guide.age,
        gender:guide.gender,
        phone:guide.phone,
        email:guide.email,
        licence:guide.licence,
        education:guide.education, 
        languages:guide.languages,
        guideImg:guide.guideImg,
            
           
        });
        } 

    }).catch((err)=>{
       
        res.json("You are not registered!");
    })
})



router.put('/update/:id',(req,res)=>{
    Guide.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err)=>{
            if (err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Guide Data Update Successfull"
            });
        }
    );
});

router.delete('/delete/:id',(req,res)=>{
    Guide.findByIdAndRemove(req.params.id).exec((err,deleteguide)=>{
        if(err) return res.status(400).json({
          message:"Guide Data Delete unsuccesful",err
        });
        return res.json({
            message:"Guide data Delete succesful",deleteguide
        });
    });
});



module.exports=router;




