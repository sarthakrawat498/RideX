import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('')
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div >
            <h5 className="p-1 text-center w-[93%]  absolute top-0" onClick={() => {
                props.setRidePopUpPanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line" ></i></h5>
            <h3 className="text-2xl font-semibold mb-5">Confirm Ride Details </h3>
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg mb-5 '>
                <div className='flex items-center gap-3 '>
                    <img className='h-12  rounded-full object-cover w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6xzTOIF3KmlJrKk0ILZ9uv4nXOxIiQll3Q&s" alt="" />
                    <h2 className='text-lg font-medium'>Ram Paul</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full '>
                    <div className='flex item-center gap-5 p-3 border-gray-500 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab , AHemdabad</p>
                        </div>
                    </div>
                    <div className='flex item-center gap-5 p-3 border-gray-500 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab , AHemdabad</p>
                        </div>
                    </div>
                    <div className='flex item-center gap-5 p-3  '>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹192.20</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 w-full">
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" placeholder="Enter OTP" className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3 mb-3" />
                        <Link to='/captain-riding' className='w-full mt-1 text-lg flex justify-center bg-green-700 text-white font-semibold p-3 rounded-lg'>
                            Confirm
                        </Link>
                        <button onClick={() => {
                            props.setConfirmRidePopUpPanel(false);
                            props.setRidePopUpPanel(false);
                        }

                        } className='w-full mt-2 bg-red-500 text-lg text-white font-semibold p-3 rounded-lg'>
                            Cancel Ride
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ConfirmRidePopUp