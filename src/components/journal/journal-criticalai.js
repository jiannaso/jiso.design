import '../../App.css';
import Header from '../header';

function BlogTemplate() {
  return (
    <div className="App">
      <Header pos={''} blend={'normal'} />
      <div className="blog-container">

        <h1 className="blog-title">
          Critical AI Use
        </h1>
        <h3>
          Yay
        </h3>
        <p className="blog-meta">November 26, 2025 ✿ Reading time: 5 minutes</p>


        <p>
          <br></br>
          <div className="blog-quote">
            <h3>''Ang hindi magmahal sa sariling wika, daig pa ang hayop at malansang isda''</h3>

            <i>One who does not love his own language is worse than an animal and a smelly fish. </i>
            <br></br>
            <br></br>

            - José Rizal, a national hero of the Philippines and fearless activist/poet/doctor during spanish colonization
          </div>

          <p id="left">
          </p>
        </p>
      </div>
    </div>
  );
}

export default BlogTemplate;