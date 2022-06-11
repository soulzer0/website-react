import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from '../Components/Home'
import Portfolio from '../Components/Portfolio'
import Login from '../Components/Login'

const AdminRoutesContainer = props => {
    return (
        <div className='col-md-10'>
            <Routes>
                <Route exact path='/portfolio' element={<Portfolio />} />
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
            </Routes>
        </div>
    )
}

export default AdminRoutesContainer;