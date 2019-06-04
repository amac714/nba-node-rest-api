
// Setting up server
require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 4040;

process.on('SIGINT', function() {
  console.log('\nShutting down with SIGINT (Ctrl-C)');
  // end connection 
  process.exit();
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});