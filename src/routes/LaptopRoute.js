const express = require("express")
const router = express.Router();

const {
    getTeamDetails,
    getLaptopDetails
} = require("../restController/LaptopController");

router
    .route("/team")
    .get(getTeamDetails);

router.route("/laptop")
        .get(getLaptopDetails);

 console.log("LaptopRoute loaded");


module.exports = router;