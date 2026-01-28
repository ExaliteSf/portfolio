const express = require('express');
const app = express();

// Sert tous les fichiers statiques (index.html inclus)
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
