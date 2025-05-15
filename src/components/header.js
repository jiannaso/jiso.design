import '../App.css';
import Sidebar from './sidebar';

function Header() {
  return (
    <div style ={{display: "flex", flexDirection: "column", textAlign:"right", zIndex: "100"}}>
        <div className="header">
            <img className ="logo" src="/flower.jpeg" alt="flower" style={{width: "100px", height: "100px"}}/>
            <div className="header-text" style ={{display: "flex", flexDirection: "column", alignItems: "right", textAlign:"right"}}>
              <h1 style ={{marginBottom:".5rem", color: "black"}}>ji <meta charset="U+00E2"></meta> so </h1>
              <h5 style ={{marginTop: "0rem", marginBottom: "1rem"}}>(she/they/siya)</h5>
              <p style={{marginLeft: "auto", width: "435px"}}>is a designer & HCI phd student @ harvard researching accessible, ethical tech. creating with expansive love + community care <a>[design philosophy]</a></p>
            </div>
        </div>
    </div>
  );
}

export default Header;