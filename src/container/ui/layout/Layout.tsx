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

    let bgImageContainer = <div style={style}><Nav />{props.children}</div>;
    if (props.isImage) {
        bgImageContainer = (
            <div id='bgImageContainer' style={{ backgroundImage: `url(${bgImage})` }}>
                <Nav />
                {props.children}
            </div>
        )
    }

    return (
        <div id='layout_container'>
            {bgImageContainer}
        </div>
    )
}

export default Layout;
