import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './app.css';
import NavBar from './components/Navigetion/NavBar';
import Blog from './Pages/Blog';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import Home from './Pages/Home';
import User from './Pages/User';

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:title" element={<Blog />} />
                <Route path="/user" element={<User />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
