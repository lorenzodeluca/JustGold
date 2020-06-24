import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import './GoldChart.css';

export default class GoldChart extends React.Component {
    render() {
        return (
            <div className="graph col">
                <TradingViewWidget BarStyles="BarStyles.LINE" symbol="TVC:GOLD" theme={Themes.DARK} height="490px" width="780" hide_top_toolbar="true" hide_legend='true' />
                <div class="graph-title">Gold price</div>
            </div>
        );
    };
}