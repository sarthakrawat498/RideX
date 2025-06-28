import React, { useState, useRef } from "react";
import black_logo from '../assets/Logo_RideX_black.png';
import ubermap from '../assets/uber-challenge.jpg';
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
    const vehiclePanelRef = useRef(null);
    const [vehiclePanel,setVehiclePanel] = useState(false);

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
                        <div className="line absolute h-16 w-1 top-[35%] left-10 bg-gray-700 rounded-full"></div>
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
            <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-14">
                <h5 className="p-1 text-center w-[93%]  absolute top-0" onClick={()=>{
                    setVehiclePanel(false)
                }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line" ></i></h5>
                <h3 className="text-2xl font-semibold mb-5">Choose a Vehicle </h3>
                <div className="flex border-gray-200 active:border-black border-2 rounded-xl mb-2 w-full p-3  items-center justify-between ">
                    <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png" alt="" />
                    <div className="ml-2 w-1/2 ">
                        <h4 className="font-medium text-base">RideX Go <span><i className="ri-user-3-fill"></i>4</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Affordable, Compact rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹192.20</h2>
                </div>
                <div className="flex border-2 border-gray-200 active:border-black rounded-xl mb-2 w-full p-3  items-center justify-between ">
                    <img className="h-10" src="data:image/jpeg;base64,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" alt="" />
                    <div className="ml-2 w-1/2 ">
                        <h4 className="font-medium text-base">Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                        <h5 className="font-medium text-sm">3 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Affordable, Motorcyle rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹72.20</h2>
                </div>
                <div className="flex border-2 border-gray-200 active:border-black rounded-xl mb-2 w-full p-3  items-center justify-between ">
                    <img className="h-10" src="data:image/jpeg;base64,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" alt="" />
                    <div className="ml-2 w-1/2 ">
                        <h4 className="font-medium text-base">RideX Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Affordable Auto rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">₹120.20</h2>
                </div>
            </div>
        </div>
    )
}
export default Home;