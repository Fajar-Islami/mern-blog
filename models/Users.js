const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: [true, 'Sudah ada'],
      required: [true, 'Harap masukan username'],
    },
    password: {
      type: String,
      required: [true, 'Harap masukan password'],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Users', UserSchema);
