import React from 'react'
import "./feed.css"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import TagIcon from '@mui/icons-material/Tag';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Post from '../post/Post';

const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedcontainer'>
       
       <div className='feedcontainer1'>
        <span><img className='feedpic' src="/assets/pic/r2.jpg" alt="Taruna"></img></span>
        <span>
          <input className='inputfeed' placeholder="what's in your mind Taruna"></input>
        </span>
       </div>

       <div className='feedcontainer2'>
         <div className='feedflex'>
          <span><AddPhotoAlternateIcon htmlColor='red' /></span>
          <span>Photo or Video</span>
         </div>
       <div className='feedflex'>
          <span><TagIcon htmlColor='blue'/></span>
          <span>Tag</span>
         </div>


         <div className='feedflex'>
          <span><AddLocationIcon htmlColor='green'/></span>
          <span>Loaction</span>
         </div>

         <div className='feedflex'>
          <span><AddReactionIcon htmlColor='gold'/></span>
          <span>Feelings</span>
         </div>

         <div className='feedflex'>
          <span>
            <button className='feedbutton'>Share</button>
          </span>
          
         </div>
       </div>


      </div>

      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed