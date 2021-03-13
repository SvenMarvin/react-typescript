import React from 'react'
import './layout.scss';
import bgImage from '../../../assets/images/bgImage.jpg'
<<<<<<< HEAD


interface layoutProps {
    isImage: boolean;
}

const Layout: React.FC<layoutProps> = props => {

    let bgImageContainer = <div>{props.children}</div>;
=======
import Nav from '../../../components/nav/Nav';

interface layoutProps {
    isImage: boolean;
    color: string | null;
}

const Layout: React.FC<layoutProps> = props => {
    const style: any = {
        backgroundColor: props.color,
        minHeight: '100vh'
    }

    let bgImageContainer = <div style={style}>{props.children}</div>;
>>>>>>> release/0.0.2
    if (props.isImage) {
        bgImageContainer = (
            <div id='bgImageContainer' style={{ backgroundImage: `url(${bgImage})` }}>
                {props.children}
            </div>
        )
    }

    return (
        <div id='layout-container'>
<<<<<<< HEAD
=======
            <Nav />
>>>>>>> release/0.0.2
            {bgImageContainer}
        </div>
    )
}

export default Layout;
