import { Router } from 'express';
import { Comment } from '../models/commentModel.js';
import seedData from '../data/comments.js';

const commentRouter = Router();

commentRouter
  .route('/')

  .get(async (req, res, next) => {
 
    const currentPage = parseInt(req.query.page) || 1; // Default to page 1
    
    console.log(currentPage)
    
    const limit =  5;          
    const offset = currentPage === 1 ? 0 : 5 + (currentPage - 2) * 5;
 
    const allComments = await Comment.find();
    const allCommentsCount = allComments.length;
    const numberOfPages = Math.ceil(allCommentsCount / limit);

    //const totalComments = await Comment.find().skip(currentPage).limit(limit);
    const totalComments = await Comment.find().skip(offset).limit(limit);

    res
      .status(200)
      .send({
        pagination: {
          currentPage,
          numberOfPages,
          totalComments
        },
      });
  })
  .post(async (req, res, next) => {
    const newcomment = req.body;
    await Comment.create(newcomment);
    const existingComments = await Comment.find();
    res.status(201).send(existingComments);
  });

  commentRouter
  .route('/filter')
  .get(async(req,res,next)=>{

    const comments=await Comment.find().where('role')
  .equals('admin').where('age').lt('30').sort({ age: 'asc' })

    res.send(comments)

  })


commentRouter
  .route('/:id')
  .get(async (req, res, next) => {
    const singlecomment = await comment.findById(req.params.id);
    res.status(200).send(singlecomment);
  })
  .delete(async (req, res, next) => {
    const singlecomment = await comment.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .send({ message: 'The following comment was deleted', singlecomment });
  })
  .put(async (req, res, next) => {
    const singlecomment = await comment.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    const updatedcomment = await comment.findById(req.params.id);
    res
      .status(200)
      .send({ message: 'The following comment was updated', updatedcomment });
  });

commentRouter.route('/seed').post(async (req, res, next) => {
  try {
    const comments = seedData.map((comment) => new Comment(comment));

    await Comment.deleteMany();
    console.log('Data Deleted successfuly');

    await Comment.insertMany(comments);
    res.status(201).send(comments);
  } catch (error) {
    next(error);
  }
});











/* 
  .get(async (req, res, next) => {
    const currentPage = parseInt(req.query.page) || 0;
    console.log(currentPage);
    const limit = req.query.limit || 0;
    const allComments = await Comment.find();
    parseInt(limit);
    const totalCommentCount = allComments.length;

    const numberOfPages = totalCommentCount / limit;

    const comments = await Comment.find({})
      .skip(currentPage * limit)
      .limit(limit)
      .populate('user', 'name')
      .exec();

    res.send({
      pagination: { currentPage, numberOfPages, totalCommentCount },
      comments,
    });
  }) */

export default commentRouter;
