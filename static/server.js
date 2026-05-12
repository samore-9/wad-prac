const express = require('express');
const app = express();

// Serve Static Website
app.use(express.static('public'));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
