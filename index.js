const app = require('./app') //app.js
const port = process.env.PORT || 5000;  //set port in a command line or 5000 as default


app.listen(port, () => console.log(`Server has been started on ${port}`))