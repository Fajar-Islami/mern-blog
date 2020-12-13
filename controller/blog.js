const Blogs = require('../models/Blogs');

// @desc    Get Blogs
// @route   GET /api/v1/blogs
// @route   GET /api/v1/blogs?page=2&perPage=10
// @access  Public
exports.getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blogs.find();
    return res.status(200).json({
      message: 'Data blog post berhasil dipanggil',
      data: blogs,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Data blog post gagal dipanggil',
      error: 'Server error',
    });
  }
};
// @desc    Get Blogs
// @route   GET /api/v1/blogs
// @route   GET /api/v1/blogs?page=2&perPage=10
// @access  Public
exports.getAllBlogsPagination = async (req, res, next) => {
  try {
    // Dengan Pagination
    const currentPage = req.query.page || 1; // memanggil query page defaultnya 1
    const perPage = req.query.perPage || 5; // memanggil query perPage defaultnya 5
    let totalItems; // Total data jumlahnya 0 diubah dibawah

    const blogs = await Blogs.find()
      .countDocuments()
      .then((count) => {
        totalItems = count;
        return (
          Blogs.find()
            .sort({ createdAt: -1 })
            // skip() == jumlah data yang dilewati
            .skip((parseInt(currentPage) - 1) * parseInt(perPage))
            // limit() == jumlah data yang ditampilkan
            .limit(parseInt(perPage))
        );
      });
    return res.status(200).json({
      message: 'Data blog post berhasil dipanggil',
      data: blogs,
      total_Data: totalItems, // Informasi total data
      per_Page: parseInt(perPage), // Informasi data perpage
      current_Page: parseInt(currentPage), // Informasi page keberapa
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Data blog post gagal dipanggil',
      error: 'Server error',
    });
  }
};

// @desc    Get blogs
// @route   GET /api/v1/blogs/:id
// @access  Public
exports.detailBlog = async (req, res, next) => {
  try {
    const blog = await Blogs.findById(req.params.id); // Memastikan data ada

    // Kalo data tidak ada
    if (!blog) {
      return res.status(404).json({
        succsess: false,
        error: 'Data tidak ditemukan',
      });
    }

    return res.status(200).json({
      succsess: true,
      message: 'Berhasil panggil detail blog',
      data: blog,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Gagal mencari blog',
      error: 'Server error',
    });
  }
};

// @desc    Post add blog
// @route   POST /api/v1/blogs
// @access  Public
exports.addBlog = async (req, res, next) => {
  try {
    // console.log(req.body);
    req.body.author = 'Fajar';
    req.body.email = 'fajar@mail.com';
    const { judul, snippet, isi, author, email } = req.body;

    const blog = await Blogs.create(req.body);

    return res.status(201).json({
      message: 'Data blog post berhasil ditambah',
      data: blog,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        message: 'Ada kesalahan!',
        error: messages,
      });
    } else {
      return res.status(500).json({
        message: 'Gagal tambah blog',
        error: 'Server error',
      });
    }
  }
};

// @desc    Update blogs
// @route   POST /api/v1/blogs/:id
// @access  Public
exports.updateBlog = async (req, res, next) => {
  try {
    const blogf = await Blogs.findById(req.params.id); // Memastikan data ada

    // Kalo data tidak ada
    if (!blogf) {
      return res.status(404).json({
        succsess: false,
        error: 'Data tidak ditemukan',
      });
    }
    req.body.judul = blogf.judul;
    req.body.snippet = blogf.snippet;
    req.body.isi = blogf.isi;
    req.body.author = 'fajar';
    req.body.email = 'fajar@mail.com';
    const { judul, snippet, isi, author, email } = req.body;
    console.log(req.body);

    // Kalo data ada
    const blog = await Blogs.updateOne(req.body);
    const blogU = await Blogs.findById(req.params.id);
    return res.status(201).json({
      message: 'Data blog post berhasil diupdate',
      data: blogU,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Gagal update blog',
      error: 'Server error',
      err: err,
    });
  }
};

// @desc    Delete blogs
// @route   DELETE /api/v1/blogs/:id
// @access  Public
exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blogs.findById(req.params.id); // Memastikan data ada

    // Kalo data tidak ada
    if (!blog) {
      return res.status(404).json({
        succsess: false,
        error: 'Data tidak ditemukan',
      });
    }

    // Kalo data ada
    await blog.remove();

    return res.status(200).json({
      succsess: true,
      message: 'Berhasil hapus blog',
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Gagal hapus blog',
      error: 'Server error',
    });
  }
};
