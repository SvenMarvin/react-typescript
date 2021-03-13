import React from 'react'
import './layout.scss';
import bgImage from '../../../assets/images/bgImage.jpg'
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
    if (props.isImage) {
        bgImageContainer = (
            <div id='bgImageContainer' style={{ backgroundImage: `url(${bgImage})` }}>
                {props.children}
            </div>
        )
    }

    return (
        <div id='layout-container'>
            <Nav />
            {bgImageContainer}
        </div>
    )
}

export default Layout;
