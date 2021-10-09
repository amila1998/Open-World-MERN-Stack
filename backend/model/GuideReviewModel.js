const mongoose = require('mongoose');

const guidereviewSchema = new mongoose.Schema(
  {
    guideId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Guide',
      required: true,
    },

   user: { type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,},
    comment: { type: String, required: true },
    rating: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('GuideReview', guidereviewSchema);
