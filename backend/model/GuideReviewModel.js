const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    guideId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'guideregister',
      required: true,
    },

    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('GuideReview', reviewSchema);
