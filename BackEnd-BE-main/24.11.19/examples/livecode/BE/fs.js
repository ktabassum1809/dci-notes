import express from 'express';
import fs from 'fs/promises';
const app = express();
const PORT = process.env.PORT || 5001;
import cors from 'cors';

app.use(express.json());
app.use(cors());

//ACCESSING PROCESS.ARGV

//node server.js 'yourinput'
//grab the passed in value from process.argv.slice(2)[0]

const args = process.argv.slice(2).join(',');
console.log(`args:   `,args);




//WRITING FILES


//fs.writeFile('name of file',value)
//.then ===> console.log a message or do something else if you wish
//.catch any errors




//READING FILES
//fs.readFile('name of file','utf-8')
//.then ===> console.log the content of the file
//.catch any errors

/* fs.writeFile('users.txt',args)
.then(()=>console.log(`user.txt file was created with content ${args}`))
.catch(e=>console.log(e.message))  */

fs.readFile('users.txt', { encoding: 'utf-8' })
  .then((data) =>
    fs.writeFile('users.txt', `${data} ${JSON.stringify({ person: args })}`)
  )
  .catch((e) => console.log(e.message));


  
app.get('/users', (req, res) => {
  fs.readFile('users.txt', { encoding: 'utf-8' })
    .then((data) => res.send(data))
    .catch((e) => console.log(e.message));
});






app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
