import Header from "../header";
import '../../App.css';

function BlogResources() {
    return (
        <div>
            <Header pos={"relative"} blend={'normal'}/>
            <div className="blog-container-narrow">

            <h1 className="blog-title" id='resources'>Community + resources</h1>
            <p className="blog-meta">A living page, updated often</p>


<p>

</p>
<h2 className="blog-subtitle">Community</h2>
<p id="left">
The people I love and the people who love me are the driving force of anything I work on. Cultivating this community is something I deeply care about: I organize <a href='https://iisharvard.github.io/hci-reading-group/'>Harvard's HCI reading group</a>, previously organized Harvard's Neurodiversity Affinity Group as part of The Mind Project, and am a steward of the <a href='https://harvardgradunion.org/'>Harvard Graduate Student Union</a>.
<br></br>
<br></br>
Currently, I am building more filipino community in HCI, and more casual creative spaces around Boston. In my free time, I like to host craft nights for my personal <a href="/craft/club">Cozy Craft Club</a>. Send me a note if you would like to build these communities together!

<br></br>
<br></br>

Here are other (online/IRL) spaces I love:
    <a href='https://grayarea.org/'> Gray Area</a>, 
    <a href='https://www.instagram.com/bostontechpoetics/?hl=en'> Boston Tech Poetics</a>, 
    <a href='https://www.instagram.com/_bastos.lab/'> Bastos Lab</a>, 
    <a href='https://sfpc.study/'> The School of Poetic Computation</a>, 
    <a href='https://developh.org/'> DeveloPh</a>.
</p>

<h2 className="blog-subtitle">Mentorship + applying to grad school!</h2>
<p id="left">
Many people over the years have lent me a hand, whether it was giving me advice, a book recommendation, or application support. I am more than happy to support you as well-- if you have any questions about applying to grad school, making art, or literally any part of life, please email me at <a>jiannaso@gmail.com</a>. If I'm not the best person to support you, I will point you in the right direction. 

<br></br>
<br></br>
Here are some great resources about applying to grad school, and what the reality of grad school is like:
            </p>

            <h2 className="blog-subtitle">Resources</h2>
<p id="left">
My favorite books, papers, and scholars who shape my work. Email me for a PDF!
<br></br>
<br></br>
Theory:
<ul>
    <li>Teaching to Transgress (bell hooks)</li>
    <li>Giving Bodies Back to Data: Image Makers, Bricolage, and Reinvention in Magnetic Resonance Technology (Silvia Casini)</li>
    <li>The Body Multiple: Ontology in Medical Practice
 (annemarie mol)</li>
    {/* <li>What Can A Body Do?</li> */}
    <li>Humanish: What Talking to Your Cat or Naming Your Car Reveals About the Uniquely Human Need to Humanize (Justin Gregg)</li>
    {/* <li>Embodied Knowledge</li> */}
    {/* <li>Glitch Feminism</li> */}
    {/* <li>Data Feminism</li> */}


</ul>

Methodology<ul>
    <li>Reflexive Thematic Analysis (Braun and Clarke) <a href='https://www.tandfonline.com/doi/full/10.1080/26895269.2022.2129597'>[paper]</a></li>
    <li><a href='https://experimentology.io/'>Experimentology</a></li>
</ul>
</p>
        </div>
        </div>

    )
};

export default BlogResources;