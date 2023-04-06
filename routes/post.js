const Post = require("../models/Post");
const { route } = require("./user");
const router=require("express").Router();

// router.get("/",(req,res)=>{
//     res.send("post page")
// })


//create a post
router.post("/",async(req,res)=>{
    const newPost=new Post(req.body);
    try{

        const savePost=await newPost.save();
        res.status(200).json(savePost);

    }catch(err)
    {
        res.status(500).json(err);
    }
})

//delete a post
router.delete("/:id",async(req,res)=>{

    try{

        const post=await Post.findById(req.params.id);
        if(post.userId===req.body.userId)
        {
    
            await post.deleteOne();
            res.status(200).json("your post has been delete successfully")
        }
        else
        {
            res.status(403).json("your post is deleted")
        }
    }catch(err)
    {
        res.status(500).json(err);
    }
})



//update a post

router.put("/:id",async(req,res)=>{

    try{

        const post=await Post.findById(req.params.id);
        if(post.userId===req.body.userId)
        {
    
            await post.updateOne({$set:req.body});
            res.status(200).json("your post has been update successfully")
        }
        else
        {
            res.status(403).json("your post is update")
        }
    }catch(err)
    {
        res.status(500).json(err);
    }
})


//like and dislike a post

router.put("/:id/like",async(req,res)=>{
    try{

        const post=await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId))
        {
            await post.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("your post has been like")
        }
        else{

            await post.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("your post has been dislike")
        }
    }
    catch(err)
    {
        res.status(500).json(err);
    }
})

//get a post
router.get("/:id",async(req,res)=>{

    try{

        const post=await Post.findById(req.params.id);
        res.status(200).json(post);

    }catch(err)
    {
        res.status(500).json(err);
    }
})


//get timeline post

router.get("/timeline/all",async(req,res)=>{
    // let postArray=[];
    try{

        const currentUser=await User.findById(req.body.userId);
        const userPost=await Post.find({userId: currentUser._id});
        const frndPost=await Promise.all(
            currentUser.followings.map((friendId)=>{
               return Post.find({userId:friendId});
            })
           
        );
        res.json(userPost.concat(...frndPost))

    }catch(err)
    {
        res.status(500).json(err);
    }
})


module.exports=router;