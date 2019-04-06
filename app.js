const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/Roles");
mongoose.connect(keys.mongoURI);


const app = express();
app.use(bodyParser.json());
require('./routes/authorized')(app);
require('./routes/register')(app);
require('./routes/unregister')(app);
require('./routes/flush')(app);
app.listen(3000, () => {
    console.log("good to go!!!");
});
