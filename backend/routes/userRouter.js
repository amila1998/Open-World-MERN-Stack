
const UserRouter = require("express").Router();
const bcrypt =require("bcryptjs")
let User = require("../model/userModel.js");
const generateToken  = require("../utils.js");
const isAuth  = require("../utils.js");
//insert
const multer = require("multer")

const storage=multer.diskStorage({
  destination:(req,file,callback)=>{
      callback(null,"../frontend/public/uploads");
  },
  filename:(req,file,callback)=>{
      callback(null,file.originalname);
  }
})

const upload=multer({storage:storage});



UserRouter.route("/adduser").post(async(req, res)=>{
    
    const   name = req.body.name;
    const   email= req.body.email;
    const   password= req.body.password;
    const   isAdmin= req.body.isAdmin;
    const   ishotelServiceProvider= req.body.ishotelServiceProvider;
    const   isGuide= req.body.isGuide;

  

   const newUser = new User({
    name,
    email,
    password,
    isAdmin,
    ishotelServiceProvider,
    isGuide,
    
   })

   newUser.save().then(()=>{
      res.json("User Added")
   }).catch((err)=>{
      console.log(err);
   })
});

UserRouter.route("/userfindbyid/:id").get(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'User Not Found' });
  }
}
);

UserRouter.route("/signin").post(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        ishotelServiceProvider: user.ishotelServiceProvider,
        isGuide:user.isGuide,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: 'Invalid email or password' });
}
);


  UserRouter.route("/register").post(async (req, res) =>
   {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      const createdUser = await user.save();
      res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        isAdmin: createdUser.isAdmin,
        ishotelServiceProvider:createdUser.ishotelServiceProvider,
        isGuide:createdUser.isGuide,
        token: generateToken(createdUser),
      });
    } 
  );

  UserRouter.route("/updateUser/:userId" , isAuth ).put(async(req, res)=>{
    const user = await User.findById(req.params.userId);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      
      user.ishotelServiceProvider = req.body.ishotelServiceProvider || user.ishotelServiceProvider,
      user.isAdmin = req.body.isAdmin || user.isAdmin,
      user.isGuide = req.body.isGuide || user.isGuide,

      user.guide.firstName =req.body.firstName,
      user.guide.lastName =req.body.lastName,
      user.guide.age =req.body.age,
      user.guide.gender =req.body.gender,
      user.guide.phone =req.body.phone,
      user.guide.email =req.body.email,
      user.guide.licence =req.body.licence,
      user.guide.education =req.body.education, 
      user.guide.languages =req.body.languages,
      user.guide.guideImg =req.file.originalname
      
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        ishotelServiceProvider:updatedUser.ishotelServiceProvider,
        isGuide:updatedUser.isGuide,
        token: generateToken(updatedUser),
      });
    }
  }
);

 


  
  


module.exports = UserRouter;