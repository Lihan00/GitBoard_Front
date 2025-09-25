import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import PostDetail from "./components/postdetail/PostDetail";
import NewPost from "./components/newpost/NewPost";
import LegalDocuments from "./pages/LegalDocuments";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { useState } from "react";

function App( props ) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Routes>
            <Route excat path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route excat path="/home" element={<Home isLoggedIn={isLoggedIn}/>} />
            <Route excat path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn}/>} />
            <Route excat path="/profile" element={<Profile isLoggedIn={isLoggedIn}/>} />
            <Route excat path="/search" element={<Search isLoggedIn={isLoggedIn}/>} />
            <Route excat path="/postdetail" element={<PostDetail isLoggedIn={isLoggedIn}/>} />
            <Route excat path="/newpost" element={<NewPost isLoggedIn={isLoggedIn}/>} />
            <Route excat path="/legaldocuments" element={<LegalDocuments isLoggedIn={isLoggedIn}/>} />
            <Route excat path="/login" element={<Login/>} />
            <Route excat path="/register" element={<Register/>} />
        </Routes>
    );
}

export default App;
