import React, { Component } from "react";

import AdminSidebarMenu from './Layout/AdminSidebarMenu'
import AdminRoutesContainer from './Layout/AdminRoutesContainer'

class Admin extends Component {
    render(){
        return (
            <div className="row">

                    <AdminSidebarMenu />
                    <AdminRoutesContainer />
                
                <p>{JSON.stringify(this.props)}</p>

            </div>
        )
    }
}

export default Admin;