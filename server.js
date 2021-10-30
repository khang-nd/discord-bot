const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
require("./src/app");

app.all("/", (req, res) => {
  res.send("Discord Bot is running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
