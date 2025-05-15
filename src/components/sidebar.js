import '../App.css';

function Sidebar() {
  return (
    <div className="sidebar" style={{zIndex: "100"}}>
      <h4 style={{marginBottom: "1rem", marginTop: "2rem"}}>building tech to</h4>
      {/* <p>support different forms of knowledge?</p> */}
      {/* <p>build a future we want to live in?</p> */}
      {/* <p>honor our elders?</p> */}
      {/* <p>navigate complexity</p> */}
      <p>remember ourselves</p>
      <p>care for each other</p>
      <p>honor our elders</p>


      <h4 style ={{marginTop: "2rem", marginBottom: "1rem"}}>playing with</h4>
      <p>fiber</p>
      <p>light</p>
      <p>memory</p>
      {/* <p>language</p> */}
      <p>presence</p>
      <p>speculation</p>


      <h4 style ={{marginTop: "2rem", marginBottom: "1rem"}}>dreaming of</h4>
      <p>a theory of love for HCI</p>
      <p>collective liberation</p>
      <p>moving to the Philippines</p>

      <h4 style ={{marginTop: "2rem", marginBottom: "1rem"}}>also on</h4>
      <a target="_blank" href="https://www.instagram.com/jiso.play/?hl=en"><p>IG</p></a>
      <a target="_blank" href="https://www.are.na/ji-so/index"><p>are.na</p></a>
      <a target="_blank" href="https://jiannaso.substack.com/"><p>substack</p></a>
      <a target="_blank" href="https://www.goodreads.com/user/show/144995175-jianna-so"><p>goodreads</p></a>
    </div>
  );
}

export default Sidebar;