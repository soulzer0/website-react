import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebarMenu = props => {
    return (
        <div className='col-md-2 bg-danger'>
            <Link to='/admin/'> Home </Link>
            <Link to='/admin/portfolio' >Portfolio </Link>
            <Link to='/admin/login' >Login </Link>
        </div>
        
    )
}

export default AdminSidebarMenu;