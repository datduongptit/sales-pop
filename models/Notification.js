const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
    showOrder: {
        type: Boolean
    },
    selectOrder: {
        type: String
    },
    customShow: {
        type: String
    },
    numberOfLive: {
        type: Number
    },
    orderStatus: {
        type: String
    },
    nextTimeDisplay: {
        type: Number
    },
    displaytime: {
        type: Number
    },
    dateFormat: {
        type: String
    },
    showDevices: {
        type: String
    },
    customText: {
        type: String
    },
    notiDisplay: {
        type: String
    },
    notiHidden: {
        type: String
    },
    position: {
        type: String
    },
    highlightColor: {
        type: String
    },
    textColor: {
        type: String
    },
    colorDate: {
        type: String
    },
    borderRadius: {
        type: String
    }

})

module.exports = Notification = mongoose.model('notificationSetting', notificationSchema)