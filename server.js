require("dotenv").config();
const app = require("./src/app");

app.get("/", (req, res) => {
  res.send("Welcome to Veloura!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
