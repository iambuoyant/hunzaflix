const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(express.static("public"));
//requiring path and fs modules
const path = require("path");
const fs = require("fs");
//joining path of directory

//////////// Test Start ///////////////////////////
const directoryPath = path.join(__dirname, "public/data/movies");

let moviess = [];
//passsing directoryPath and callback function

// create a GET route
app.get("/getmovies", (req, res) => {
  fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function(file) {
      // Do whatever you want to do with the file
      console.log(file);
      moviess.push({ title: `${file}` });
    });
  });
  let moviesss = JSON.stringify(moviess);
  res.json({ movieslist: `${moviesss}` });
  moviess=[];
});
////////// Test End ////////////////////

//////// Hollywood ////////////////////////////////////////////////
//Thriller
// const directoryPath = path.join(__dirname, "public/data/movies");

// let hollywoodthriller = [];
// //passsing directoryPath and callback function

// // create a GET route
// app.get("/hollywoodthriller", (req, res) => {
//   fs.readdir(directoryPath, function(err, files) {
//     //handling error
//     if (err) {
//       return console.log("Unable to scan directory: " + err);
//     }
//     //listing all files using forEach
//     files.forEach(function(file) {
//       // Do whatever you want to do with the file
//       console.log(file);
//       hollywoodthrillers.push({ title: `${file}` });
//     });
//   });
//   let moviesss = JSON.stringify(hollywoodthriller);
//   res.json({ movieslist: `${hollywoodthrillers}` });
//   hollywoodthriller=[];
// });