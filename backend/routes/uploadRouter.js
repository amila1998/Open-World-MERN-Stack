
const multer =   require("multer") ;
const express = require('express');
const { isAdmin } = require('../utils.js');

const uploadRouter = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });
uploadRouter.route("/", isAdmin, upload.single('image')).post((req, res)=>{
  res.send(`/${req.file.path}`);
});

module.exports = uploadRouter;