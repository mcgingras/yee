import React from 'react';

const NavItem = (props) => {
    
    return(
        <div className="navitem">
            <h1 className="navitem--title">{props.title}</h1>
            <div>
                {props.body}
            </div>
        </div>
    )

}

export default NavItem;