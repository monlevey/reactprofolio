import { Link } from 'react-router-dom'
// Here we import the Head css file 
import '../components/css/header.css';
//importing the navbar 
import Navbar from './navbar';
// import the profile image
function Header(){
  return (
    <div className='header'>  
      <div className='mobilelogo'>
        <img
          className="mobileonly tabletsize"
          src={require(`../components/images/monleveylogo.png`)}
          alt="Mon Levey Logo"
        />
        </div>
      <span><Navbar></Navbar> 
      </span>
     
    </div>
  )
}

export default Header