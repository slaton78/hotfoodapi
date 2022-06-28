const express = require('express')
const hotfoodmodels = require('../models/hotfoodschema')


// * Create a Router
const router = express.Router()

//* GET HOTFOOD
router.get('/', async (req, res) => {
   try {
       const hotfood = await hotfoodModel.find()
       res.status(200).json(hotfood)
   } catch (error) {
       console.log(error)
   }
})

//* CREATE HOTFOOD
router.post('/', async (req, res) => {
    const hotfood = req.body // gets the data from the request
    

    try {
        const hotfood = await hotfoodModel.create(hotfood) // create the hotfood in the db
        // send back the response
        res.status(201).json(hotfood)
        // res.status(201).json({data: hotfood})
    } catch (error) {
        console.error(error)
        res.status(400).json('Bad request!!!!!')
    }
})


//* GET HOTFOOD BY ID
router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const hotfood = await hotfoodModel.findById(id)
        res.status(200).json(hotfood)
    } catch (error) {
        console.error(error)
        res.status(400).json({
            msg: 'Id not found'
        })
    }
})


//* UPDATE HOTFOOD BY ID
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const neeData = req.body
     try {
         //* find the todo by the id
         const todo = await hotfoodModel.findByIdAndUpdate(id, hotfoodData, {new: true})
         res.status(202).json(hotfood)
     } catch (error) {
         console.log(error)
     }
})

//! DELETE A HOTFOOD
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const hotfood = await hotfoodModel.findByIdAndDelete(id)
        res.status(200).json(hotfood)
    } catch (error) {
        console.log(error);
    }
})


module.exports = router