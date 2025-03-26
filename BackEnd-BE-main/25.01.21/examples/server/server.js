import express from 'express';
import cors from 'cors';


//APP INIT
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));
app.use(express.urlencoded({ extended: true }));




////////////////  MULTER    ////////////////
import multer from 'multer'


const storageConfig=multer.diskStorage({
dest: function(req,file,cb){
    cb(null,'uploads/images')
},
filename:function(req,file,cb){
    cb(null,Date.now()+'-'+file.originalname)
}

})

const upload = multer({ storage:storageConfig });

////////////////  MULTER    ////////////////



app.post('/uploads',upload.single('avatar'),async (req,res,next)=>{
  //console.log(req.body)
  console.log(req.file)

  res.send('uploads recieved')
})

//START LISTENING ON PORT

const port =  3000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});


