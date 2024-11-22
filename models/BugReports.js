const mongoose = require('mongoose');

const BugReportSchema = new mongoose.Schema({
    Temp_id: {type: String, require: true},
    Temp_Name: {type: String, require: true},
    Bug_Id:{type: String, require: true, unique: true},
    Summary: {type: String, require: true},
    ScreenShot: {type: String, require: true},
    Priority: {type: String, require: true},
    Severity: {type: String, require: true},
    Assigned_to: {type: String, require: true},
    Assigned_date:{
        type: Date,
        required: true,
        default: Date.now
    },
    Bug_DueDate: {
        type: Date,
        required: true
    },
    Completed_Date:{
        type: Date,
        required: true,
        default: Date.now
    },
    Bug_status: {type: String, require: true}
},{timestamps: true});

module.exports = mongoose.model('BugReports', BugReportSchema);

