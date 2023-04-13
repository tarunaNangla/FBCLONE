import React from 'react'
import Navbar from '../navbar/Navbar'
import Left from '../leftbar/Left'
import Feed from '../feed/Feed'
import Right from '../rightbar/Right'
import "./home.css"
// import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
const Home = () => {
  return (
    <div>
     {/* <PersonAddAlt1Icon/> */}
      <Navbar/>

      <div className='container' >
        <Left/>
        <Feed/>
        <Right/>
      </div>
    </div>
  )
}

export default Home
