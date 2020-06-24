import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import '../../../theme.css';
import './home.css';
import stonks from './stonks.png';
import GoldChart from '../../GoldChart/GoldChart';

class Home extends React.Component {
    state = {
    }

    render() {
        return (
            <div className="home">
                <div className="container">
                    <header className="pb-5 row justify-content-between">
                        <div className="col-sm" className="logo align-items-center">
                            <img className="logo-img" src={require('../../../logo.png')} />
                            <h1 className="appname">
                                <font color="yellow">Just</font>
                            Gold</h1>
                        </div>
                        <div className="col-sm" className="browse">
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="#">About</Link>
                            <Link className="link" to="#">Help</Link>
                            <Link className="link" to="#">Contact</Link>
                            <Link className="link" to="/login">Login</Link>
                        </div>
                    </header>
                    <main className="pt-1">
                        <div className="datas row">
                            <div className="sellbuy-cards col-md-auto">
                                <div className="wesell-card col">
                                    <Card title='We Sell' info="500kg available" value="HKD$45,320" unit="per ounce" percentage="5.25"></Card>
                                </div>
                                <div className="webuy-card col pt-4">
                                    <Card title='We Buy' info="500kg available" value="HKD$30,200" unit="per ounce" percentage="5.25"></Card>
                                </div>
                            </div>
                            <div className=" col">
                                <GoldChart height="490px" width="780"/>
                            </div>
                        </div>

                        <h3 className="text-center pt-4 pb-4">
                            Just gold is Hong Kong's most Trusted Gold dealer.
                            <br />
                            <b>We have sold more than 4,500 gold ounches on this site</b>
                        </h3>

                        <div className="row" style={{ backgroundColor: '#452d8b' }}>
                            <div className="col" style={{ margin: "auto" }}>
                                <img height="250px" className="rounded mx-auto d-block" src={stonks}></img>
                            </div>
                            <div className="col pt-5 pb-5">
                                <p>
                                    <h2>
                                        <b>What</b> is Digital Gold
                                </h2>
                                </p>
                                <p>Digital Gold is a cost-effective, convenient, and secure way to invest in physical gold using digital speed.</p>

                                <p>Gold is a universally-recognized means for investors to preserve wealth and protect against financial calamity including inflation, currency fluctuation, market collapse, and societal unrest. However gold is expensive to purchase, transfer, and store.</p>

                                <p>With Digital Gold, you receive the stability and wealth preservation of physical gold and and cost-efficiencies and speed of technology.</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    };
}

export default Home;
