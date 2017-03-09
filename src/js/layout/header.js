import React from 'react'
import {Link} from 'react-router';

class Header extends React.Component {
    static get headerCss() {
        return {
            container: {
                // width: '80px',
                backgroundColor: 'lightblue',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end'
            },
            listItem: {
                padding: '12px 8px',
                listStyleType: 'none'
            },
            anchor: {
                color: 'aliceblue',
                textDecoration: 'none',
                cursor: 'pointer',
                fontFamily: '"Century Gothic",CenturyGothic,AppleGothic,sans-serif'
            }
        };
    };

    render() {
        return (
            <div>
                <ul style={Header.headerCss.container}>
                    <li style={Header.headerCss.listItem}>
                        <Link style={Header.headerCss.anchor} to={'/home'}>Home</Link>
                    </li>
                    <li style={Header.headerCss.listItem}>
                        <Link style={Header.headerCss.anchor} to={'/about'}>About</Link>
                    </li>
                    <li style={Header.headerCss.listItem}>
                        <Link style={Header.headerCss.anchor} to={'/exchange'}>Exchange</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Header;