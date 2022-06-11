import React from "react";

const Footer = props => {
    return (
        <footer className='container-fluid text-center'>
            <a href='#myPage' title='To Top'>
                <span className='glyphicon glyphicon-chevron-up'></span>
            </a>
            <p>Site criado com React e Bootstrap</p>
        </footer>
    )
}

export default Footer;