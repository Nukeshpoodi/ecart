const express = require("express");
const errorhandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorhandler);

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});
