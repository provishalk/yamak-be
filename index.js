const express = require("express");
var jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.post("/login-email", (req, res) => {
  console.log(req.body);
  const body = { email: "vishal@gmail.com", password: "vishal" };
  const token = jwt.sign(body, "k9e9y");
  res.send({ message: "Logged in successfully", token: token });
});

app.post("/login-otp", (req, res) => {
  console.log(req.body);
  const body = { phone: "968584877", otp: "123456" };
  const token = jwt.sign(body, "k9e9y");
  res.send({ message: "Logged in successfully", token: token });
});

app.post("/generate-otp", (req, res) => {
  console.log(req.body);
  const body = { email: "vishal@gmail.com", mobile: "9658784858" };
  res.send({ message: "Otp Generated successfully", otp: "123456" });
});

app.post("/change-password", (req, res) => {
  res.send({ message: "Password changed successfully" });
});

app.post("/register", (req, res) => {
  res.send({ message: "Registered successfully" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
