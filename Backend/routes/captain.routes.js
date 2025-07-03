const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainController = require('../controllers/captain.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage("Invalid email"),
    body("fullname.firstname").isLength({min:3}).withMessage('First name must be atleast 3 charcaters long '),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 charcaters long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be atleast 3 charcaters long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be atleast 3 charcaters long'),
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Vehicle type must be car, motorcycle or auto'),
],
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage("Invalid email"),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 charcaters long'),
],
    captainController.loginCaptain
)

router.get('/profile',authMiddleware.authCaptain , captainController.getCaptainProfile);

router.get('/logout',authMiddleware.authCaptain , captainController.logoutCaptain);

module.exports = router ;