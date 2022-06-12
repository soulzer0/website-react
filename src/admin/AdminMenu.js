import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = props => {
    return (
        <div className='list-group col-md-2'>
            <li className='list-group-item list-group-item-action active'>
                Selecione uma opção
            </li>
            <Link to='/admin/' className='list-group-item list-group-item-action'>HOME</Link>
            <Link to='/admin/portfolio' className='list-group-item list-group-item-action'>portfolio</Link>
        </div>
    )
}

export default AdminMenu;