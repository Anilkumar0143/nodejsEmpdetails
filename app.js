const express = require('express'); 
const path = require('path');
const port = 3000
const app = express();
const errorControllers = require('./controllers/404')
app.set('view engine', 'ejs'); 

const adminRoutes = require('./routes/admin');
const empRoutes = require('./routes/emp');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', adminRoutes);
app.use(empRoutes);
 
app.use(errorControllers.get404);
app.listen(port, () => console.log(`app listening on localhost:${port}`))