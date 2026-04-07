const express = require("express");
const app = express();

app.use(express.json());

const users = [];
const requests = [];

app.post("/register", (req, res) => {

    users.push(req.body);

    res.json({ success: true });

});

app.post("/rent", (req, res) => {

    requests.push(req.body);

    console.log("Новая заявка:", req.body);

    res.json({ success: true });

});

app.listen(3000, () => console.log("Server started"));