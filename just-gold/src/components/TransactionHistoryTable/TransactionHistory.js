import React from 'react';
import './TransactionHistory.css';

const useSortableData = (items, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return { items: sortedItems, requestSort, sortConfig };
};

const TransactionHistoryTable = (props) => {
    const { items, requestSort, sortConfig } = useSortableData(props.transactions);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
        <table className="table table-borderless transactions-table t-table">
            <thead>
                <tr className="t-header">
                    <th scope="col th-name">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRODUCT NAME
                            <button
                            type="button"
                            onClick={() => requestSort('name')}
                            className={"sortingButton " + getClassNamesFor('name')}
                        >&#x21D5;</button>
                    </th>
                    <th scope="col">
                        DATE TIME
                        <button
                            type="button"
                            onClick={() => requestSort('datetime')}
                            className={"sortingButton " + getClassNamesFor('datetime')}
                        >&#x21D5;</button>
                    </th>
                    <th scope="col">
                        PRICE
                        <button
                            type="button"
                            onClick={() => requestSort('price')}
                            className={"sortingButton " + getClassNamesFor('price')}
                        >&#x21D5;</button>

                    </th>
                    <th scope="col">
                        QUANTITY
                        <button
                            type="button"
                            onClick={() => requestSort('quantity')}
                            className={"sortingButton " + getClassNamesFor('quantity')}
                        >&#x21D5;</button>

                    </th>
                    <th scope="col">
                        AMOUNT
                    <button
                            type="button"
                            onClick={() => requestSort('amount')}
                            className={"sortingButton " + getClassNamesFor('amount')}
                        >&#x21D5;</button>

                    </th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <tr className="history-line" key={item.id}>
                        <th className="t-name" scope="row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.name}</th>
                        <td className="t-date">{item.datetime}</td>
                        <td className="t-price">${item.price}</td>
                        <td className="t-quantity">{item.quantity}</td>
                        <td className="t-amount">{item.amount}</td>
                    </tr>
                ))}
                <p>&nbsp;</p>
            </tbody>
        </table>
    );
};


export default class TransactionHistory extends React.Component {
    render() {
        return (
            <div className="App">
                <TransactionHistoryTable
                    transactions={this.props.historydata}
                />
            </div>
        );
    };
}