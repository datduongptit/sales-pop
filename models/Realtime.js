const mongoose = require('mongoose');

const RealtimeSchema = new mongoose.Schema({
    showProduct: {
        type: String
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
    custiomView: {
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