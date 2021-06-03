import React from 'react';
import {Link} from 'react-router-dom';


function Navbar(props) {
    console.log(props.links);
    return (
        <header>
            <nav>
                <ul>
                    {
                        props.links.map(
                            (link, i) => <li key={i}>
                            <Link to={link.href}>{link.label}</Link>
                            </li>)
                    }
                </ul>
            </nav>
        </header>
    );


}


export default Navbar;