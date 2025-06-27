import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import black_rider_logo from '../assets/Logo_RideX_Captain_black.png';

const CaptainLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[captainData,setCaptainData] = useState({})
    
    const submitHandler =(e) =>{
            e.preventDefault();
            setCaptainData({
                email : email,
                password : password
            })
            console.log(captainData)
            setEmail('');
            setPassword('');
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img style={{ width: '96px', height: '96px' }} className='w-16 mb-5' src={black_rider_logo} alt="logo" />
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
                <p className='text-center' >Join a fleet? <Link to='/captain-signup' className='text-blue-600' >Register as a Captain </Link></p>
            </div>
            <div>
                <Link to='/login'
                className='bg-[#d5622d] flex items-center justify-center mb-5 text-white font-semibold  rounded px-4 py-2  w-full text-lg placeholder:text-base'>
                    Sign in as User
                    </Link>
            </div>
        </div>
    )
}

export default CaptainLogin;