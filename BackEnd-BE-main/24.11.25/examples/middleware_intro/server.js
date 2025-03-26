import express from 'express';
import cors from 'cors';
import { allrequests_middleware,specificRoute_middleware,getOnly_middleware,getSingleUser_middleware,addSingleUser_middleware,first_middleware,second_middleware,last_middleware } from './middlewares/simple_middlewares.js';



const port = process.env.PORT || 5001;
const app = express();



// built-in middleware
app.use(express.json()); // built-in request body parser middleware

// third party middlewares
app.use(cors()); // third-party cors policy handler middleware





// ******************  A middleware can be called on any request on any Route  **************

//app.use(allrequests_middleware)


// ******************  A middleware can be called on all requests on a specific Route  **************

//app.use('/specificRoute',specificRoute_middleware)


// ******************  A middleware can be called on any request method on a specific Route  **************

app.get('/specificRoute',getOnly_middleware)


// ******************  A middleware can be called on a specific request method on a specific Route  **************

app.get('/users/:id',getSingleUser_middleware)
app.post('/users/register',addSingleUser_middleware)



// ******************  Middlewares can be chained, and called one after the other, using the "next()" keyword. THE ORDER DOES MATTER  **************

/* app.get('/chained',first_middleware)
app.get('/chained',second_middleware)
app.get('/chained',last_middleware) */


app.get('/chained',first_middleware,second_middleware,last_middleware,(req,res)=>{
    res.send('this is the response , the cycle is closed, all 3 middlewares had been called previously ')
})



/*  app.post('/users/register',sanitizeInput,validateData,hashPassword,(req,res)=>{

    //save the user at the end of the cycle or send an error saying some info was missing or incorrect
    res.send('user was registered / sorry, your email is not in the right format')
})  */





app.listen(port, console.log(`server is running on port: ${port} 🚀`));
