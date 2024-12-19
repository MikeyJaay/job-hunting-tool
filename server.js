const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5001; // Use any unused port like 5001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

