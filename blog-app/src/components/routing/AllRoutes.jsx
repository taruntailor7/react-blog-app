import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Home } from '../../pages/home/Home';
import { Login } from '../../pages/login/Login';
import { Register } from '../../pages/register/Register';
import { Settings } from '../../pages/settings/Settings';
import { Single } from '../../pages/single/Single';
import Write from '../../pages/write/Write';

export const AllRoutes = () => {
  return (
    <Routes>
         <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/single" element={<Single />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/write" element={<Write />}></Route>
    </Routes>
  );
};
