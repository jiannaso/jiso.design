import flowerSticker from "../media/flower.png"


function CraftClub() {
    return (
        <div style={{textAlign: "center",width: "80%", margin: 'auto', paddingTop: '5rem'}}>
            <img src={flowerSticker} className="App-logo"alt="flower" style={{width: "60px", height: "60px"}}/>
            <h3 >Join the</h3>
            <h1 >Cozy Craft Club</h1>
            <p>Weekly craft nights in Boston & the Bay</p>
            <p><b>BYOC</b> (Bring Your Own Craft)!</p>


            <h3 >We'll let you know about the next one!</h3>
            <input type="text" id="contact" name="contact"/>

<div style={{textAlign:"left"}}>
<h2 >Craft Calendar</h2>
            <h2 >Craft Resources</h2>
<p>
What got me started and what continues to inspire me! I owe my craft life to the worldwide craft community online and in my many homes.

<h3>Knitting</h3>


<div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

<div>
<h4>The basics</h4>

<ul>
    <li>
        Knitting and purling: the only two stitches you'll ever need xx
    </li>
    
    <li>
        How to freehand: how to knit without a pattern
    </li>

    <li>
        Bonnet tutorial: a perfect beginner project
    </li>

    <li>
        Stretchy bind-offs: how to finish a project
    </li>

    <li>
        Yarn stores:
        Gather Here (Cambridge),
        Flying Squirrel (Oakland),
        secondhand stores (anywhere)
    </li>

    <li>
        Positive and negative ease: how to make something "fitted" or "loose"
    </li>
</ul>
</div>

<div>
<h4>Creators</h4>
<ul>
    <li>
        Loupy Studio: my OG inspo! She has the most slayful free patterns.
    </li>

    <li>
        : incredibleeee algorithmic knitting patterns
    </li>

    <li>
        Cristina Criaco: lovely asymmetrical stripes
    </li>

    <li>
        hi
    </li>
</ul>
</div>

<div>
<h4>Research</h4>

<ul>
<li>
        Vera : one of the coolest computational knitting projects
    </li>
    
    <li>
        The political power of knitting
    </li>

    <li>
        This Harvard syllabus on weaving
    </li>

    <li>
        Knitting as a form of protest
    </li>

    <li>
        more on are.na
    </li>
</ul>
</div>
</div>


</p>
</div>
            



        </div>
    );
}

export default CraftClub;