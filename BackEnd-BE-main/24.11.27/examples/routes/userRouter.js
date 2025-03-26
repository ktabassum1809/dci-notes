import {Router} from 'express'

const userRouter=Router()


/* 
- create a file for your specific route
- import Router from express
- initialize Router with a name that belongs to the specific route
- export the router
- import the router in the server file
- define the endpoint for the route in the server file, and call the router when a request hits that path
*/

userRouter.get('/',(req,res)=>res.send('get all users'))
userRouter.post('/',(req,res)=>res.send('add a single user'))


/* userRouter.get('/:id',(req,res)=>res.send('get a single user'))
userRouter.put('/:id',(req,res)=>res.send('update and replace a single user'))
userRouter.delete('/:id',(req,res)=>res.send('delete a single user')) */

userRouter.route('/:id')
.get((req,res)=>res.send('get a single user'))
.put((req,res)=>res.send('update and replace a single user'))
.delete((req,res)=>res.send('delete a single user'))

export default userRouter