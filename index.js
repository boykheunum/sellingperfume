const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const expressHbs = require('express-handlebars');
const { engine } = require('express-handlebars');
app.use('/src/views/static',express.static('./src/views/static'));
app.use('/src/views',express.static('./src/views')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/src/views');


require("./src/routes/User")(app);
require("./src/routes/StoreInfo")(app);
require("./src/routes/Categories")(app);
require("./src/routes/Coupons")(app);
require("./src/routes/Products")(app);
require("./src/routes/Employees")(app);
require("./src/routes/Positons")(app);
require("./src/routes/BillDetails")(app);
require("./src/routes/Bills")(app);

app.get("/", (req, res) => {

    res.json({ message: "Welcome to NewsApp application." });

});

app.listen(4000, () => {

    console.log("Server is running on port 4000.");

});