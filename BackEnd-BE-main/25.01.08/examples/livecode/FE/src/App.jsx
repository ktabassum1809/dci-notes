import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPages, setNumBerOfPages] = useState(0);


  const getComments = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/comments?page=${currentPage}`
      
    );


    setCurrentPage(data.pagination.currentPage);
    setNumBerOfPages(data.pagination.numberOfPages);
    setComments(data.pagination.totalComments);
  };

  useEffect(() => {
    getComments();
  }, [currentPage]);

  const changeCurrentPage = (e) => {
    const direction = e.target.innerText;


    if (currentPage > 0 && direction === 'prev')
      setCurrentPage((currentPage) => currentPage - 1);
    if (direction === 'next') setCurrentPage((currentPage) => currentPage + 1);
  };
  


  return (
    <>
      <h1>Comments</h1>
  
     {/*  <div>
        <label htmlFor='limit'>Set limit per page</label>
        <input
          type='text'
          name='limit'
          id='limit'
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
      </div> */}

      <button
        disabled={currentPage === 1}
        className='directionButton'
        onClick={changeCurrentPage}
      >
        prev
      </button>
      <button
        disabled={currentPage + 1 > numberOfPages}
       
        className='directionButton'
        onClick={changeCurrentPage}
      >
        next
      </button>
      <div>
        {comments.map((comment) => (
          <div key={comment._id} className='commentCard'>
            <p className='comment'>{comment.content}</p>
           
          </div>
        ))}
      </div>
    </>
  );
}

export default App;





