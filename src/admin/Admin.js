import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

import AdminPortfolio from './AdminPortfolio';
import AdminHome from './AdminHome';
import AdminMenu from './AdminMenu';

class Admin extends Component {

    render(){
        return (
            <div className='row'>
                
                <AdminMenu />
                <div className='col-md-10'>
                    <h2>Painel Administrativo</h2>
                    <div className='container-fluid'>
                        <Routes>
                            {/* <Route path='/admin/*' element={<AdminMenu />}></Route> */}

                            <Route path={'/portfolio'} element={<AdminPortfolio />}></Route>
                            <Route path={'/'} element={<AdminHome />}></Route>

                        </Routes>
                    </div>
                </div>
                

            </div>
        )
    }
}

export default Admin;