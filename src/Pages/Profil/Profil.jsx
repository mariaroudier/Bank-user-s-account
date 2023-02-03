import React from 'react';
import './profil.css';
import {useNavigate} from 'react-router-dom';
import BankAccount from '../../Components/BankAccount/BankAccount'

function Profil() {
return(
      
//     <nav class="main-nav">
//       <a class="main-nav-logo" href="./index.html">
//         <img class="main-nav-logo-image" src="./img/argentBankLogo.png" alt="Argent Bank Logo">
//         <h1 class="sr-only">Argent Bank</h1>
//       </a>
//       <div>
//         <a class="main-nav-item" href="./user.html">
//           <i class="fa fa-user-circle"></i>
//           Tony
//         </a>
//         <a class="main-nav-item" href="./index.html">
//           <i class="fa fa-sign-out"></i>
//           Sign Out
//         </a>
//       </div>
//     </nav>


    <main class="main bg-dark">
      <div class="header">
            <h1>Welcome back<br/>Tony Jarvis!</h1>
            <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
      // array.map return component
      <BankAccount type="type" cardNumber="x4747" amount="amount"/>

      
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