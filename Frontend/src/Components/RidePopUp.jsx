import React from 'react';

const RidePopUp = (props) => {
    return (
        <div>
            <h5 className="p-1 text-center w-[93%]  absolute top-0" onClick={() => {
                props.setRidePopUpPanel(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line" ></i></h5>
            <h3 className="text-2xl font-semibold mb-5">New Ride Available! </h3>
            <div className='flex items-center justify-between p-3 bg-yellow-400 rounded-lg '>
                <div className='flex items-center gap-3 '>
                    <img className='h-12  rounded-full object-cover w-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6xzTOIF3KmlJrKk0ILZ9uv4nXOxIiQll3Q&s" alt="" />
                    <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
                </div>
                <h5 className='text-lg font-semibold'>2.2 KM</h5>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full '>
                    <div className='flex item-center gap-5 p-3 border-gray-500 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.ride?.pickup?.split(',')[0] || ''}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup?.split(',').slice(1).join(', ') || ''}</p>
                        </div>
                    </div>
                    <div className='flex item-center gap-5 p-3 border-gray-500 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>{props.ride?.destination?.split(',')[0] || ''}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination?.split(',').slice(1).join(', ') || ''}</p>
                        </div>
                    </div>
                    <div className='flex item-center gap-5 p-3  '>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹{props.ride?.fare}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash </p>
                        </div>
                    </div>
                </div>
                <div className=' flex mt-5 w-full items-center justify-between  '>
                    <button onClick={() => {
                        props.setRidePopUpPanel(false);
                    }

                    } className='mt-1  bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg'>
                        Ignore
                    </button>
                    <button onClick={() => {
                        props.setConfirmRidePopUpPanel(true)
                        props.confirmRide()
                    }

                    } className=' bg-green-700 text-white font-semibold p-3 px-10 rounded-lg'>
                        Accept
                    </button>
                    
                </div>
            </div>
        </div>
    )
}
export default RidePopUp