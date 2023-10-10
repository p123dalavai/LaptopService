exports.getTeamDetails = (req,res) =>{
    return res.status(200).json({
        team: "backend4-laptopTeam",
    memberNames: ["Sanskar Agarwal", "Poorvi Dalwai"],
    });
};
const fs = require("fs");

let data = fs.readFileSync("./assets/data/laptops.json");

const locations = ["US-NC", "IE", "IN"];
const location_laptop_tax = [0.08, 0.23, 0.18]; 

const laptop = JSON.parse(data);

exports.getLaptopDetails = (req,res) => {
    let loc = req.query.location;
   let laptops;

if (locations.includes(loc)) {
    if (locations.indexOf(loc) == 0) {
      laptops = JSON.parse(JSON.stringify(laptop));
      laptops.forEach((e) => {
        e.price = e.price + 0.08 * e.price;
        e.price = e.price.toFixed(3);
      });
    } 

      else if (locations.indexOf(loc) == 1) {
        laptops = JSON.parse(JSON.stringify(laptop));
        laptops.forEach((e) => {
          e.price = e.price + 0.23 * e.price;
          e.price = e.price.toFixed(3);
        });
      } 
      else if (locations.indexOf(loc) == 2) {
        laptops = JSON.parse(JSON.stringify(laptop));
        laptops.forEach((e) => {
          e.price = e.price * 82.2; //Convert to INR
          e.price = e.price + 0.18 * e.price;
          e.price = e.price.toFixed(3);
        });
      }
      res.status(200).json({
        error: false,
        message: "successful retrieval!",
        data: laptops,
      });

}

else {
    res.status(404).json({
      error: true,
      message: "unsuccessful get request!",
      data: null,
    });
  }
};

