const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const errorHandler404 = require('./error-handlers/404');
const errorHandler500 = require('./error-handlers/500');

const app = express();

app.use(logger);

app.get('/person', validator, (req, res) => {
  const { name } = req.query;
  res.json({ name });
});

app.use(errorHandler404);
app.use(errorHandler500);

function start() {
 
    app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);
    });

};

module.exports = {
  start,
  app
};

