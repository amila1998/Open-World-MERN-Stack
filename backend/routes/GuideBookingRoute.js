const express = require('express');
const BookingData = require('../model/GuideBookingModal');
const GuideData = require('../model/GuideModel');
const User = require('../model/userModel');
const EmailService = require('../services/email.service');

const router = express.Router();
router.get('/getD/:id', async (req, res) => {
  const { id } = req?.params;
  try {
    const details = await BookingData.findById(id);
 
    return res.status(200).json(details);
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server Error');
  }
});
router.post('/', async (req, res) => {
  const { user, startdate,enddate, guideId,message } = req?.body;
  try {
    const newBookingData = new BookingData({ user, startdate,enddate, guideId, status: 'pending',message });
    await newBookingData.save();

    const guide = await GuideData.findById(guideId);
    const userdata = await User.findById(user);
    const guideEmail = guide?.email;

    await EmailService.sendMessage(
      guideEmail,
      `<h1>You Have New Booking Request</h1>
      <h2>Requested User Name: ${userdata?.name}</h2>
      <h2>Requested Start Date: ${newBookingData?.startdate}</h2>
      <h2>Requested End Date: ${newBookingData?.enddate}</h2>
      <br/><a href="http://localhost:3000/guidebookingdetails/${newBookingData?._id}">Click Here to Confirm Booking</a>`,
      'You Have New Booking'
    );

    return res.status(200).json(true);
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server Error');
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req?.params;
  try {
    const booking = await BookingData.findById(id);

    const user = await User.findById(booking.user)
    const details = await BookingData.updateOne({ _id: id }, { ...req.body });
    if (booking?.status !== req?.body?.status) {
      await EmailService.sendMessage(
        user?.email,
        `<h1>You booking status changed to ${booking?.status} - ${req?.body?.status}</h1>
        `,
        'Your Booking Status Changed'
      );
    }
    return res.status(200).json(details);
  } catch (err) {
    console.log(err);
    return res.status(500).json('Internal Server Error');
  }
});

module.exports = router;
