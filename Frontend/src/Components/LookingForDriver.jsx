import React from 'react';

const LookingForDriver = (props) => {
    return (
        <div>
            <h5 className="p-1 text-center w-[93%]  absolute top-0" onClick={() => {
                props.setVehicleFound(false)
            }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line" ></i></h5>
            <h3 className="text-2xl font-semibold mb-5">Looking for your RideX </h3>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png" alt="" />
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

            </div>
        </div>
    )
}
export default LookingForDriver