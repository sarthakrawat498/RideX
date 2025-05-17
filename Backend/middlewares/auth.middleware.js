const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req, res, next) => {
    
    const token = req.cookies?.token || (req.headers.authorization?.startsWith('Bearer ')&& req.headers.authorization.split(' ')[1])  ;
    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized  - Token not provided'  });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token : token });

    if (isBlacklisted){
        return res.status(401).json({message: 'Unauthorized - Token is blacklisted'})
    }
    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded._id)

   console.log('Decoded token:', jwt.decode(req.cookies?.token));
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized: User not found' });
    }
    req.user = user;

    return next();
    

    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
}

module.exports.authCaptain = async (req,res,next) =>{
    const token = req.cookies?.token || (req.headers.authorization?.startsWith('Bearer ')&& req.headers.authorization.split(' ')[1])  ;
    console.log(token);
    
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized  - Token not provided'  });
    }

    const isBlacklisted = await blacklistTokenModel.findOne({ token : token });

    console.log('isBlacklisted:', isBlacklisted);
    if (isBlacklisted){
        return res.status(401).json({message: 'Unauthorized - Token is blacklisted'})
    }

    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captain = await captainModel.findById(decoded._id)

   console.log('Decoded token:', jwt.decode(req.cookies?.token));
    if (!captain) {
        return res.status(401).json({ message: 'Unauthorized: Captain not found' });
    }
    req.captain = captain;

    return next();
    

    } catch (err) {
        console.log('Error:', err);
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
}