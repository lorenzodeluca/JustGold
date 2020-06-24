import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

class SideBar extends React.Component {

    render() {
        return (
            <div className="sidebar col col-lg-2">
                <h6 className="menu-name">MAIN</h6>
                <div className="browse sidebar-list">
                    <ul>
                        <li><Link className="link" to="/MyInventory">My Inventory</Link></li>
                        <li><Link className="link" to="/buy">Buy</Link></li>
                        <li><Link className="link" to="/sell">Sell</Link></li>
                        <li><Link className="link" to="#">Pickup</Link></li>
                        <li><Link className="link" to="#">Settings</Link></li>
                    </ul>
                </div>
            </div>
        );
    };
}
export default SideBar;
