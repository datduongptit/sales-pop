const mongoose = require('mongoose');

const RealtimeSchema = new mongoose.Schema({
    showProduct: {
        type: Boolean
    }, 
    backgroundLeft: {
    type: String
    },
    backgroundRight: {
        type: String
        },
    backgroundColor: {
        type: String
    },
    customView: {
        from: {
            type: Number
        },
        to: {
            type: Number
        }
    },
    customText: {
        type: String
    },
    colorText: {
        type: String
    },
    position: {
        type: String
    }
    
})

module.exports = Realtime = mongoose.model('realtimeSetting', RealtimeSchema);