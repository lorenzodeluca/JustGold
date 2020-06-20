import React from 'react';
import '../../../theme.css';
import './home.css';

class MyInventory extends React.Component {
    render() {
        return (
            <div className="myinventory">
                <div className="container">
                    <div className="homenav">
                        <img className="logo" src={require('../../../logo.png')} />
                        <h1 className="appname">JustGold</h1>
                        <div className="browse">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Home;
