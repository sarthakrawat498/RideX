const rideModel = require('../models/ride.model')
const mapService = require('./maps.service')
const crypto = require('crypto')
const axios = require('axios');
const rideService = require('./ride.service');
module.exports.getFare = async (pickup , destination)=>{
    if (!pickup || !destination){
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup,destination)

    const baseFare = {
        auto : 30,
        car : 50 ,
        motorcycle : 20
    };

    const perKmRate = {
        auto : 10 ,
        car : 15,
        motorcycle : 8
    };

    const perMinuteRate = {
        auto : 2,
        car : 3,
        motorcycle : 1.5
    }

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        motorcycle: Math.round(baseFare.motorcycle + ((distanceTime.distance.value / 1000) * perKmRate.motorcycle) + ((distanceTime.duration.value / 60) * perMinuteRate.motorcycle))
    
    }
    return fare ;
}


function getOtp(num){
    function generateOtp(num){
        const otp = crypto.randomInt(Math.pow(10,num-1),Math.pow(10,num)).toString();
        return otp;
    }
    return generateOtp(num);
}


module.exports.createRide = async ({user,pickup,destination,vehicleType}) => {
    if (!user || !pickup || !destination || !vehicleType ){
        throw new Error('All fields are required')
    }
    const fare = await rideService.getFare(pickup,destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        otp:getOtp(4),
        fare : fare[vehicleType]
    })
    return ride ;
}