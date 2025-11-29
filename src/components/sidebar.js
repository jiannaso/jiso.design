import '../App.css';
 
function Sidebar() {
  return (
    <div className="sidebar" style={{zIndex: "100"}}>

{/* <h4 style ={{marginTop: "2rem", marginBottom: "1rem"}}>starred {'\u2197'}
      </h4>
      
      <h4 style ={{marginTop: "2rem", marginBottom: "1rem"}}>more {'\u2197'}
      </h4> */}


      <a target="_blank" href="/journal"><p>journal 
        {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
        </p></a>
      
 
      <a target="_blank" href="https://www.are.na/ji-so/index"><p>are.na 
      {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
      </p></a>

      <a target="_blank" href="https://scholar.google.com/citations?user=9VeHD_AAAAAJ&hl=en"><p>scholar
      {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
      </p></a>
      <a target="_blank" href="https://github.com/jiannaso"><p>github 
        {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
        </p></a>
      <a target="_blank" href="https://drive.google.com/file/d/1rLYaowFP10nxBqGESYajrQv7Kdp9sSfb/view"><p>cv 
        {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
        </p></a>
      



        

    </div>
  );
}

export default Sidebar;