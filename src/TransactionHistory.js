import React from 'react';
import { withRouter } from 'react-router';
import Bank from './Bank';

class TransactionHistory extends React.Component{
    render(){
       let history = Bank.getHistory();
        return( <div className="container">
                <h1>Transaction History</h1>
                <table className ="table">
                    <tr>
                        <th>Type of Transaction</th>
                        <th>Amount</th>
                    </tr>
                    {
                        history.map(h=><tr>
                            <td>{h.typeOfTransaction}</td>
                        <td>{h.amount}</td>
                        </tr>)
                    }
                        
                </table>
            </div>
        )
    }
}
export default withRouter(TransactionHistory);