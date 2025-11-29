import Box from "./box";
import paghalo from '../media/paghalo.mov';
import closeted from '../media/closeted.mov';
import knit from '../media/knit.jpg';
import flower from '../media/flower.mov';
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable'; // Both at the same time
import { useRef } from 'react';
import flowerSticker from "../media/flower.png"
import flowerSticker1 from "../media/flower1.png"
import flowerSticker2 from "../media/flower2.png"

function Playground() {
    const nodeRef = useRef(null);
    const pinkColor = 'rgba(255, 120, 172)'
    const small = "200px";
    const large = "300px";
    const larger = "325px";

    const sticker = "100px";

    const [dream, setDream] = useState(0);
    const [dreamColor, setDreamColor] = useState('black');
    const [playing, setPlaying] = useState(true);

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    hours = hours + 16; // Convert to PhST (UTC+8)
    // Check whether AM or PM
    let newformat = hours % 24 >= 12 ? "PM" : "AM";
    
    // Find current hour in AM-PM Format
    hours = hours % 12;
    
    // To display "0" as "12"
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    
    console.log(hours + ":" + minutes + " " + newformat);
        
    const showTime = hours + ":" + minutes + " " + newformat

    // const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const intervalID = setInterval(() => {
            if (playing) {
                setDream(prevDream => (prevDream + 1) % dreams.length);
            }
        }, 2500);

        return () => clearInterval(intervalID);
    }, []);














    const dreams = ['craft better worlds',
        'remember & reimagine ourselves',
        'care for each other',
        'honor our elders',
        'critique power',
        'write love letters',
        'weave light',
        'embody memory',
        'move softly & slowly',
        'rest, take a deep breath'];
















    const handleDreamClick = () => {
        setPlaying(false);
    }
    return (
        <div>
        <div className="playground" style={{ position: "", width: "100vw", height: "1000px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            

            <div className="background" style={{ position: "absolute", top: "0", left: "0", width: "100vw", height: "1000px", overflow: "", zIndex: "0" }}>



                <Box
                    title={"sticker"}
                    topx={"200px"}
                    lefty={"calc(50vw - 30vw - 40px)"}
                    widthx={sticker}
                    heighty={sticker}
                    url={flowerSticker2}
                    text={null} />

                <Box
                    title={"sticker"}
                    topx={"590px"}
                    lefty={"calc(50vw + 34vw - 20px)"}
                    widthx={sticker}
                    heighty={sticker}
                    url={flowerSticker1}
                    text={null} />

                {/* <Box 
            title={"sticker"}
            topx={"50vh"} 
            lefty={"60vw"} 
            widthx={sticker} 
            heighty={sticker} 
            url={flowerSticker2} 
            text={null}/> */}

                <Box title={"CSCW 2024"}
                    topx={"350px"}
                    lefty={"calc(50vw - 32vw - 70px)"}
                    widthx={small}
                    heighty={small}
                    url={''}
                    link={"https://dl.acm.org/doi/abs/10.1145/3687017"}
                    linkText={"read"}
                    text={'Designing Ethical Health Technology with and for Older Adults'} />

                <Box title={"CSCW 2025"}
                    topx={"570px"}
                    lefty={"calc(50vw + 10vw - 100px)"}
                    widthx={larger}
                    heighty={larger}
                    link={"https://kgajos.seas.harvard.edu/papers/so2025bridging.pdf"}
                    linkText={"read"}
                    text={"Bridging Ontologies of Neurological Conditions: Towards Patient-Centered Data Practices in Digital Phenotyping Research and Design"} />


                <Box title={"Projection art"}
                    topx={"350px"}
                    lefty={"calc(50vw + 20vw - 50px)"}
                    widthx={large}
                    heighty={large}
                    url={closeted}
                    text={null} />

                <Box title={"Interactive Knit Patterns"}
                    topx={"110px"}
                    lefty={"calc(50vw - 25vw - 30px)"}
                    widthx={large}
                    heighty={large}
                    url={knit}
                />

                <Box title={"Paghalo"}
                    topx={"220px"}
                    lefty={"calc(50vw + 10vw - 50px)"}
                    widthx={small}
                    heighty={small}
                    url={paghalo}
                    text={null} />

                {/* <Box title={"Mapping Bikol"} 
            topx={"70vh"} 
            lefty={"20vw"} 
            widthx={small} 
            heighty={small}/> */}

                <Box title={"HarvardxDesign 2024: Co x Garden"}
                    url={flower}
                    topx={"600px"}
                    lefty={"calc(50vw - 18vw - 100px)"}
                    widthx={small}
                    heighty={small}
                    link={"https://experience-design.web.app/"}
                    linkText={"plant a flower"}
                    text={null}
                    shape={'round'} />
            </div>
            <div className='playgroundBox'>
                <div className='playgroundText' style={{paddingTop: '5rem'}}>

                    <h2 style={{ lineHeight: "150%", color: 'black', marginBottom: ".5rem", }}> this is a  playground to
                        {/* <s style={{color:"gray"}}>portfolio</s> {'\u00A0'}  */}
                        <br></br> <span style={{ textDecoration: "underline", textDecorationColor: "rgba(255, 120, 172)", textUnderlineOffset: "10px", textDecorationThickness: "1px", color: dreamColor }}> {dreams[dream]}</span></h2>



                    <button style={{ border: 'none', backgroundColor: 'transparent', color: 'rgba(255, 120, 172)', margin: '0px' }} onClick={handleDreamClick}>
                        <p style={{ fontSize: '.75rem', fontWeight: 'normal' }}>{dream + 1} {'\u00A0'} / {'\u00A0'} {dreams.length}</p>
                    </button>

                    <div style={{ position: 'relative', top: '-120px', left: '150px', color: pinkColor }}>
                        <p style={{ margin: '0px', fontSize: '1.5rem' }}>⋆˙⟡</p>
                    </div>

                    <div style={{ position: 'relative', top: '-40px', left: '-160px', color: pinkColor, zIndex: '100' }}>
                        <p style={{ margin: '0px', fontSize: '1.5rem' }}>
                            ✿</p>
                    </div>

                    
                </div>
                
            </div>
            <div style={{ opacity: '.8', position: '', top: '', left: '', color: '', zIndex: '100', margin:'auto' }}>
                        <h3 style={{ margin: '0px', fontSize: '', marginTop: "", color: "black"}}>
                            sunset in my lola's hometown
                            </h3>
                            <p>Matnog, Sorsogon, Philippines 
                                <br></br>
                                {/* current time: {showTime} PhST  */}
                                </p>
                    </div>
        </div>
        
        </div>

        
    );
}

export default Playground;