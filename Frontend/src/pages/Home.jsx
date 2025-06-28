import React, { useState, useRef } from "react";
import black_logo from '../assets/Logo_RideX_black.png';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../Components/LocationSearchPanel";

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
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
    return (
        <div className="h-screen relative overflow-hidden">
            <img className='w-16 absolute left-5 top-3 ' src={black_logo} alt="" />
            <div className="h-screen w-screen">
                <img
                    className="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
                    alt="Image of map"
                />
            </div>
            <div className="bg-white flex flex-col justify-end absolute h-screen top-0 w-full ">
                <div className="h-[30%] p-6 bg-white relative">
                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className="absolute opacity-0 top-6 right-6 text-2xl"><i className="ri-arrow-down-wide-line"></i></h5>
                    <h4 className="text-2xl font-semibold">Find a trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[43%] left-10 bg-gray-700 rounded-full"></div>
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
                    <LocationSearchPanel />
                </div>
            </div>
            <div className="fixed w-full z-10 bottom-0 bg-white p-5">
                <div className="flex w-full  bg-red-600 items-center justify-between ">
                    <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1652995234/assets/92/8d4288-e896-4333-9bc2-c60c49f2a095/original/UberXL_Black_v2.png" alt="" />
                    <div className="bg-green-500 w-1/2 ">
                        <h4 className="font-medium text-sm">RideX Go <span><i className="ri-user-3-fill"></i>4</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Affordable, Luxurious rides</p>
                    </div>
                    <h2 className="text-xl font-semibold">₹192.20</h2>
                </div>
            </div>
        </div>
    )
}
export default Home;