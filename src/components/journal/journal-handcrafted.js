import '../../App.css';
import Header from '../header';

function BlogHandcrafted() {
  return (
    <div className="App">
      <Header pos={''} blend={'normal'} />
      <div className="blog-container">

        <h1 className="blog-title">
          This website was handcrafted with love
        </h1>
        <h3>
          On craft and resisting "vibe coding"
        </h3>
        <p className="blog-meta">August 11, 2025 ✿ Reading time: 3 minutes</p>


        <p>
          <br></br>
          {/* <div className="blog-quote">
            <h3>''Ang hindi magmahal sa sariling wika, daig pa ang hayop at malansang isda''</h3>

            <i>One who does not love his own language is worse than an animal and a smelly fish. </i>
            <br></br>
            <br></br>

            - José Rizal, a national hero of the Philippines and fearless activist/poet/doctor during spanish colonization
          </div> */}

          <p id="left">
            welcome to my website of 2025, using fonts and images by filipino designers (and the shining star is the Vengeance font by <a href='https://allicunanan.gumroad.com/'>Alli Cunanan</a>) 🌸

            <br></br> <br></br>

            i secretly redo my portfolio twice a year, exploring it as a creative playground instead of corporate performance. there is no “vibe coding”— i speak poems to my code editor, defining each data point and pixel by hand. <br></br> <br></br>

            this is a personal digital space independent of big tech. it’s how i want the internet to remember me. solitude is my favorite place to create, where no one sees me, where i can design selfishly and freely. i remember posting bits of my work in 2019 and immediately getting questions about whether i was selling it and where people could buy it. though it was kind and sweet, i felt misunderstood; it seemed like people saw something beautiful and their first thought was wanting it for themselves. i stopped sharing so freely. i waited weeks and months to post projects, taking time to bask in their meaning and complexities and imperfections. everything i make is to remember myself, my family, and our histories. i hated feeling like that was reduced to consumption, and for my work to be shaped by external expectation.
            <br></br> <br></br>
            when i started my phd and was gifted all my hours to work on whatever i wanted, i felt incredibly light. now, i want to align my perception of myself with my reality. i am leaving my design turtle shell because connecting about art is the most special feeling. and i love this safe small website. let’s play together :~)

            p.s. special shoutout to my <a href='https://jiannaso.github.io/'>2019</a> and <a href='https://jiso-soup.webflow.io/'>2022</a> portfolios ⭐️
          </p>
        </p>
      </div>
    </div>
  );
}

export default BlogHandcrafted;