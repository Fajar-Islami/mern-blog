const mongoose = require('mongoose');

const BlogsSchema = new mongoose.Schema(
  {
    judul: {
      type: String,
      trim: true,
      required: [true, 'Harap masukan judul blog'],
    },
    snippet: {
      type: String,
      required: [true, 'Harap masukan snippet blog'],
    },
    isi: {
      type: String,
      required: [true, 'Harap masukan isi blog'],
    },
    author: {
      type: String,
      required: [true, 'Harap masukan author'],
    },
    email: {
      type: String,
      required: [true, 'Harap masukan email'],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Blogs', BlogsSchema);
