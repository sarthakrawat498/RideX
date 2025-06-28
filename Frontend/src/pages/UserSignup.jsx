import React, { useState , useContext} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import axios from 'axios';
import {UserDataContext }  from '../context/UserContext';
import black_logo from '../assets/Logo_RideX_black.png';
const UserSignup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();
    const {user,setUser} = useContext(UserDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newUser ={
            fullname:{
                firstname: firstName,
                lastname: lastName
            },
            email : email,
            password : password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
        if (response.status === 201){
            const data = response.data ;
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home');
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img style={{ width: '96px', height: '96px' }} className='mb-5' src={black_logo} alt="logo" />
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
                        Create Account
                    </button>
                </form>
                <p className='text-center' >Already have an account ? <Link to='/login' className='text-blue-600' >Login here</Link></p>
            </div>
            <div>
                <p className='text-[12px] leading-tight'>
                    This site is protected by reCAPTCHA and the <span className='underline'> Google Privacy Policy </span>and <span className='underline'>Terms of Service apply.</span> 
                </p>
            </div>
        </div>
    )
}

export default UserSignup;