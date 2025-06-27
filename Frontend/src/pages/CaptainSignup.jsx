import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import black_rider_logo from '../assets/Logo_RideX_Captain_black.png';

const CaptainSignup = () => {
        const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});
    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullName:{
                firstName: firstName,
                lastName: lastName
            },
            email : email,
            password : password
        })
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img style={{ width: '96px', height: '96px' }} className='mb-5' src={black_rider_logo} alt="logo" />
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                    <h3 className='text-lg font-medium mb-2 '>Whats your name ?</h3>
                    <div className='flex gap-4 mb-5'>
                        <input
                            required
                            placeholder='First name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className='bg-[#eeeeee]  rounded w-1/2 px-4 py-2  text-lg placeholder:text-base'
                            type='text'
                        />
                        <input
                            required
                            placeholder='Last name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className='bg-[#eeeeee]  rounded px-4 w-1/2 py-2 text-lg placeholder:text-base'
                            type='text'
                        />
                    </div>
                    <h3 className='text-lg font-medium mb-2 '>Whats your email ?</h3>
                    <input
                        required
                        placeholder='email@example.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'
                        type='email'
                    />

                    <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                    <input
                        required
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='bg-[#eeeeee] mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'
                        type='password'
                    />

                    <button
                        className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
                        Login
                    </button>
                </form>
                <p className='text-center' >Already have an account ? <Link to='/captain-login' className='text-blue-600' >Login here</Link></p>
            </div>
            <div>
                <p className='text-[12px] leading-tight'>
                    This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy Policy </span>and <span className='underline'>Terms of Service apply.</span> 
                </p>
            </div>
        </div>
    )
}

export default CaptainSignup;