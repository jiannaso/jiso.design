import '../App.css';

function Sidebar() {
  return (
    <div className="sidebar" style={{zIndex: "100"}}>

      
      <h4 style ={{marginTop: "2rem", marginBottom: "1rem"}}>more
      <span className={"link-arrow"}> {'\u2197'}</span>
      </h4>
      <a target="_blank" href="/blog"><p>blog 
        {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
        </p></a>
        <a target="_blank" href="/about"><p>about 
        {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
        </p></a>
      <a target="_blank" href="https://www.instagram.com/jiso.play/?hl=en"><p>ig
        {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
        </p></a>
      <a target="_blank" href="https://www.are.na/ji-so/index"><p>are.na
      {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
      </p></a>
      <a target="_blank" href="https://jiannaso.substack.com/"><p>substack
      {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
      </p></a>
      <a target="_blank" href="https://www.goodreads.com/user/show/144995175-jianna-so"><p>goodreads
      {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
      </p></a>
      <a target="_blank" href="https://github.com/jiannaso"><p>github 
        {/* <span className={"link-arrow"}> {'\u2197'}</span> */}
        </p></a>

        

    </div>
  );
}

export default Sidebar;