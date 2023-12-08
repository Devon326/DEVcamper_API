
const { post } = require("../models");



exports.createPosts = async (req, res) => {
  try{
    const {
      title,
      body,
      userId,
    } = req.body

    const CreatedPost = await post.create({
      title,
      body,
      userId,
    });


    return res.status(201).json({
      message: "Post created successfully",
      data: CreatedPost,
    });


  }catch(error){
    console.log(error)
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
}


exports.getPosts = async (req, res) => {

  try{


    const posts = await post.findAll();


    return res.status(200).json({
      message: "Posts fetched successfully",
      data: posts,
    });


  }catch(error){
    console.log(error)
    return res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
  }
