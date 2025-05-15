import Box from "./box";
import paghalo from '../media/paghalo.mov';
import closeted from '../media/closeted.mov';
import knit from '../media/knit.jpg';
import flower from '../media/flower.mov';

function Playground() {
    const small = "13vw";
    const large = "17vw";
    return (
        <div className="playground" style={{position: "absolute", top: "0", left: "0", width: "100vw", height: "100vh", overflow: "hidden", zIndex: "0"}}>
            <Box title={"CSCW 2024"} 
            topx={"25vh"} 
            lefty={"25vw"} 
            widthx={small} 
            heighty={small} 
            url ={''} 
            link ={"https://dl.acm.org/doi/abs/10.1145/3687017"}
            linkText={"read"}
            text={'Designing Ethical Health Technology with and for Older Adults'}/>
            
            <Box title={"CSCW 2025"} 
            topx={"57vh"} 
            lefty={"62vw"} 
            widthx={large} 
            heighty={large} 
            link={"https://kgajos.seas.harvard.edu/papers/so2025bridging.pdf"}
            linkText={"read"}
            text={"Bridging Ontologies of Neurological Conditions: Towards Patient-centered Data Practices in Digital Phenotyping Research and Design"}/>
            
            <Box title={"Projection art"} 
            topx={"30vh"} 
            lefty={"72vw"} 
            widthx={large} 
            heighty={large} 
            url={closeted} 
            text={null}/>
            
            <Box title={"Interactive Knit Patterns"} 
            topx={"43vh"} 
            lefty={"44vw"} 
            widthx={small} 
            heighty={small} 
            url={knit}/>
            
            <Box title={"Paghalo"} 
            topx={"22vh"} 
            lefty={"60vw"} 
            widthx={small} 
            heighty={small} 
            url ={paghalo} 
            text={null}/>
            
            {/* <Box title={"Mapping Bikol"} 
            topx={"70vh"} 
            lefty={"20vw"} 
            widthx={small} 
            heighty={small}/> */}
            
            <Box title={"HarvardxDesign 2024: Co x Garden"} 
            url={flower} 
            topx={"60vh"}
            lefty={"32vw"} 
            widthx={small} 
            heighty={small} 
            link={"https://experience-design.web.app/"}
            linkText={"plant a flower"}
            text={null}/>

        </div>
      );
}

export default Playground;