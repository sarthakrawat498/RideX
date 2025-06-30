import React from 'react';
import {Link} from 'react-router-dom'
import ubermap from '../assets/uber-challenge.jpg';
const Riding = () => {
    return (
        <div className='h-screen'>
            <Link to='/home' className='fixed  h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full'>
                <i className='text-lg font-medium ri-home-5-line'></i>
            </Link>
            <div className='h-1/2'>
                <img
                    className="h-full w-full object-cover"
                    src={ubermap}
                    alt="Image of map"
                />
            </div>
            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Sarthak</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className='font-sm text-gray-600 '>Maruti Suzuki Wagonr</p>
                    </div>
                </div>
                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className='w-full mt-5'>
                        
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
                <button className='w-full  bg-green-700 text-white font-semibold p-2 rounded-lg'>Pay Now</button>
            </div>
        </div>
    )
}
export default Riding;
