const mongoose = require('mongoose');

const MONGO_SCHEMAS = {
  moviesSchema: new mongoose.Schema({
    title: String,
    genre: String,
    director: String,
    releaseYear: Number,
    duration: Number,
    ratings: [
      {
        reviewer: String,
        score: Number,
      },
    ],
    cast: [String],
    boxOffice: {
      budget: Number,
      revenue: Number,
    },
    country: String,
    tags: [String],
  }),
};

module.exports = MONGO_SCHEMAS;
