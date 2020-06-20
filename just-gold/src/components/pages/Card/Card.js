import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
    render() {
        var action = this.props.title == "We Sell" ? 'buy' : 'sell';
        return (
            <div className="card" style={{ width: '18rem', backgroundColor: '#252b48', borderRadius: '10px' }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ color: '#636781' }}>{this.props.title}</h5>
                    <h6 className="card-subtitle mt-2 text-muted" style={{ marginBottom: '-5px', padding: '0' }}><small>{this.props.info}</small></h6>
                    <p className="card-text"><h4 style={{ margin: '0', padding: '0' }}>{this.props.value}</h4>
                        <h4 style={{ margin: '0', padding: '0' }}>{this.props.unit}</h4>
                        {this.props.percentage > 0 ?
                            <font color="#00ff15">↑{this.props.percentage}%</font>
                            : <font color="red">↓{this.props.percentage}%</font>}
                    </p>

                    <div className="row justify-content-between">
                        <div className="col"></div>
                        <div className="col text-center pt-1 rounded mr-2" style={{ height: '35px', width: '130px', backgroundColor: action == 'buy' ? '#00ff15' : 'red' }}>
                            {action == 'buy' ? 'Buy Gold' : 'Sell Gold'}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

Card.propTypes = {
    title: PropTypes.string
    //to do
}
export default Card;

