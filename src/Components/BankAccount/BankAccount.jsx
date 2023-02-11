import React from 'react';
import './bankAccount.css'


function BankAccount({type,cardNumber,amount,description,styleType}) {
      return (
            <div className={styleType === "dark" ? "account" : "account account-light" } >
                  <div className="account-content-wrapper">
                        <h3 className={styleType === "dark" ? "account-title" : "account-title dark-text"} >{type} {cardNumber}</h3>
                        <p className={styleType === "dark" ? "account-amount" : "account-amount dark-text bold-text"} >${amount}</p>
                        <p className={styleType === "dark" ? "account-amount-description" : "account-amount-description dark-text"}>{description}</p>
                  </div>
                  <div className="box-transaction-button" >
                        <button className={styleType === "dark" ? "transaction-dark-button" : "transaction-light-button"}>View transactions</button>
                  </div>
            </div>
      )
}

export default BankAccount;