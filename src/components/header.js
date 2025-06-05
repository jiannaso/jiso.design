import '../App.css';
import Sidebar from './sidebar';

function Header() {
  return (
    <div>
        <div className="header">
            <img className ="logo" src="/flower.jpeg" alt="flower" style={{width: "100px", height: "100px"}}/>
            <div className="header-text" style ={{display: "flex", flexDirection: "column", alignItems: "right", textAlign:"right"}}>
              <h1 style ={{marginBottom:".5rem", marginBottom:"0", color: "black"}}><span style={{fontFeatureSettings: '"ss01"'}}>ji</span> so 
              {/* <span style={{color: "pink"}}>˖°⋆∘</span> */}
              </h1>
              {/* {'\u0237'} */}
              <h5 style ={{marginTop: "0rem", marginBottom: ".5rem"}}>(she/they/siya)</h5>
              <p style={{width: "100%"}}>is a PhD student @ Harvard researching accessible, ethical tech. <br></br>creating with expansive love + community care. <a>design philosophy <span style={{fontFamily: "Vengeance", fontSize: "1rem", color: "rgba(255, 120, 172)"}}>{'\u2197'}</span></a></p>
            </div>
        </div>
    </div>
  );
}

export default Header;