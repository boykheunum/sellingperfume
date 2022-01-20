const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



require("./src/routes/User")(app);
require("./src/routes/StoreInfo")(app);
require("./src/routes/Categories")(app);

app.get("/", (req, res) => {

    res.json({ message: "Welcome to NewsApp application." });

});

app.listen(4000, () => {

    console.log("Server is running on port 3000.");

});