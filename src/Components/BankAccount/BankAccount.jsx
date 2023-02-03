import React from 'react';
import balance from '../../data/amount'

function BankAccount() {

      return (
            <div class="account">
                  <div class="account-content-wrapper">
                        <h3 class="account-title">Argent Bank Checking (x8349)</h3>
                        <p class="account-amount">$2,082.79</p>
                        <p class="account-amount-description">Available Balance</p>
                  </div>
                  <div class="account-content-wrapper cta">
                        <button class="transaction-button">View transactions</button>
                  </div>
            </div>
// if credit card Current Balance
// сделать точки запятые между цифрами в сумме на счету
// добавить валюту знак доллара
// добавить х перед номером карты
      )
}

export default BankAccount;