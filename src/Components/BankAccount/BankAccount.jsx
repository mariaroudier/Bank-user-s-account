import React from 'react';
import './bankAccount.css'


function BankAccount({type,cardNumber,amount,description}) {

      return (
            <div className="account" >
                  <div className="account-content-wrapper">
                        <h3 className="account-title" >{type} {cardNumber}</h3>
                        <p className="account-amount" >${amount}</p>
                        <p className="account-amount-description" >{description}</p>
                  </div>
                  <div className="box-transaction-button" >
                        <button className="transaction-button" >View transactions</button>
                  </div>
            </div>
// сделать точки запятые между цифрами в сумме на счету
      )
}

export default BankAccount;