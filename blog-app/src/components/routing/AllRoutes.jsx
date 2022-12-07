import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom";
import { Context } from '../../context/context';
import { Home } from '../../pages/home/Home';
import { Login } from '../../pages/login/Login';
import { NotFound } from '../../pages/notfound/NotFound';
import { Register } from '../../pages/register/Register';
import { Settings } from '../../pages/settings/Settings';
import { Single } from '../../pages/single/Single';
import Write from '../../pages/write/Write';

export const AllRoutes = () => {
  const {user} = useContext(Context)
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/register" element={user ? <Home /> : <Register />}></Route>
      <Route path="/login" element={user ? <Home /> : <Login />}></Route>
      <Route path="/write" element={user ? <Write /> : <Register />}></Route>
      <Route path="/settings" element={user ? <Settings /> : <Register />}></Route>
      <Route path="/post/:postId" element={<Single />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
