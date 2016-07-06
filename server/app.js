const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const passport = require('passport');
const session = require("express-session");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

mongoose.connect('mongodb://localhost:pins/pins');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: require("./secret").Session}));

require("./config/passport")(app);
require("./routes/auth")(app);
require("./routes/user")(app);
require("./routes/pin")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log('Server listening on: ', PORT);