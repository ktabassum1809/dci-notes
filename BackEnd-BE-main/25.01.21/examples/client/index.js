/* import axios from 'axios'; */

const form = document.querySelector('form');
const avatar = document.querySelector('#avatar');

const submitHandler = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  const files = formData.append('avatar', avatar.files[0]);



  const res=await fetch('http://localhost:3000/uploads',{
    method:'POST',
    body:formData
  
    })
    console.log(res)
    const data=await res.json()
    console.log(data)
};
form.addEventListener('submit', submitHandler);
