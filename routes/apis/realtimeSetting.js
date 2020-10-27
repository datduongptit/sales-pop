const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

const Realtime = require('../../models/Realtime');

// create and update Realtime object
router.post('/', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    };
    const {
        showProduct,
        backgroundLeft,
        backgroundRight,
        backgroundColor,
        from,
        to,
        customText,
        colorText,
        position
    } = req.body;

    // build ReatimeSettings object
    const realtimeFields = {};
    if(showProduct) realtimeFields.showProduct = showProduct;
    if(backgroundLeft) realtimeFields.backgroundLeft = backgroundLeft;
    if(backgroundRight) realtimeFields.backgroundRight = backgroundRight;
    if(backgroundColor) realtimeFields.backgroundColor = backgroundColor;
    if(customText) realtimeFields.customText = customText;
    if(colorText) realtimeFields.colorText = colorText;
    if(position) realtimeFields.position = position;
    
    realtimeFields.customView = {};
    if(from) realtimeFields.customView.from = from;
    if(to) realtimeFields.customView.to = to;
    
    try {
        let realtime = await Realtime.findOne();
        if(realtime) {
            realtime = await Realtime.update(
                {},
                {$set: realtimeFields},
                {new: true}
            );
            return res.json(realtime);
        }
    
        realtime = new Realtime(realtimeFields);
        await realtime.save();
        res.json(realtime);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})


// get realtime Settings
router.get('/' , async (req, res) => {
    try {
        const realtime = await Realtime.find();
        res.json(realtime);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


module.exports = router;