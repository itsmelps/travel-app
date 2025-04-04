const express = require("express");
const router = express.Router();
const communityController = require("../controllers/communityController");

// Define community routes
router.post("/register", communityController.registerCommunity);
router.post("/login", (req, res, next) => {
   
    next();
  }, communityController.loginCommunity);
  
router.get("/", communityController.getAllCommunities);
router.get("/:id", communityController.getCommunityById);
router.put("/:id", communityController.updateCommunity);
router.delete("/:id", communityController.deleteCommunity);

module.exports = router;
