import React from 'react'
import "./left.css"

import FeedIcon from '@mui/icons-material/Feed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EventIcon from '@mui/icons-material/Event';
import WorkIcon from '@mui/icons-material/Work';
// import "./assets/pic/r1.jpg"
const Left = () => {
  return (
    <div className='left'>
      <div className='leftcontainer'>
           <ul className='leftorderlist'>
            <li className='leftlisftitems'>
              <span className='iconsui'>
               <FeedIcon  />  

              </span>
               <span>Feed</span>
            </li>

            <li className='leftlisftitems'>
              <span className='iconsui'>
               <ChatIcon  />  

              </span>
               <span>Chat</span>
            </li> 

            <li className='leftlisftitems'>
              <span className='iconsui'>
               <PlayCircleIcon  />  

              </span>
               <span>Videos</span>
            </li> 


            <li className='leftlisftitems'>
              <span className='iconsui'>
               <GroupIcon  />  

              </span>
               <span>Groups</span>
            </li> 


            <li className='leftlisftitems'>
              <span className='iconsui'>
               <BookmarkIcon />  

              </span>
               <span>Bookmarks</span>
            </li> 



            <li className='leftlisftitems'>
              <span className='iconsui'>
               <HelpIcon  />  

              </span>
               <span>Questions</span>
            </li> 


            <li className='leftlisftitems'>
              <span className='iconsui'>
               <WorkIcon />  

              </span>
               <span>Jobs</span>
            </li> 



            <li className='leftlisftitems'>
              <span className='iconsui'>
               <EventIcon />  

              </span>
               <span>Event</span>
            </li> 


            <li className='leftlisftitems'>
              <span className='iconsui'>
               <WorkspacePremiumIcon  />  

              </span>
               <span>Courses</span>
            </li> 

           </ul>


           <button className='leftbutton'>Show more</button>
           <hr className='lefthr' />



           <div className='scroll'>
            <ol>
              <li className="leftlisftitems">
                <img src="/assets/pic/r2.jpg" className='leftimg' ></img>
                <span className='setname'>Taruna</span>
              </li>

              <li className="leftlisftitems">
                <img src="/assets/pic/r1.jpg" className='leftimg' ></img>
                <span className='setname'>Jhon</span>
              </li>


              <li className="leftlisftitems">
                <img src="/assets/pic/r3.jpg" className='leftimg' ></img>
                <span className='setname'>Roshan</span>
              </li>



              <li className="leftlisftitems">
                <img src="/assets/pic/r4.jpg" className='leftimg' ></img>
                <span className='setname'>Alex</span>
              </li>



              <li className="leftlisftitems">
                <img src="/assets/pic/r5.jpg" className='leftimg' ></img>
                <span className='setname'>Sonia</span>
              </li>


              <li className="leftlisftitems">
                <img src="/assets/pic/r6.jpg" className='leftimg' ></img>
                <span className='setname'>Rmapal</span>
              </li>

              <li className="leftlisftitems">
                <img src="/assets/pic/r2.jpg" className='leftimg' ></img>
                <span className='setname'>Taruna</span>
              </li>

              <li className="leftlisftitems">
                <img src="/assets/pic/r1.jpg" className='leftimg' ></img>
                <span className='setname'>Jhon</span>
              </li>


              <li className="leftlisftitems">
                <img src="/assets/pic/r3.jpg" className='leftimg' ></img>
                <span className='setname'>Roshan</span>
              </li>



              <li className="leftlisftitems">
                <img src="/assets/pic/r4.jpg" className='leftimg' ></img>
                <span className='setname'>Alex</span>
              </li>



              <li className="leftlisftitems">
                <img src="/assets/pic/r5.jpg" className='leftimg' ></img>
                <span className='setname'>Sonia</span>
              </li>


              <li className="leftlisftitems">
                <img src="/assets/pic/r6.jpg" className='leftimg' ></img>
                <span className='setname'>Rmapal</span>
              </li>
            </ol>
           </div>
      </div>
    </div>
  )
}

export default Left
