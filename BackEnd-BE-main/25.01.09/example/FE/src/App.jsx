import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: '', desc: '',userId:'' });



  const getPosts = () => {
    fetch('http://localhost:8000/post')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
     
  };

  useEffect(() => {
    getPosts();
  }, []);

  const createPost = (e) => {
    e.preventDefault();

    setPost({
      ...post,
      [e.target.name]: e.target.value,
      author:posts[0].author._id
    });

 
  };

  console.log(posts);


  const submitHandler=()=>{
   

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post)
      };
      fetch('http://localhost:8000/post', requestOptions)
          .then(response => response.json())
          .then(data=>console.log(data))
          
  }
  

  return (
    <>
      <form action='' onSubmit={submitHandler}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' onChange={createPost} />
        <label htmlFor='desc'>Description</label>
        <input type='text' id='desc' name='desc' onChange={createPost} />
        <input type="submit" value="submit" />
      </form>

      {posts.map((post) => (
        <div key={post._id} className='postCard'>
          <h2 className='post'>{post.title}</h2>
          <p className='post'>{post.desc}</p>
     
          
      
          
        </div>
      ))}
    </>
  );
}

export default App;
