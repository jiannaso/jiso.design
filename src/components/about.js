
import React, { useState, useEffect } from 'react';
import InfoList from './infoList';
import flowerSticker from "../media/flower.png"
import flowerSticker1 from "../media/flower1.png"
import flowerSticker2 from "../media/flower2.png"
import Box from "./box";
import jianna from '../media/jianna.jpg';

const sticker = "100px";

export const About = () => {
    const people = [{
        id: 0,
        name: 'Presented at the AIxHealth seminar, a global community of health technology researchers. I spoke about Unpacking Reciprocity in Data Practices in Health Research and Design, especially in the context of data sovereignty for patients in clinical research.',
        desc: 'November 2025',
        link: 'https://www.aixhealth.info/virtual-seminar-series#h.oi37lmsatjhe',
        linkname: 'Read the abstract',

      }, {
        id: 1,
        name: 'Presented our paper, \"Bridging Ontologies of Neurological Conditions: Towards Patient-Centered Data Practices in Digital Phenotyping Research and Design\", at CSCW 2025 in Bergen, Norway. The paper recieved an Honorable Mention for Best Paper (Top 5% of papers).',
        desc: 'October 2025',
        link: 'https://www.figma.com/deck/1EaVM0n9pUCci9gEMDhYoj/CSCW-2025?node-id=4-240&viewport=-63%2C10%2C0.33&t=5Lkwy8UmwcgBD9yH-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        linkname: 'Slides',

      }, {
        id: 2,
        desc: 'September 2025',
        name: 'Guest lectured at an HCI class at Olin College. Spoke about my design journey, designing for the worlds we cannot live without, and participatory design with underserved older adults.',
        link: '',
        linkname: '',

      }, {
        id: 3,
        desc: 'May 2025',
        name: 'Presented my Oral Qualifying Exam at Harvard! I am officially a PhD Candidate! I hope to focus on \"Designing Health Tools for Patient and Clinician Knowledge.\"',  
        link: 'https://www.figma.com/deck/k77RbkA0dfyr8ozcH0INeF/Jianna-So-Qualifying-Exam?node-id=1-50&viewport=-63%2C10%2C0.33&t=WjNwWTbIQ4mUQDvp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        linkname: 'Slides',

      }, {
        id: 4,
        desc: 'April 2025',
        name: 'Organized the annual HarvardxDesign conference as one of four co-chairs. This year\'s theme was \" Re x Design\", focused on reflecting and reshaping our design practice to be more intentional, critical, and generative. I led the experience design team, which designed an interactive website, cards, and workshops for 200+ attendees.',
        link: 'https://harvardxre.design/',
        linkname: 'Re x Design website',

      },{
        id: 4,
        desc: 'October 2024',
        name: 'Presented \"They Make Us Old Before We\'re Old\": Designing Ethical Health Technology with and for Older Adults. The paper recieved an Honorable Mention for Best Paper (Top 3% of papers)',
        link: 'https://docs.google.com/presentation/d/1E7uhRRhaFCj8wJahgUgSCEH14L6y-JrllvO0rayZvnM/edit?slide=id.g30d1da08bb5_0_130#slide=id.g30d1da08bb5_0_130',
        linkname: 'Slides',

      },{
        id: 4,
        desc: 'October 2024',
        name: 'Presented a poster on the early studies of our patient-centered data visualization work at ASSETS, a Human-Computer interaction conference focused on accessibility.',
        link: 'https://www.figma.com/proto/sqRAqHcPcBRwEEPWItpLwU/ASSETS-poster?page-id=0%3A1&node-id=1-1537&viewport=-871%2C136%2C0.36&t=svsL7utSu8DzTFBH-1&scaling=scale-down&content-scaling=fixed',
        linkname: 'Poster',

      },{
        id: 4,
        desc: 'April 2024',
        name: 'Organized the annual HarvardxDesign conference as a member of the Experience Design team. This year\'s theme was \" Co x Design\", focused on designing more inclusively, sustainably, and thoughtfully.',
        link: 'https://www.harvardxdesign.co/',
        linkname: 'Co x Design website',
      }];

    
    return (
        <div style={{width: "60%", margin: 'auto', paddingTop: '5rem', textAlign:""}}>
          
          <div style={{display: "", flexDirection:""}}>

<div>

  {/* IMAGE */}


<img src={jianna} className=""alt="Jianna So" style={{width: "250px", height: "250px", padding: "20px", borderRadius: "1000px"}}/>
<h2>I am a queer filipino artist & researcher. </h2>


                    
                <h2>
                I create to help us remember ourselves, care for each other, and honor our elders. </h2>

</div>

          </div>
                      

            
            <p id="left">
            <b>I explore these dreams through computer science research, installation projection art, essays, and textile work.</b> My practice is heavily influenced by critical theory, feminist frameworks, disability studies, and medical anthropology. Here are my <a href="/blog/resources"> favorite resources.</a>

<br></br>
<br></br>



{/* Currently, I am passionate about the following intellectual threads:
<ul>
    <li>Reimagining the bounds of our bodies</li>
    <li>Building AI support tools for different forms of knowledge</li>
    <li>Archiving Bikol dialects</li>
    <li>Non-anthropomorphic metaphors for LLMs </li>
    <li>Computational knitting</li>
    <li>Movement as memory, shadows as canvas</li>
</ul> */}

        <h2 style={{textAlign: "center", paddingTop: "40px"}}>What I've been up to</h2>
        <InfoList people={people}/>
        
        <h2 style={{textAlign: "center", paddingTop: "40px"}}>About</h2>

<b>I am a PhD candidate at Harvard advised by <a href='https://kgajos.seas.harvard.edu/'>Krzysztof Gajos</a> in the <a href='https://iis.seas.harvard.edu/'>Intelligent Interactive Systems</a>  group.</b> I study how ambient and sensor-based technology can be built more accessibly and ethically, especially for older adults (ie. who live in underserved areas). Currently, I collaborate with the <a href='https://www.massgeneral.org/neurology/research/laboratory-for-deep-neurophenotyping'>Laboratory for Deep Neurophenotyping
</a> at Massachusetts General Hospital (MGH) to explore how multimodal digital phenotyping data can help patients with neurodegenerative diseases understand themselves and communicate their condition. 
<br></br>
<img src={require('../media/projects/neurobooth.jpg')} style={{width: '50%', margin: 'auto'}}/>
<br></br>

<a href='https://neurobooth.mgh.harvard.edu/'>Neurobooth, a digital phenotyping study, at MGH Neurology</a>
<br></br>

<br></br>

Previously, I was at Stanford, where I studied Computer Science and 
<a href='https://majors.stanford.edu/majors/design'> Product Design</a> (mechanical engineering + psychology), advised by <a href='https://www.landay.org/'>James Landay</a> and <a href='https://www.ideo.com/leaders/david-kelley'>David Kelley</a>. 

<br></br>
<br></br>

<b>Every project has been an opportunity to explore how technology can be used to build a more loving, intentional, and just world. </b>Before grad school, I researched intelligent documents (pre-LLM's!) at Adobe Research, designed social justice issue pages as the first product design intern for the ACLU's national office, built journalism products with the LA Times' creative technology team, and worked on open data at the Census Bureau's Open Innovation Lab. My first research experience was with TINA, an inclusive tampon insertion aid for people with limited dexterity. I also co-founded Stanford Students for Workers' Rights, an organization that advocated alongside service workers and whose values continue to shape my advocacy and research.

<br></br>
<br></br>
            </p>

<h2 style={{textAlign: "center", paddingTop: "40px"}}>Past work</h2>
<img src={require('../media/projects/swr.png')} style={{width: '100%'}}/>
<img src={require('../media/projects/aclu.png')} style={{width: '100%'}}/>
<img src={require('../media/projects/booked.png')} style={{width: '100%'}}/>
<img src={require('../media/projects/latimes.png')} style={{width: '100%'}}/>

            
            <p style={{paddingBottom: "150px"}}>This website was hand-crafted with assets made by <a>Filipino artists</a>.
            <br></br>
            <br></br>
            Last update: 11/18 </p>

        </div>
        
    )
}

export default About;