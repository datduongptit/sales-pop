const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ManualSaleSchema = new Schema({
    publishOrder: {
        type: Boolean,
        default: true
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    product: {
        type: String,
        require: true,
    },
    order: {
        type: String,
        // default: Date.now(),
    }

})

module.exports = ManualSale = mongoose.model('manualSale', ManualSaleSchema);