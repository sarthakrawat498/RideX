import React ,{useState ,useRef} from 'react';
import {Link} from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ubermap from '../assets/uber-challenge.jpg';
import black_rider_logo from '../assets/Logo_RideX_Captain_black.png';
import CaptainDetails from '../Components/CaptainDetails';
import RidePopUp from '../Components/RidePopUp';
import ConfirmRidePopUp from '../Components/ConfirmRidePopUp';
const CaptainHome = () =>{
    const ridePopUpPanelRef = useRef(null);
    const confirmRidePopUpPanelRef = useRef(null);
    const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
    const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);

    useGSAP(function () {
        if (ridePopUpPanel) {
            gsap.to(ridePopUpPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(ridePopUpPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ ridePopUpPanel ])

    useGSAP(function () {
        if (confirmRidePopUpPanel) {
            gsap.to(confirmRidePopUpPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePopUpPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePopUpPanel ])

    return(
        <div className='h-screen'>
            <div className='fixed p-4 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src={black_rider_logo} alt="" />
                <Link to='/home' className='h-10 w-10  bg-white flex items-center justify-center rounded-full'>
                <i className='text-lg font-medium ri-logout-box-r-line'></i>
            </Link>
            </div>
            <div className='h-3/5'>
                <img
                    className="h-full w-full object-cover"
                    src={ubermap}
                    alt="Image of map"
                />
            </div>
            <div className='h-2/5 p-6'>
                <CaptainDetails />
            </div>
            <div ref={ridePopUpPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <RidePopUp setRidePopUpPanel = {setRidePopUpPanel} setConfirmRidePopUpPanel = {setConfirmRidePopUpPanel} />
            </div>
            <div ref={confirmRidePopUpPanelRef} className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <ConfirmRidePopUp setConfirmRidePopUpPanel = {setConfirmRidePopUpPanel} setRidePopUpPanel = {setRidePopUpPanel} />
            </div>
        </div>
    )
}
export default CaptainHome ;