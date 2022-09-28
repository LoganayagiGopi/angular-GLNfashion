const RegModel = require('../Models/Register');

module.exports = {

create: (req, res) => {
    let Register = new RegModel({
        Firstname  : req.body.Firstname,
        Lastname : req.body.Lastname,
        EmailId : req.body.EmailId,
        MobileNo: req.body.MobileNo,
        Password : req.body.Password,
        Cpassword: req.body.Cpassword,
        Address: req.body.Address
        
     })
     
     Register.save()
     .then(result => {
         res.json({ success: true, result: result})
     })
     .catch(err => {
          res.json({ success: false, result: err})
         })
},

update: (req, res) => {
    RegModel.findBytitleAndUpdate({_title: req.body._title}, req.body)
    .then(Register => {
        res.send(Register)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
},

get: (req, res) => {
    RegModel.find()
    .then(Register => {
        res.send(Register);
    })
    .catch(err => {
        res.json({ success: false, result: "No Register found"})
    })
},

delete: (req, res) => {
    RegModel.findBytitleAndRemove({ _id: req.body._title})
    .then(Register => {
        if(!Register) {
            return res.status(404).send({
                message: "Register not found " + req.params._title
            });
        }
        res.send({message: "Register Added successfully!"});
    })
    .catch(err => res.json({success: false, result: err}))
}
}
