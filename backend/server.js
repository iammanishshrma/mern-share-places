const express = require("express");

const app = express();
const PORT = 8800;

app.listen(PORT, () => {
  console.log("Server running at", PORT);
});
