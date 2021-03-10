import React from 'react'
import './layout.scss';
import bgImage from '../../../assets/images/bgImage.jpg'


interface layoutProps {
    isImage: boolean;
}

const Layout: React.FC<layoutProps> = props => {

    let bgImageContainer = <div>{props.children}</div>;
    if (props.isImage) {
        bgImageContainer = (
            <div id='bgImageContainer' style={{ backgroundImage: `url(${bgImage})` }}>
                {props.children}
            </div>
        )
    }

    return (
        <div id='layout-container'>
            {bgImageContainer}
        </div>
    )
}

export default Layout;
