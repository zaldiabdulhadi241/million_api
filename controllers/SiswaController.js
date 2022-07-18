const { Op } = require("sequelize");
const Siswa = require("../models/SiswaModel");

const getAllSiswa = async (req, res) => {
  const search = req.query.search || "";
  const limit = parseInt(req.query.limit);
  try {
    const response = await Siswa.findAll({
      where: {
        name: {
          [Op.like]: `%${search}%`,
        },
      },
      limit: limit,
    });
    res.status(200).json({
      status: true,
      message: "Successful Get All Data",
      data: response,
    });
  } catch (err) {
    res.json({
      status: false,
      message: err.message,
    });
  }
};

module.exports = { getAllSiswa };
