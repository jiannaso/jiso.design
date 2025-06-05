import '../App.css';
import Draggable from 'react-draggable'; // Both at the same time
import { useRef } from 'react';
import ReactPlayer from 'react-player'
import paghalo from '../media/paghalo.mov';

function Box({title, topx, lefty, widthx, heighty, url, text, link, linkText}) {
    const nodeRef = useRef(null);
    console.log("topx", topx);
    console.log("lefty", lefty);

  return (
    <div>
        <Draggable nodeRef={nodeRef}>
        <div ref={nodeRef} className={"draggable"} style={{display: "flex", flexDirection: "column", position: "absolute", top: topx, left: lefty}}>
            <div className="small_box" style={{display: "flex", backgroundImage: "url(" + url + ")", backgroundSize: "cover", width: widthx, height: heighty}}>
            {text === null ? <video style={{height:"100%", width:"100%"}} autoPlay loop muted>
                <source src={url} type='video/mp4' />
            </video>
            
            : 
            
            <p style={{margin:"auto", width: "75%", textAlign: "left", lineHeight: "1rem", fontFamily: "Vengeance"}}>{text}</p>
          }
            
            </div>
            <div style={{display: "flex", flexDirection: "column", 
             textAlign: "center"}}>
            <p style={{marginTop: "1rem", fontSize: "12px"}}>{title}</p>
              </div>
              <a href={link} target="_blank"style={{fontSize: "12px"}}>{linkText}</a>
            </div>
        </Draggable>
    </div>

    
  );
}

export default Box;