import React, { useState, useRef } from "react";
import black_logo from '../assets/Logo_RideX_black.png';
import ubermap from '../assets/uber-challenge.jpg';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../Components/LocationSearchPanel";
import VehiclePanel from "../Components/VehiclePanel";
import ConfirmRide from "../Components/ConfirmRide";
import LookingForDriver from "../Components/LookingForDriver";
import WaitingForDriver from "../Components/WaitingForDriver";

const Home = () => {
    
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)


    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const [vehiclePanel,setVehiclePanel] = useState(false);
    const [ confirmRidePanel, setConfirmRidePanel ] = useState(false)
    const [ vehicleFound, setVehicleFound ] = useState(false)
    const [ waitingForDriver , setWaitingForDriver ] = useState(false)


    const submitHandler = (e) => {

        e.preventDefault();
    }
    useGSAP(function () {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24
                //opacity:1
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0
                //opacity:0
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [panelOpen])

    useGSAP(function(){
        if (vehiclePanel){
            gsap.to(vehiclePanelRef.current,{
            transform : 'translateY(0)'
        })
        }else{
            gsap.to(vehiclePanelRef.current,{
            transform : 'translateY(100%)'
        })
        }
    },[vehiclePanel])

   useGSAP(function () {
        if (confirmRidePanel) {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePanel ])

    useGSAP(function () {
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ vehicleFound ])

    useGSAP(function () {
        if (waitingForDriver) {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ waitingForDriver ])
    return (
        <div className="h-screen relative overflow-hidden">
            <img className='w-16 absolute left-5 top-3 ' src={black_logo} alt="" />
            <div onClick={()=>{
                setVehiclePanel(false)
                }} className="h-screen w-screen">
                <img
                    className="h-full w-full object-cover"
                    src={ubermap}
                    alt="Image of map"
                />
            </div>
            <div className=" flex flex-col justify-end absolute h-screen top-0 w-full ">
                <div className="h-[30%] p-6 bg-white relative">
                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className="absolute opacity-0 top-6 right-6 text-2xl"><i className="ri-arrow-down-wide-line"></i></h5>
                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value);
                            }}
                            className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5 " type="text" placeholder="Add a pickup location" />
                        <input
                            onClick={() => {
                                setPanelOpen(true)
                            }}
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value);
                            }}
                            className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3" type="text" placeholder="Enter your destination" />
                    </form>
                </div>
                <div ref={panelRef} className=" bg-white h-[0%] ">
                    <LocationSearchPanel  setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
                </div>
            </div>
            <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
            </div>
            <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
            </div>
            <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <LookingForDriver setVehicleFound={setVehicleFound}/>
            </div>
            <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12">
                <WaitingForDriver waitingForDriver={waitingForDriver} />
            </div>
        </div>
    )
}
export default Home;