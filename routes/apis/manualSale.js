const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');

const ManualSale = require('../../models/ManualSale');

// create manual sales
router.post('/', [
    check('firstName', 'Firstname is required').not().isEmpty(),
    check('lastName', 'Lastname is required').not().isEmpty(),
    check('city', 'City is required').not().isEmpty(),
    // check('publishOrder', 'PublishOrder is required').not().isEmpty(),
    check('product', 'Product is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const {firstName, lastName, city, publishOrder, product, order} = req.body;
    try {
        const newManualSale = new ManualSale({
            publishOrder: publishOrder,
            product: product,
            firstName: firstName,
            lastName: lastName,
            city: city,
            order: order
        });


        const manualSale = await newManualSale.save();
        res.json(manualSale);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});


// get all Manual Sales
router.get('/', async(req, res) => {
    try {
        const manualSale = await ManualSale.find();
        res.json(manualSale);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// get  Manual Sale by params ID
router.get('/:id', async (req, res) => {
    try {
        const manualSale = await ManualSale.findById(req.params.id);
        
        if(!manualSale) {
            return res.status(404).json({msg: 'Post not found'})
        }

        res.json(manualSale);
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' })
        }
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// update manualsales 
router.put('/:id', async (req, res) => {
    try {
        const {firstName, lastName, city, publishOrder, product, order} = req.body;
        let manualFeilds = {};
        if(firstName) manualFeilds.firstName = firstName;
        if(lastName) manualFeilds.lastName = lastName;
        if(city) manualFeilds.city = city;
        if(publishOrder) manualFeilds.publishOrder = publishOrder;
        if(product) manualFeilds.product = product;
        if(order) manualFeilds.order = order;

        let manualSale = await ManualSale.findById(req.params.id);

        if(!manualSale) {
            return res.status(404).json({msg: 'Post not found'})
        }
        else {
            manualSale = await ManualSale.findOneAndUpdate(
                {_id: req.params.id},
                {$set: manualFeilds},
                {new: true}
            );
            return res.json(manualSale);
        }

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Update publish order
router.put('/publishOrder/:id', async (req, res) => {
    try {
        const publishOrder = req.body;

        let manualSale = await ManualSale.findById(req.params.id);
        if(!manualSale) {
            return res.status(404).json({msg: 'Post not found'})
        }
        else {
            manualSale = await ManualSale.findOneAndUpdate(
                {_id: req.params.id},
                {$set: publishOrder},
                {new: true}
            );
            return res.json(manualSale);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// delete Manual Sale
router.delete('/:id', async (req, res) => {
    try {
        const manualSale = await ManualSale.findById(req.params.id);

        if(!manualSale) {
            return res.status(404).json({ msg: 'Post not found' })
        }

        await manualSale.remove();
        res.json({msg: 'Manual Sale deleted'});

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})



module.exports = router;