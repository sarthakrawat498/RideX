import React from 'react';

const WaitingForDriver = (props) => {
    return(
        <div>
            <h5 className="p-1 text-center w-[93%]  absolute top-0" onClick={()=>{
                props.waitingForDriver(false)
            }} ><i className="text-3xl text-gray-200 ri-arrow-down-wide-line" ></i></h5>

            <div className='flex items-center justify-between m-3'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png" alt="" />
                <div className='text-right'>
                    <h2 className='text-lg font-medium'>{props.ride?.captain.fullname.firstname} </h2>
                    <h4 className='text-xl font-semibold -mt-1 -mb-1'>{props.ride?.captain.vehicle.plate}</h4>
                    <p className='font-sm text-gray-600 '>Maruti Suzuki Wagonr</p>
                    <h1 className='text-lg font-semibold'> {props.ride?.otp} </h1>
                </div>
            </div>
            <div className='flex gap-2 justify-between flex-col items-center'>
                <div className='w-full mt-5'>
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

            </div>
        </div>
    )
}
export default WaitingForDriver