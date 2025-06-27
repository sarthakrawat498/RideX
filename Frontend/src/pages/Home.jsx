import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo_RideX.png';
const Home = () => {
    return (
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1572013343866-dfdb9b416810?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGF4aXxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'> 
        <img className='w-16 ml-8' src={logo} alt="logo" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-[30px] font-bold '>Get Started with RideX</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
        </div>
    )
} 

export default Home;