
const multer =   require("multer") ;
const express = require('express');
const { isAdmin,isAuth } = require('../utils.js');

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, 'uploads/');
  },
  filename(req, file, cb) {
    callback(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });
uploadRouter.route("/",isAuth, upload.single('image')).post(async(req, res)=>{

  res.send(`/${req.file.path}`);
});

module.exports = uploadRouter;