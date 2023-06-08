const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true,"must provide a name"],
            trim: true,
            maxlength: [20, "name must be 20 or less characters"]
        },
        completed: {
            type: Boolean,
            default: false
        }
    }
)

module.exports = mongoose.model('task', taskSchema)