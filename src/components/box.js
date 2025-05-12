import '../App.css';
import Draggable from 'react-draggable'; // Both at the same time
import { useRef } from 'react';

function Box({title, topx, lefty, widthx, heighty}) {
    const nodeRef = useRef(null);
    console.log("topx", topx);
    console.log("lefty", lefty);
  return (
    <div>
        <Draggable nodeRef={nodeRef}>
          <div ref={nodeRef} style={{display: "flex", flexDirection: "column", position: "absolute", top: topx, left: lefty}}>
            <div  className="small_box" style={{display: "flex", width: widthx+"px", height: heighty+"px"}}>
            {/* <p style={{margin:"auto"}}>{title}</p> */}
            </div>
            <div style={{display: "flex", flexDirection: "column", 
            // justifyContent: "space-between", 
             textAlign: "center"}}>
            {/* <p style={{color: "gray", textAlign: "left"}}>2025</p> */}
            <p style={{marginTop: "1rem", color: "gray", fontSize: "12px"}}>{title}</p>
              </div>
            </div>
        </Draggable>
    </div>

    
  );
}

export default Box;