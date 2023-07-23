
const path= require('path');
const express= require('express');
const bodyParser= require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes=require('./routes/shop')
const contactRoutes= require('./routes/contactus')
const successRoutes= require('./routes/success')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use('/contactus', contactRoutes )
app.use('/success', successRoutes)
app.use('/',shopRoutes);


app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'status.html'))
})



// const server=http.createServer(app);

// server.listen(3000);

app.listen(5000);