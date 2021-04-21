const express = require("express");
const app = express();
const cors = require('cors');
    
require("./server/config/product.config");
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
    
const AllMyProductRoutes = require("./server/routes/product.route");
AllMyProductRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));