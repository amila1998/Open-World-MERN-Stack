const express = require('express');
const ReviewData = require('../model/GuideReviewModel');
const multer = require("multer")


const router =express.Router();

router.post('/',async(req, res) =>
{
    let newdata = new ReviewData(req.body);
    await newdata.save();
    return res.json(newdata);
})

router.get('/:guideId',async(req, res) =>
{
    let guideID = req.params.guideId;
    const myReview = ReviewData.find((x) => x.guideId = guideID);
    
    return res.json(myReview);
})

module.exports = router
