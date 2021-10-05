const mongoose = require('mongoose');

const guidebookingSchema = new mongoose.Schema(
  {
    guideId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Guide',
      required: true,
    },
    user:{ type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true},
    
    startdate: { type: String, required: true },
    enddate: { type: String, required: true },
    status: { type: String, required: true },
    message: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('GuideBooking', guidebookingSchema);
