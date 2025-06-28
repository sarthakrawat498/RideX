import React ,{useContext, useState}from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';
import black_logo from '../assets/Logo_RideX_black.png';

const UserLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const[userData,setUserData] = useState({})

    const  {user,setUser} = useContext(UserDataContext)
    const navigate = useNavigate();
    const submitHandler = async (e) =>{
        e.preventDefault();
        const userData ={
            email : email,
            password : password
        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
        if (response.status === 200){
            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token',data.token)
            navigate('/home');
        }
        setEmail('');
        setPassword('');
    }
    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img style={{ width: '96px', height: '96px' }} className='mb-5' src={black_logo} alt="logo" />
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <h3 className='text-lg font-medium mb-2 '>Whats your email ?</h3>
                <input 
                required 
                value = {email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='email@example.com' 
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type='email' 
                />

                <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                <input 
                required
                 placeholder='Enter Password' 
                 value ={password}
                 onChange={(e)=>setPassword(e.target.value)}
                 className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                 type='password' 
                 />

                <button
                className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base'>
                Login
                </button>
                </form>
                <p className='text-center' >New here? <Link to='/signup' className='text-blue-600' >Create new Account</Link></p>
            </div>
            <div>
                <Link to='/captain-login'
                className='bg-[#10b461] flex items-center justify-center mb-5 text-white font-semibold  rounded px-4 py-2  w-full text-lg placeholder:text-base'>
                    Sign in as Captain
                    </Link>
            </div>
        </div>
    )
}

export default UserLogin;