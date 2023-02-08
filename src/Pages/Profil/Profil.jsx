import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { loginFetch, saveProfil } from "../../service/API";
import { getFirstName } from "../../redux/firstNameReducer";
import { getLastName } from "../../redux/lastNameReducer";
import BankAccount from "../../Components/BankAccount/BankAccount";
import { balance } from "../../data/amount";
import "./profil.css";


function Profil() {
      
      const firstName = useSelector((state) => state.firstName.value);
      const lastName = useSelector((state) => state.lastName.value)
      const token = useSelector((state) => state.token.value);
  
      const [newFirstName, setNewFirstName] = useState("")
      const [newLastName, setNewLastName] = useState("")
  
      // Use Effect
      const dispatch = useDispatch();
      useEffect(() => {
                  const user = loginFetch(token);
                  user.then(obj => {
                        dispatch(getFirstName(obj.firstName));
                        dispatch(getLastName(obj.lastName))
                  });
      });

      const [formHidden, setVisible] = useState(true)

      // to edit the name
      const handleEdit = () => {
            setVisible(!formHidden) 
      }

      // to save
      const handleSave = () => {
            setVisible(true)
            dispatch(getFirstName(newFirstName));
            dispatch(getLastName(newLastName));
            const newNameData = 
                  {
                        "firstName": newFirstName, 
                        "lastName": newLastName
                  };
            saveProfil(token, newNameData);
      }


      // to cancel
      const handleCancel = () => {
            setVisible(true)
      }

      if(token === 0){
            return <Navigate to="/login" />
      }

      return(
            <main className="main bg-dark">
                  <div className="header">
                        <h1 className='greetings'>Welcome back<br/>
                        <span className="greetings-name" style={{display: formHidden ? 'flex': 'none' }}>{firstName} {lastName}!</span>
                        </h1>
                        <button className="edit-button" type="button" onClick={handleEdit} style={{display: formHidden ? 'flex': 'none' }}>Edit Name</button>
                        <div className="edit-form" style={{display: !formHidden ? 'flex' : 'none' }}>
                              <form name="edit">
                                    <div className="edit-input">
                                          <input type="text" placeholder={firstName} onChange={e => setNewFirstName(e.target.value)} required />
                                    </div>
                                    <div className="edit-input">
                                          <input type="text" placeholder={lastName} onChange={e => setNewLastName(e.target.value)} required />
                                    </div>
                              </form>
                              <div className="btn-form">
                                    <button type="submit" className="save-button" onClick={handleSave}>Save</button>
                                    <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                              </div>
                        </div>
                  </div>
                  <h2 className="sr-only">Accounts</h2>
                  <section className='accounts'>
                        {     
                              balance.map(el => {
                                    return <BankAccount type={el.type} cardNumber={`x${el.cardNumber}`}  amount={el.balance} description={el.description} key={el.key}/>
                              })
                        }
                  </section>
            </main>


//   <!-- Code injected by live-server -->
// <script>
// 	// <![CDATA[  <-- For SVG support
// 	if ('WebSocket' in window) {
// 		(function () {
// 			function refreshCSS() {
// 				var sheets = [].slice.call(document.getElementsByTagName("link"));
// 				var head = document.getElementsByTagName("head")[0];
// 				for (var i = 0; i < sheets.length; ++i) {
// 					var elem = sheets[i];
// 					var parent = elem.parentElement || head;
// 					parent.removeChild(elem);
// 					var rel = elem.rel;
// 					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
// 						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
// 						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
// 					}
// 					parent.appendChild(elem);
// 				}
// 			}
// 			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
// 			var address = protocol + window.location.host + window.location.pathname + '/ws';
// 			var socket = new WebSocket(address);
// 			socket.onmessage = function (msg) {
// 				if (msg.data == 'reload') window.location.reload();
// 				else if (msg.data == 'refreshcss') refreshCSS();
// 			};
// 			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
// 				console.log('Live reload enabled.');
// 				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
// 			}
// 		})();
// 	}
// 	else {
// 		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
// 	}
// 	// ]]>
// </script>
      )

}

export default Profil;