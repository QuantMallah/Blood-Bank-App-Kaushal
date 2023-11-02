const express = require("express");
const dotenv = require("dotenv");//
// const dotenv = require('dotenv');
// dotenv.config({ path: './config/config.env' });
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
// 1 test route
// app.use("/api/v1/test", require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));

// // 1 test route
// app.use("/test", require("./routes/testRoutes"));
// app.use("/auth", require("./routes/authRoutes"));
// app.use("/inventory", require("./routes/inventoryRoutes"));
// app.use("/analytics", require("./routes/analyticsRoutes"));
// app.use("/admin", require("./routes/adminRoutes"));

//port
const PORT = process.env.PORT || 6565;

//listen
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT}`
      .bgBlue.white
  );
});