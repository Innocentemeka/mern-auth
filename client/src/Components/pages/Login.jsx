import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const loginUser = async (e) => {
  e.preventDefault();
  const {email, password} = data
  try {
    const {data} = await axios.post('/login', {
      email,
      password
    });
    if(data.error) {
      toast.error(data.error)
    } else {
      setData({})
      toast.success('Login Successful. Welcome!')
      navigate('/dashboard')
    }
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className='form_container'>
      <h1>Login</h1>
       <form onSubmit={loginUser}>
        <div className='input_box'>
          <label>Email</label>
          <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
        </div>
        <div className='input_box'>
          <label>Password</label>
          <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
        </div>
          <button type='submit' className='button'>Login Now</button>
      </form>
    </div>
  )
}

export default Login