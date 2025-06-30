import React from "react";
import { Link } from 'react-router-dom'
const FinishRide = (props) => {
    return (
        <div >
            <h5 className="p-1 text-center w-[93%]  absolute top-0" onClick={() => {
                props.setFinishRidePanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line" ></i></h5>
            <h3 className="text-2xl font-semibold mb-5">Finish Ride</h3>
            <div className='flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg '>
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

                <div className="mt-10 w-full">


                    <Link to='/captain-home' className='w-full mt-1 text-lg flex justify-center bg-green-700 text-white font-semibold p-3 rounded-lg'>
                        Finish Ride
                    </Link>

                    <p className="text-red-500 mt-10 text-xs">Click on Finish Ride button if you have completed the ride</p>

                </div>
            </div>
        </div>
    )
}
export default FinishRide