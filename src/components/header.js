import '../App.css';
import Sidebar from './sidebar';

function Header() {
  return (
    <div style ={{display: "flex", flexDirection: "column", textAlign:"right", zIndex: "100"}}>
        <div className="header">
            <img className ="logo" src="/flower.jpeg" alt="flower" style={{width: "100px", height: "100px"}}/>
            <div style ={{display: "flex", flexDirection: "column", alignItems: "right", textAlign:"right"}}>
            <h3>JI SO</h3>
            <p style={{width: "70%", marginLeft: "auto"}}>is a designer & HCI phd student @ harvard researching accessibility & ethical AI,<a href="https://www.w3schools.com" target="_blank"> dreaming of</a> expansive love + community care</p>
            </div>
        </div>
    </div>
  );
}

export default Header;