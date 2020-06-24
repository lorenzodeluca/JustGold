import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import './GoldChart.css';

export default class GoldChart extends React.Component {
    render() {
        return (
            <div className="graph col">
                <TradingViewWidget BarStyles="BarStyles.LINE" symbol="XAUHKD" theme={Themes.DARK} height={this.props.height} width={this.props.width} />
                <div class="graph-title"></div>
            </div>
        );
    };
}