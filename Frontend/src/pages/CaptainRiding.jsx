import React ,{useState,useRef} from "react";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {Link, useLocation} from 'react-router-dom'
import black_rider_logo from '../assets/Logo_RideX_Captain_black.png';

import FinishRide from "../Components/FinishRide";
import LiveTracking from "../Components/LiveTracking";
const CaptainRiding = () => {

    const finishRidePanelRef = useRef(null);
    const [finishRidePanel , setFinishRidePanel] = useState(false);
    const location = useLocation()
    const rideData = location.state?.ride
    useGSAP(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ finishRidePanel ])

    return(
        <div className='h-screen relative'>
            
            <div className='fixed p-4 top-0 flex items-center justify-between w-screen'>
                <img className='w-26' src={black_rider_logo} alt="" />
                <Link to='/captain-home' className='h-10 w-10  bg-white flex items-center justify-center rounded-full'>
                <i className='text-lg font-medium ri-logout-box-r-line'></i>
            </Link>
            </div>
            <div className='h-4/5 relative z-[-1]'>
                <LiveTracking />
            </div>
            <div className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400 '
                onClick={()=>{
                    setFinishRidePanel(true)
                }}
            >
            <h5 className="p-1 text-center w-[90%]  absolute top-0" onClick={() => {
                
            }}><i className="text-3xl text-gray-800 ri-arrow-up-wide-line" ></i></h5>
                <h4 className="text-xl font-semibold">4 KM away </h4>
                <button className="bg-green-700 text-white font-semibold p-3 px-10 rounded-lg">Complete Ride</button>
            </div>
            <div ref={finishRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <FinishRide 
                ride = {rideData}
                setFinishRidePanel={setFinishRidePanel} />
            </div>
        </div>
    )
}

export default CaptainRiding