const VendorModel = require('../Models/Vendor');

module.exports = {

create: (req, res) => {
    let Vendor = new VendorModel({
        Shopname  : req.body.Shopname,
        Vendorname : req.body.Vendorname,
        EmailID : req.body.EmailID,
        Mobileno: req.body.Mobileno,
        Pass : req.body.Pass,
        Cpass: req.body.Cpass,
        Ad: req.body.Ad,
        Gst: req.body.Gst
        
     })
     
     Vendor.save()
     .then(result => {
         res.json({ success: true, result: result})
     })
     .catch(err => {
          res.json({ success: false, result: err})
         })
},

update: (req, res) => {
    VendorModel.findByIdAndUpdate({_id: req.body._id}, req.body)
    .then(Vendor => {
        res.send(Vendor)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
},

get: (req, res) => {
    VendorModel.find()
    .then(Vendor => {
        res.send(Vendor);
    })
    .catch(err => {
        res.json({ success: false, result: "No Register found"})
    })
},

delete: (req, res) => {
    VendorModel.findByIdAndRemove({ _id: req.body._id})
    .then(Vendor => {
        if(!Vendor) {
            return res.status(404).send({
                message: "Register not found " + req.params._id
            });
        }
        res.send({message: "Vendor Added successfully!"});
    })
    .catch(err => res.json({success: false, result: err}))
}
}