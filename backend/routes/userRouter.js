
const UserRouter = require("express").Router();
const bcrypt =require("bcryptjs")
let User = require("../model/userModel.js");
const generateToken  = require("../utils.js");
const isAuth  = require("../utils.js");
//insert
UserRouter.route("/adduser").post(async(req, res)=>{
    
    const   name = req.body.name;
    const   email= req.body.email;
    const   password= req.body.password;
    const   isAdmin= req.body.isAdmin;
  

   const newUser = new User({
    name,
    email,
    password,
    isAdmin,
    
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
        isServiceProvider: user.isServiceProvider,
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
        isServiceProvider:createdUser.isServiceProvider,
        token: generateToken(createdUser),
      });
    } 
  );

  UserRouter.route("/updateUser/:userId" , isAuth ).put(async(req, res)=>{
    const user = await User.findById(req.params.userId);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
  }
);

 


  
  


module.exports = UserRouter;