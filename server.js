const express = require('express');
const mongoose = require('mongoose');

const app = express();
//Database
mongoose.connect('mongodb://localhost:27017/GLNFashion', {useNewUrlParser: true })
.then(() => console.log("Connected to database"))
.catch(err => console.log(err))

//Middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(function (req,res,next)
{
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

const ProductsController  = require('./Controller/ProductsController');
  
app.post('/api/Produts/create', ProductsController.create)
app.post('/api/Produts/update', ProductsController.update)
app.get('/api/Produts/getProduts', ProductsController.get)
app.delete('/api/Produts/delete', ProductsController.delete)


const RegisterController  = require('./Controller/RegisterController');
  
app.post('/api/Register/create', RegisterController.create)
app.post('/api/Register/update', RegisterController.update)
app.get('/api/Register/getRegister', RegisterController.get)
app.delete('/api/Register/delete', RegisterController.delete)


const VendorController  = require('./Controller/VendorController');
  
app.post('/api/Vendor/create', VendorController.create)
app.post('/api/Vendor/update', VendorController.update)
app.get('/api/Vendor/getVendor', VendorController.get)
app.delete('/api/Vendor/delete', VendorController.delete)

const AdminController  = require('./Controller/AdminController');
app.post('/api/Admin/create', AdminController.create)
app.post('/api/Admin/update', AdminController.update)
app.get('/api/Admin/getAdmin', AdminController.get)
app.delete('/api/Admin/delete', AdminController.delete)




//Start Server
app.listen(3402, ()=> console.log("Server started on 3402"))

