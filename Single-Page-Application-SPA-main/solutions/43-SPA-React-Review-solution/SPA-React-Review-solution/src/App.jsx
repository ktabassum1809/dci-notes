import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import ContactForm from './components/ContactForm';
import DisplayUser from './components/DisplayUser';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import { Context } from './context';

import './App.css';
import FriendsList from './components/FriendsList';

const App = () => {
    const [user, setUser] = useState({
        name: 'John',
        surname: 'Doe',
    });
    return (
        <Context.Provider value={{ user, setUser }}>
            <main className='App'>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<DisplayUser />} />
                        <Route path='contact' element={<ContactForm />} />
                        <Route path='friends' element={<FriendsList />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </main>
        </Context.Provider>
    );
};
export default App;
