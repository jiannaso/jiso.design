import Box from "./box";

function Playground() {
    const small = 200;
    const large = 250;
    return (
        <div className="playground" style={{position: "absolute", top: "0", left: "0", width: "100vw", height: "100vh", overflow: "hidden", zIndex: "50"}}>
            <Box title={"Health Tech for Older Adults"} topx={"50vh"} lefty={"50vw"} widthx={small} heighty={small}/>
            <Box title={"Patient-centered Digital Phenotyping"} topx={"60vh"} lefty={"70vw"} widthx={large} heighty={large}/>
            <Box title={"Projection art"} topx={"40vh"} lefty={"65vw"} widthx={large} heighty={large}/>
            <Box title={"Interactive Knit Patterns"} topx={"30vh"} lefty={"30vw"} widthx={small} heighty={small}/>
            <Box title={"Paghalo"} topx={"20vh"} lefty={"60vw"} widthx={small} heighty={small}/>
            <Box title={"Mapping Bikol"} topx={"70vh"} lefty={"20vw"} widthx={small} heighty={small}/>
            <Box title={"HarvardxDesign Conference"} topx={"60vh"} lefty={"35vw"} widthx={small} heighty={small}/>

        </div>
      );
}

export default Playground;