import React from 'react'
import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Post = () => {
  return (
    <div>
      <div className='post'>
        <div className='posttop'>
        <div className='postpart'>

          <div >
            <img className='postimg' src="/assets/pic/r2.jpg"></img>
          </div>
          <div className='postname'>Taruna</div>
          <div className='posttime'>5 min ago</div>
            </div>

          <div className='posticon'> <MoreVertIcon/></div>
        </div>

        <div className='postmid'>
            <div className='postmidcmnt'> Hello everyone!</div>
            <div><img className='postmidimg' src="/assets/pic/r1.jpg"></img></div>
        </div>


        <div className='postbottom'>
            <div className='postlike'>
               <div><ThumbUpIcon htmlColor='blue'/></div>
               <div><FavoriteIcon htmlColor='red'/></div>
               <div className='postlikecmnt'>33 people like it</div>
            </div>
            <div className='cmnt'>9 comments</div>
        </div>
      </div>
    </div>
  )
}

export default Post
