require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const {connection} = require("./Config/db"); // for connection to the mongodb atlas

const {userRouter} = require("./Routes/UserDetails.route");

// Global middleware
app.use(express.json());
app.use(cors());

// Testing Routes
app.get("/", (req, res) =>{
 res.send("<h1>Hello from the other side!</h1>");
});

// All Routes
app.use("/userDetails", userRouter);


// Start Server 
app.listen(PORT, () => {
    connection();
  console.log(`Listening at the http://localhost:${PORT}`);
});
