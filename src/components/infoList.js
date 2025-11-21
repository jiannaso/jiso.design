import knit from '../media/knit.jpg';

export const InfoList = ({ people }) => {
    const people_array = people
    console.log(people_array)
    return (
    <div>
        {people.map((item) => (
                <div style={{display: 'flex', flexDirection: 'row'}}>
    {/* <img src={knit} style={{width: '200px', height: '200px', paddingRight: "20px", marginBottom: '30px'}}></img> */}

                <div style={{paddingBottom: "20px"}}>
        <p style={{color: "gray"}} key={item.id}>{item.desc}</p>
        <p key={item.id}>{item.name}</p>
        <p><a style={{textAlign: 'left'}}href={item.link} key={item.id}>{item.linkname}</a></p>
        

        </div>

            </div>
      ))}
        </div>
    );
        }
    export default InfoList;
