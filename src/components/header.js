import '../App.css';
import Sidebar from './sidebar';
import flowerSticker from "../media/flower.png"

function Header({ pos, blend }) {
  console.log("pos", pos);
  return (
    <div>
      <div className="header" style={{ position: pos, mixBlendMode: "normal" }}>
        <img className="logo" src={flowerSticker} alt="flower" style={{ width: "100px", height: "100px" }} />

        <div className="header-text" style={{ display: "flex", flexDirection: "column", alignItems: "right", textAlign: "right" }}>
          <h1 style={{ marginBottom: ".5rem", marginBottom: "0", color: "black" }}><span style={{ fontFeatureSettings: '"ss01"' }}>jianna</span> so
            {/* <span style={{color: "pink"}}>˖°⋆∘</span> */}
          </h1>
          {/* {'\u0237'} */}
          <h5 style={{ marginTop: "0rem", marginBottom: ".5rem" }}>(she/they/siya)</h5>
          <p style={{ width: "100%" }}>is a PhD student at Harvard 
          <br></br>dreaming of a more loving world 
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Header;