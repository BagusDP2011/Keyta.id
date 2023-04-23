const express = require("express");
const cors = require("cors");
const app = express();
const userAuthRoute = require("./routes/userAuthRoutes");
const cron = require("node-cron");
const axios = require("axios");
const moment = require("moment-timezone");

const port = 3000;

app.use(cors());
app.use("*", cors());
app.use(express.json());

//API Routes
app.use("/v1/users", userAuthRoute);

//Beyond the world
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("*", (req, res) => {
  res.send("You have travelled beyond our world! Page not found!");
});

//App listen
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

//DB Configuration
const mysql = require("mysql");
const User = require("./models/user");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "keyta",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!");
});

//Scheduled Jobs
cron.schedule(
  "* * * * * *",
  async () => {
    const users = await User.findAll();

    for (const user of users) {
      if (user.isJobScheduled) {
        continue;
      }

      const localTime = moment().tz(user.timezone).format("HH:mm:ss");
      const dateNow = moment().tz(user.timezone).format("MM-DD");
      full_name = user.first_name + " " + user.last_name;
      const dateObj = new Date(user.dob);
      const formattedDate = moment(dateObj).format("MM-DD");

      if (localTime === "13:35:00" && dateNow === formattedDate) {
        const body = `Hey, ${full_name} it’s your birthday`;
        await axios.post("https://eosr4f9uaga8gmo.m.pipedream.net", body);

        user.isJobScheduled = false;
      }

      user.isJobScheduled = true;
    }
  },
  {
    scheduled: true,
  }
);

module.exports = app;