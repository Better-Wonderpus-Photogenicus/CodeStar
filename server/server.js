const express = require("express");
// const mongoose = require('mongoose');
const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});