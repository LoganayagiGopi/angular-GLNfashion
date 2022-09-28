const AdminModel = require('../Models/Admin');

module.exports = {

create: (req, res) => {
    let Admin = new AdminModel({
        
        EmailId : req.body.EmailId,
        Password : req.body.Password
       
        
     })
     
     Admin.save()
     .then(result => {
         res.json({ success: true, result: result})
     })
     .catch(err => {
          res.json({ success: false, result: err})
         })
},

update: (req, res) => {
    AdminModel.findBytitleAndUpdate({_title: req.body._title}, req.body)
    .then(Admin => {
        res.send(Admin)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
},

get: (req, res) => {
    AdminModel.find()
    .then(Admin => {
        res.send(Admin);
    })
    .catch(err => {
        res.json({ success: false, result: "No Admin found"})
    })
},

delete: (req, res) => {
    AdminModel.findBytitleAndRemove({ _id: req.body._title})
    .then(Admin => {
        if(!Admin) {
            return res.status(404).send({
                message: "Admin not found " + req.params._title
            });
        }
        res.send({message: "Admin Added successfully!"});
    })
    .catch(err => res.json({success: false, result: err}))
}
}


