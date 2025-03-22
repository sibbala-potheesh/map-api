const express = require("express");
const {
  getDashboardData,
  getMapData,
} = require("../controllers/dataController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/dashboard", verifyToken, getDashboardData);
router.get("/map", verifyToken, getMapData);

module.exports = router;
