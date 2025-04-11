const fs = require("fs");

function createProduct(req, res) {
  const { item } = req;
  fs.writeFile("items.txt", item, (err) => {
    if (err) {
      console.log("Error Occured");
    } else {
      console.log("Creating Product Successfully");
    }
  });
  res.send(`${item} Created!`);
}

function getProductData(req, res) {
  const { item } = req;
  fs.readFile("items.txt", item, (err) => {
    if (err) {
      console.log("Error Occured");
    } else {
      console.log("Creating Product Successfully");
    }
  });
  res.send(`${item} Retrieved!`);
}

function updateProductData(req, res) {
  const { item } = req;
  fs.appendFile("items.txt", item, (err) => {
    if (err) {
      console.log("Error Occured");
    } else {
      console.log("Creating Product Successfully");
    }
  });
  res.send(`${item} Updated!`);
}

function deleteProduct(req, res) {
  const { item } = req;
  fs.writeFile("items.txt", "", (err) => {
    if (err) {
      console.log("Error Occured");
    } else {
      console.log("Creating Product Successfully");
    }
  });
  res.send(`${item} Deleted!`);
}

module.exports = {
  createProduct,
  getProductData,
  updateProductData,
  deleteProduct,
};
