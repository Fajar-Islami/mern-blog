const Users = require('../models/Users');
const bcrypt = require('bcrypt');

// @desc    Get Regis
// @route   GET /api/v1/blogs/regis
// @access  Public
exports.getUser = async (req, res, next) => {
  try {
    const users = await Users.find();
    return res.json({
      message: users,
      status: 'sukses',
      jumlah: users.length,
    });
  } catch (err) {
    return res.status(500).json({
      message: false,
      error: 'Server error',
    });
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt();
    req.body.password = await bcrypt.hash(password, salt);

    const uniq = await Users.findOne({ username });
    if (uniq) {
      return res.status(400).json({ message: 'Username ini sudah ada' });
    }

    const user = await Users.create(req.body);
    console.log(req.body);

    return res.status(201).json({
      message: 'Berhasil daftar akun',
      data: user,
    });
  } catch (err) {
    console.log(req.body);
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        message: 'Ada kesalahan!',
        error: messages,
      });
    } else {
      return res.status(500).json({
        message: 'Gagal menambah user',
        error: 'Server error',
        err: err,
      });
    }
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const uniq = await Users.findOne({ username });
    if (!uniq) {
      return res.status(404).json({ message: 'Username ini tidak ada' });
    }

    const comparePassword = await bcrypt.compare(password, uniq.password);
    if (!comparePassword) {
      return res.status(404).json({ message: 'Password salah' });
    }

    return res.status(200).json({ message: 'Berhasil Login' });
  } catch (err) {
    return res.status(500).json({
      message: 'Gagal menambah user',
      error: 'Server error',
      err: err,
    });
  }
};
