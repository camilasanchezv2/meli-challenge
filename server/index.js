const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const itemsRoutes = require("./routes/items");

app.get("/", (req, res) => res.send("App is working"));

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api/items", itemsRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
