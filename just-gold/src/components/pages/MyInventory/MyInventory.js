import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import '../../../theme.css';
import sampleuserimg from './sampleprofile.png';
import './MyInventory.css';
import TransactionHistory from '../../TransactionHistoryTable/TransactionHistory';

class MyInventory extends React.Component {
    state = {
        transactions: [
            {
                id: 1,
                name: "Pocket Dron 2.45",
                datetime: "2015-03-25T12:00:00Z",
                price: "129.99",
                unit: "$",
                quantity: "32",
                amount: "843181.58"
            },
            {
                id: 2,
                name: "Orange juice",
                datetime: "2017-03-25T12:00:00Z",
                price: "432.99",
                unit: "$",
                quantity: "32",
                amount: "843181.58"
            }
        ]
    }

    render() {
        return (
            <div className="home">
                <header className="pb-5 row justify-content-between">
                    <div className="col">{/* div needed for spacing */} </div>
                    <div className="col-sm" className="browse">
                        <Link className="profileimg" to="/"><img src={sampleuserimg}></img></Link>
                    </div>
                </header>
                <main >
                    <div className="row">
                        <div className="sidebar-logo col col-lg-2">
                            <div className="col-sm" className="logo align-items-center">
                                <img className="logo-img" src={require('../../../logo.png')} />
                                <h1 className="appname">
                                    <font color="yellow">Just</font>
                            Gold</h1>
                            </div>
                        </div>
                        <div className="maincontent-header col-md-auto"><h1>My Inventory</h1></div>
                    </div>
                    <div className="row pt-5">
                        <div className="sidebar col col-lg-2">
                            <h6 className="menu-name">MAIN</h6>
                            <div className="browse sidebar-list">
                                <ul>
                                    <li><Link className="link" to="/MyInventory">My Inventory</Link></li>
                                    <li><Link className="link" to="#">Buy</Link></li>
                                    <li><Link className="link" to="#">Sell</Link></li>
                                    <li><Link className="link" to="#">Pickup</Link></li>
                                    <li><Link className="link" to="#">Settings</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="maincontent col-md-auto">
                            <div className="row">
                                <div className="col-md-auto">
                                    <Card title='My Gold' info="" value="5 ounces" unit="" percentage="5.25" extra="Since last search" hidebutton="true"></Card>
                                </div>
                                <div className="col-md-auto">
                                    <Card title='Gold Picked-Up' info="" value="HKD$30,200" unit="" percentage="-1.25" extra="Since last search" hidebutton="true"></Card>
                                </div>
                                <div className="col-md-auto">
                                    <Card title='We Buy' info="" value="HKD$30,200" unit="" percentage="3.72" extra="Since last search" hidebutton="true"></Card>
                                </div>
                            </div>
                            <div className="pb-5"></div>
                            <div className="transaction-history pt-4">
                                <div className="transactions-header pb-4 pt-2 row justify-content-between">
                                    <h2 className="col pl-5">Transaction History</h2>
                                    <div className="col" className="export">Export⇩</div>
                                </div>
                                <TransactionHistory historydata={this.state.transactions} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    };
}
export default MyInventory;
