import Box from "./box";
import paghalo from '../media/paghalo.mov';
import closeted from '../media/closeted.mov';
import knit from '../media/knit.jpg';
import flower from '../media/flower.mov';

function Playground() {
    const small = 200;
    const large = 250;
    return (
        <div className="playground" style={{position: "absolute", top: "0", left: "0", width: "100vw", height: "200vh", overflow: "hidden", zIndex: "0"}}>
            <Box title={"CSCW 2024"} topx={"50vh"} lefty={"50vw"} widthx={small} heighty={small} url ={''} 
            text={'"They Make Us Old Before We are Old": Designing Ethical Health Technology with and for Older Adults'}/>
            
            <Box title={"CSCW 2025"} topx={"60vh"} lefty={"70vw"} widthx={large} heighty={large} link={"https://kgajos.seas.harvard.edu/papers/so2025bridging.pdf"}
            text={"Bridging Ontologies of Neurological Conditions: Towards Patient-centered Data Practices in Digital Phenotyping Research and Design"}/>
            
            <Box title={"Projection art"} topx={"40vh"} lefty={"65vw"} widthx={large} heighty={large} url={closeted} text={null}/>
            
            <Box title={"Interactive Knit Patterns"} topx={"30vh"} lefty={"30vw"} widthx={small} heighty={small} url={knit}/>
            
            <Box title={"Paghalo"} topx={"20vh"} lefty={"60vw"} widthx={small} heighty={small} url ={paghalo} text={null}/>
            
            <Box title={"Mapping Bikol"} topx={"70vh"} lefty={"20vw"} widthx={small} heighty={small}/>
            
            <Box title={"HarvardxDesign 2024: Co x Garden"} url={flower} topx={"60vh"} lefty={"35vw"} widthx={small} heighty={small} text={null}/>

        </div>
      );
}

export default Playground;