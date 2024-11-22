const mongoose = require('mongoose');
const validateEmail = (email) => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return regex.test(email);
  };

const EmployeeSchema = new mongoose.Schema({
    Employee_id: {type: String, require: true, unique: true},
    Employee_name:{type: String, require: true},
    Password:{type: String, require: true},
    Email_id: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    Employee_status: {type: Boolean, default:true, require: true},
    Mac_address: {type: String, require: true},
     
},
{ timestamps: true});

module.exports = mongoose.model('Employee', EmployeeSchema);