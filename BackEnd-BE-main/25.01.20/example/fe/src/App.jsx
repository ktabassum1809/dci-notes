import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendLoginData = async (formData) => {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3000/users/login',
      data: formData,
      withCredentials: true,
    });

    if (response.status === 200) {
      alert(response.data.message);
    }

    console.log(response);
  };
  const sendRegisterData = async (formData) => {
    const response = await axios({
      method: 'POST',
      url: 'http://localhost:3000/users/register',
      data: formData,
      withCredentials: true,
    });

    if (response.status === 200) {
      alert(response.data.message);
    }

    console.log(response);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const formData = { email, password };
    console.log(formData);
    sendLoginData(formData);
  };
  const signUpHandler = (e) => {
    e.preventDefault();
    const formData = { email, password };
    console.log(formData);
    sendRegisterData(formData);
  };

  return (
    <>
      <h2>register</h2>
      <form action='' onSubmit={(e) => signUpHandler(e)}>
        <label htmlFor='email'>email</label>
        <input
          type='text'
          name='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>password</label>
        <input
          type='text'
          name='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='submit' />
      </form>
      <h2>login</h2>
      <form action='' onSubmit={(e) => loginHandler(e)}>
        <label htmlFor='email'>email</label>
        <input
          type='text'
          name='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>password</label>
        <input
          type='text'
          name='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='submit' />
      </form>
    </>
  );
}

export default App;
