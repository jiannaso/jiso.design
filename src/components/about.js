
import React, { useState, useEffect } from 'react';
import InfoList from './infoList';
import flowerSticker from "../media/flower.png"
import flowerSticker1 from "../media/flower1.png"
import flowerSticker2 from "../media/flower2.png"
import Box from "./box";
import jianna from '../media/jianna.jpg';
import olin from '../media/olin.png';
import aixhealth from '../media/aixhealth.png';
import cscw24 from '../media/cscw24.png';
import cscw25 from '../media/cscw25.png';
import quals from '../media/quals.png';
import garden from '../media/garden.png';
import rexdesign from '../media/rexdesign.png';
// <a href=\'\'></a>
const sticker = "100px";

export const About = () => {
  const people = [{
    id: 0,
    title: 'AIxHealth Talk: Reciprocity in health research',
    name: 'Presented at the AIxHealth seminar on \"Unpacking Reciprocity in Data Practices in Health Research and Design\" <a href=\'https://www.aixhealth.info/virtual-seminar-series#h.oi37lmsatjhe\'>[abstract]</a>',
    desc: 'November 2025',
    link: 'https://www.aixhealth.info/virtual-seminar-series#h.oi37lmsatjhe',
    linkname: '',
    img: aixhealth,

  }, {
    id: 1,
    title: 'CSCW Paper: Ethical health data practices',
    name: 'Presented our <a href=\'https://dl.acm.org/doi/abs/10.1145/3757562\'>paper</a> \"Bridging Ontologies of Neurological Conditions: Towards Patient-Centered Data Practices in Digital Phenotyping Research and Design\" <a href=\'https://www.figma.com/deck/1EaVM0n9pUCci9gEMDhYoj/CSCW-2025?node-id=4-240&viewport=-63%2C10%2C0.33&t=5Lkwy8UmwcgBD9yH-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1\'>[slides]</a>',
    award: '🎖️ Honorable Mention for Best Paper (Top 5% of papers)',
    desc: 'October 2025',
    link: 'https://www.figma.com/deck/1EaVM0n9pUCci9gEMDhYoj/CSCW-2025?node-id=4-240&viewport=-63%2C10%2C0.33&t=5Lkwy8UmwcgBD9yH-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    linkname: '',
    img: cscw25,
  }, {
    id: 2,
    title: 'Guest lecture at Olin: \'\'Building a system is a way to envision the future\'\'',
    desc: 'September 2025',
    name: 'Spoke about my design journey, designing for the worlds we cannot live without, and participatory design with underserved older adults <a href=\'https://www.figma.com/deck/sImtxF5AQAE6wVDCpx7xRE/Olin-Guest-Lecture?node-id=1-104&viewport=-63%2C10%2C0.33&t=tURDjIdKWiDKEVFA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1\'>[slides]</a>',
    link: '',
    linkname: '',
    img: olin,


  }, {
    id: 3,
    title: 'Passed my oral qualifying exam!',
    desc: 'May 2025',
    name: 'I am officially a PhD Candidate™️ \n\nI proposed work on \"Designing Health Tools for Patient and Clinician Knowledge\" <a href=\'https://www.figma.com/deck/k77RbkA0dfyr8ozcH0INeF/Jianna-So-Qualifying-Exam?node-id=1-50&viewport=-63%2C10%2C0.33&t=WjNwWTbIQ4mUQDvp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1\'>[slides]</a>',
    link: 'https://www.figma.com/deck/k77RbkA0dfyr8ozcH0INeF/Jianna-So-Qualifying-Exam?node-id=1-50&viewport=-63%2C10%2C0.33&t=WjNwWTbIQ4mUQDvp-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    linkname: '',
    img: quals
  }, {
    id: 4,
    title: 'Co-organized HarvardxDesign conference',
    desc: 'April 2025',
    name: 'Our theme was \" Re x Design\", focused on reflecting and reshaping our design practice to be more intentional, critical, and generative <a href=\'https://harvardxre.design/\'>[website]</a>. \n\nI led the experience design team, which designed an <a href=\'https://harvard-rexdesign.web.app/\'>interactive website</a>, cards, and workshops for 200+ attendees.',
    link: 'https://harvardxre.design/',
    linkname: '',
    img: rexdesign,

  }, {
    id: 4,
    title: 'CSCW Paper: Health tech for older adults',
    desc: 'October 2024',
    name: 'Presented our <a href=\'https://dl.acm.org/doi/abs/10.1145/3687017\'>paper </a>\"They Make Us Old Before We\'re Old\": Designing Ethical Health Technology with and for Older Adults <a href=\'https://docs.google.com/presentation/d/1E7uhRRhaFCj8wJahgUgSCEH14L6y-JrllvO0rayZvnM/edit?slide=id.g30d1da08bb5_0_130#slide=id.g30d1da08bb5_0_130\'>[slides]</a>',
    award: '🎖️ Honorable Mention for Best Paper (Top 3% of papers)',
    link: 'https://docs.google.com/presentation/d/1E7uhRRhaFCj8wJahgUgSCEH14L6y-JrllvO0rayZvnM/edit?slide=id.g30d1da08bb5_0_130#slide=id.g30d1da08bb5_0_130',
    linkname: '',
    img: cscw24
  },
  // {
  //   id: 4,
  //   title: 'ASSETS Poster: Formative ethical data study',
  //   desc: 'October 2024',
  //   name: 'Presented a <a href=\'https://www.figma.com/proto/sqRAqHcPcBRwEEPWItpLwU/ASSETS-poster?page-id=0%3A1&node-id=1-1537&viewport=-871%2C136%2C0.36&t=svsL7utSu8DzTFBH-1&scaling=scale-down&content-scaling=fixed\'>poster</a> on the early studies of our patient-centered data visualization work <a href=\'https://www.figma.com/proto/sqRAqHcPcBRwEEPWItpLwU/ASSETS-poster?page-id=0%3A1&node-id=1-1537&viewport=-871%2C136%2C0.36&t=svsL7utSu8DzTFBH-1&scaling=scale-down&content-scaling=fixed\'>[figma]</a>',
  //   link: 'https://www.figma.com/proto/sqRAqHcPcBRwEEPWItpLwU/ASSETS-poster?page-id=0%3A1&node-id=1-1537&viewport=-871%2C136%2C0.36&t=svsL7utSu8DzTFBH-1&scaling=scale-down&content-scaling=fixed',
  //   linkname: '',}, 
  {
    id: 4,
    title: 'HarvardxDesign Conference: Community garden',
    desc: 'April 2024',
    name: 'This year\'s theme was <a href=\'https://www.harvardxdesign.co/\'>\"Co x Design\"</a>, focused on designing more inclusively, sustainably, and thoughtfully \n\n 🌸 Designed and built a <a href=\'https://experience-design.web.app/\'>digital community garden</a> for attendees',
    link: 'https://www.harvardxdesign.co/',
    linkname: '',
    img: garden,
  }];


  return (
    <div>
    <div style={{ padding: "5% 15% 0 15%", margin: 'auto', paddingTop: '5rem', textAlign: "", backgroundColor: "" }}>

      <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', width:'', margin: "auto" }}>

        <div style={{ paddingRight: '' }}>

          {/* IMAGE */}

          <img src={jianna} className="" alt="Jianna So" style={{ width: "200px", height: "200px", padding: "20px", borderRadius: "1000px" }} />

          <h1 style={{ textAlign: 'left' }}> </h1>



          <h2 style={{ textAlign: 'center' }}>
            I create to help us remember ourselves, care for each other, & honor our elders. </h2>
          <p id="left">
            <b>I explore these dreams through computer science research, installation projection art, essays, and textile work.</b> My practice is heavily influenced by critical theory, feminist frameworks, disability studies, and medical anthropology. All of my inspiration can be traced back to my family. Here are my <a href="https://www.journal.jiso.design/resources.html"> favorite resources.</a>

          </p>
          {/* 
<Box title={null}
                    topx={"1400px"}
                    lefty={"calc(50vw)"}
                    widthx={'150px'}
                    heighty={'150px'}
                    url={null}
                    text={'Computer science'} /> */}
        </div>

      </div>



      <p id="left">

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
        <div className = 'currently-box' style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
          <div style={{ paddingRight: '2rem', width: '100%' }}>
            <h2 style={{ textAlign: "left", margin: "0", marginBottom: '30px' }}>Currently</h2>

            <b>I am a Harvard PhD candidate in Computer Science advised by Professor <a href='https://kgajos.seas.harvard.edu/'>Krzysztof Gajos</a> in the <a href='https://iis.seas.harvard.edu/'>Intelligent Interactive Systems</a>  group.  </b>I study how ambient and sensor-based technology can be built more accessibly and ethically, especially for older adults (ie. who live in underserved areas). 
            {/* My first-author papers have received top awards at Human-Computer Interaction conferences.  */}
            
            <br></br><br></br> 
            In my research, I collaborate with the <a href='https://www.massgeneral.org/neurology/research/laboratory-for-deep-neurophenotyping'>Laboratory for Deep Neurophenotyping
            </a> at Massachusetts General Hospital (MGH) to explore how multimodal digital phenotyping data from <a href='https://neurobooth.mgh.harvard.edu/'>Neurobooth</a> (pictured) can help patients with neurodegenerative diseases understand themselves and communicate their condition. My work is supported by a grant from the Harvard Data Science Initiative.
            <br></br>
            <br></br>

           I am also an incoming 
           <a href='https://globalprograms.hms.harvard.edu/global-primary-health-care/global-primary-care-student-scholars'> Global Primary Health Care Scholar </a>
            at Harvard Medical School, working on the <a href='https://globalprograms.hms.harvard.edu/global-primary-health-care/stitch-project'>StITCH</a> project for improving hepatitis care at the University of the Philippines (UP) Manila. 
          </div>


          <div className='currently-img' style={{ textAlign: 'center', width: '100%', paddingTop: '3rem'}}>
            <img src={require('../media/projects/neurobooth.jpg')} style={{ width: '100%', margin: 'auto' }} />
            <br></br>

            {/* <a href='https://neurobooth.mgh.harvard.edu/'>Neurobooth</a> at MGH Neurology */}
          </div>
        </div>
      </p>

        <br></br>

        <br></br>
</div>
<div id='left' style={{ backgroundColor: "#F3F3F3", width: "100%", paddingBottom: '4rem' }}>
        <div style={{width: '70%', margin: 'auto' }}>
        <h2 style={{
          textAlign: "center", paddingTop:
            "40px"
        }}>Recently</h2>

        <InfoList people={people} />

        </div>
        

        </div>
<div style={{width:'70%', margin: 'auto'}}>
<p id='left'>

        <h2 style={{ textAlign: "center", paddingTop: "40px" }}>Previously</h2>

        I did my undergrad at Stanford, where I studied Computer Science and
        <a href='https://majors.stanford.edu/majors/design'> Product Design</a> (mechanical engineering + psychology), advised by <a href='https://www.landay.org/'>James Landay</a> and <a href='https://www.ideo.com/leaders/david-kelley'>David Kelley</a>.

        <br></br>
        <br></br>

        <b>Every project has been an opportunity to explore how technology can be used to build a more loving, intentional, and just world. </b>Before grad school, I researched intelligent documents (pre-LLM's!) at Adobe Research, designed social justice issue pages as the first product design intern for the ACLU's national office, built journalism products with the LA Times' creative technology team, and worked on open data at the Census Bureau's Open Innovation Lab. My first research experience was with TINA, an inclusive tampon insertion aid for people with limited dexterity. I also co-founded Stanford Students for Workers' Rights, an organization that advocated alongside service workers and whose values continue to shape my advocacy and research.

        <br></br>
        <br></br>
      </p>

      <img src={require('../media/projects/swr.png')} style={{ width: '50%', padding: '3px' }} />
      <img src={require('../media/projects/aclu.png')} style={{ width: '50%', padding: '3px' }} />
      <img src={require('../media/projects/booked.png')} style={{ width: '50%', padding: '3px',paddingTop: '0px'  }} />
      <img src={require('../media/projects/latimes.png')} style={{ width: '50%', padding: '3px', paddingTop: '0px' }} />


      <p style={{ paddingBottom: '3rem', paddingTop: "2rem" }}>This playground was <a href='https://www.journal.jiso.design/handcrafted.html'>hand-crafted with assets made by Filipino artists</a>.
        <br></br>
        <br></br>
        Last update: 11/25/25 <a href='https://github.com/jiannaso/jiso.design'>[repo]</a> </p>

</div>
        
    </div>
  )
}

export default About;