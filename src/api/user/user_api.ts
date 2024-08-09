import express from 'express'
import User from '../../db/models/User';

const router = express.Router();



router.get('/',async (req,res,next) =>{
    try {
        console.log("user api '/' called")
        const allUser = await User.findAll()
        res.send(allUser)
    } catch (err) {
        res.status(404).send('no user in db')
    }
})

module.exports = router