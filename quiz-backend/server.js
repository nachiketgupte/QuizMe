const express = require('express');
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    return res.json({message: "Hey! I am in nodejs container."});
})

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));