import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({});
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState('');



  



  const submitHandler = async (e) => {
    e.preventDefault();

    formData.price=price
    formData.title=title



    await axios.patch(
      'http://localhost:5001/records/update/675963c4da28d50d5dfbe46b',
      formData
    );

    //console.log(data);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor='price'>price</label>
        <input
          type='text'
          name='price'
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor='title'>title</label>
        <input
          type='text'
          name='title'
          onChange={(e) => setTitle(e.target.value)}
        />

        <input type='submit' value='Send me!' />
      </form>
    </>
  );
}

export default App;
