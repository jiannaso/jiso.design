import '../App.css';

function Sidebar() {
  return (
    <div className="sidebar" style={{zIndex: "100"}}>
      <h5>HOW CAN WE</h5>
      <p>support different forms of knowledge?</p>
      <p>build a future we want to live in?</p>
      <p>honor our elders?</p>

      <h5 style ={{marginTop: "3rem"}}>PLAYING WITH</h5>
      <p>speculative design</p>
      <p>fiber</p>
      <p>light</p>
      <p>memory</p>
      <p>language</p>
      <p>presence</p>


      <h5 style ={{marginTop: "3rem"}}>DREAMING OF</h5>
      <p>a theory of love for HCI</p>
      <p>collective liberation</p>
      <p>moving to the Philippines</p>
    </div>
  );
}

export default Sidebar;