import { users } from '../users.js';

export const getAllUsers = (req, res) => {
  res.send(users);
};

export const addUser = (req, res,next) => {


  if(!req.body.email||!req.body.password){
    const error=new Error()
    error.status=406
    return next(error)
  }
  const userToAdd=req.body
  users.push(userToAdd);
  res.send(users);
};

export const getSingleUser = (req, res, next) => {
  const userFound = users.find((user) => user.id == req.params.id);
  if (!userFound) {
    const error = new Error('Sorry, user not found');
    error.status=400
   return next(error);
  }
  
    console.log(
      'I should not be executed here anymore, because the errorHandler is sending a response'
    );
  
    res.send(userFound);
  

 
};
export const login = (req, res, next) => {
  const userID=Number(req.params.id)

  const userFound = users.find((user) => user.id == req.params.id);

  if(isNaN(userID)){

    const error=new Error("Sorry, invalid ID")
    error.status=400
    return next(error)
  }
  if(!userFound){
    const error=new Error("Sorry, user not found")
    error.status=400
    return next(error)
  }

  if(!req.body.email ||!req.body.password){
    const error=new Error("Sorry, credentials missing")
    error.status=400
    return next(error)
  }
  if(userFound.password !== req.body.password){
    const error=new Error("Sorry, credentials don't match")
    error.status=400
    return next(error)
  }


  
    res.send('User logged in');
  
};



export const deleteSingleUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userFound = users.find((user) => user.id === userId);

  const updatedArrayOfUsers = users.filter((user) => user.id !== userFound.id);

  res.send({ message: 'user deleted', updatedArrayOfUsers });
};






