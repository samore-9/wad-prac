const express = require('express');
const app = express();

// Serve Static Website
app.use(express.static('public'));

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Its working!");
       );

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
