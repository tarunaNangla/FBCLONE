import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo' > <img src="/assets/socialchat.png"></img></div>
      <div className='navbarcenter'>
        <span>
            <input placeholder='search here' type='text' ></input>
        </span>
        <span style={{paddingTop:"10px"}}>
            <SearchIcon/>
        </span>
      </div>
      <div className='pages'>
        <span>
          <button className='b'>Homepage</button>
        </span>
        <span>
          <button className='b'>Timelines</button>
        </span>

      </div>
      <div className='navbarleft'>
        <div className='leftbox'>
            <span><PersonIcon/></span><div>1</div>
        </div>
        <div className='leftbox'>
            <span><ChatIcon/></span><div>2</div>
        </div>
        <div className='leftbox'>
            <span><NotificationsNoneIcon/></span><div>1</div>
        </div>
      </div>


      <div className='profile'>
        <img src="/assets/pic/r2.jpg"></img>
      </div>
    </div>
  )
}

export default Navbar
