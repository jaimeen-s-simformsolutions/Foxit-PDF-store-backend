// const express = require('express');
// const multer = require('multer');
// const fs = require('fs');

// const app = express();
// const upload = multer({ dest: 'uploads/' });

// app.post('/upload-pdf', upload.single('pdfFile'), (req, res) => {
//   fs.rename(req.file.path, 'uploads/' + req.file.originalname, (err) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.send('File uploaded successfully');
//   });
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });


// const express = require("express");
// const multer = require("multer");
// const path = require("path");

// const app = express();
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage: storage });

// app.post("/upload", upload.single("pdfFile"), (req, res) => {
//   const file = req.file;
//   if (!file) {
//     const error = new Error("Please upload a file");
//     error.httpStatusCode = 400;
//     return next(error);
//   }
//   res.send(file);
// });

// app.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });



const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('pdfFile'), (req, res, next) => {
    console.log({req});
  const file = req.file;
  if (!file) {
    const error = new Error('Please upload a file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

app.listen(8000, () => {
  console.log('Server is running on port 3000');
});
