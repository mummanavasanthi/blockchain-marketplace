const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Marketplace Backend Running");
});

app.get("/products", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Sample Product",
            price: "1 ETH"
        }
    ]);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});