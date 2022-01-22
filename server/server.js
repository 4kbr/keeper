const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const bodyParser = require("body-parser");
const tableRoute = require("./routes/table");
const cors = require("cors");

dotenv.config();

const app =express();

mongoose
.connect(process.env.DB_CONNECT)
.then(()=>console.log("DB connect"))
.catch((err)=>console.log(err));

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true, parameterLimit: 5000 }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true, parameterLimit: 5000 }));
app.use("/api/auth",authRoute);
app.use("/api/tables",tableRoute);

const PORT = process.env.PORT||5000
app.listen(PORT,()=>console.log("Running in "+PORT))