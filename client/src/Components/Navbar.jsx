import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <Link to='/' style={{color: '#fff'}}>Home</Link>
      <Link to='/register' style={{color: '#fff', margin: '0 15px'}}>Register</Link>
      <Link to='/login' style={{color: '#fff'}}>Login</Link>
    </nav>
  )
}

export default Navbar