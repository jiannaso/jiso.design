import '../App.css';
import Draggable from 'react-draggable'; // Both at the same time
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player'
import paghalo from '../media/paghalo.mov';

function Box({title, topx, lefty, widthx, heighty, url, text, link, linkText, pos, shape}) {
    const nodeRef = useRef(null);
    // console.log("topx", topx);
    // console.log("lefty", lefty);
    // if(pos !== null) {
      pos = "absolute"
      // topx = null;
      // lefty = null;
      // widthx = 200;
      // heighty = 200;
    // }
    let boxClass = "sticker";
    let stickerUrl = url;
    let leftynew = lefty;
    // console.log(title)
    if(title==="sticker")  {
      // setSticker("");
      console.log("sticker")
      boxClass = "";
      url = null;
    } else {
      boxClass="small_box"
    }

    let borderRadius = '7px';
    if (shape==='round') {
      borderRadius = '100px';
    }

    if(linkText==='read') {
      boxClass='flower';
    } else {}

  return (
    <div>
        <Draggable nodeRef={nodeRef}>
        <div ref={nodeRef} className={"draggable"} style={{display: "flex", flexDirection: "column", position: pos, width: widthx, top: topx, left: leftynew}}>
        <div style={{filter: 'drop-shadow(0rem 0rem 0.4rem rgba(0, 0, 0, 0.25))'}}>
            <div className={boxClass} style={{display: "flex", borderRadius: borderRadius, backgroundImage: "url(" + url + ")", backgroundSize: "cover", width: widthx, height: heighty}}>
            {text === null ? <video style={{height:"100%", width:"100%"}} autoPlay loop muted>
                <source src={url} type='video/mp4' />
            </video>
            
            : 
            
            <p style={{padsding:'10px',margin:"auto", width: "60%", textAlign: "center", lineHeight: "1rem", fontFamily: "Vengeance"}}>{text}</p>
          }

          {title === "sticker" ? 
            <div style={{backgroundImage: "url(" + stickerUrl + ")", width: widthx, height: widthx, position:'absolute', backgroundSize: "cover"}} className="logo" alt="flower"/>
            :
            null
          }
            
            </div>
            </div>
            <div style={{display: "flex", flexDirection: "column", 
             textAlign: "center"}}>
              {title !== 'sticker' ?
                <p style={{marginTop: "1rem", fontSize: "12px", color: 'white'}}>{title}</p>
                :
                null
              }
              </div>
              <a href={link} target="_blank"style={{fontSize: "12px", color:'white'}}>{linkText}</a>
            </div>
        </Draggable>
    </div>

    
  );
}

export default Box;