import React, { useContext } from 'react';
import'./Header.css'
import logo from '../../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const Header = () => {
    const {user,logOut}= useContext(AuthContext)

    const handelLogOut=()=>{
        logOut()
          .then(result=>{})
          .catch(error=>console.log(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/Orders">Order</Link>
                <Link to="/Inventory">Inventory</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <span  className='text-white'> Welcome {user.email} <button onClick={handelLogOut}>Log Out</button></span>
                }
            </div>

        </nav>
    );
};

export default Header;