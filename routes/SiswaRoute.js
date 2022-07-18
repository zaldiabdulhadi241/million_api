const { getAllSiswa } = require("../controllers/SiswaController");
const router = require("express").Router();

router.route("/users").get(getAllSiswa);

module.exports = router;
