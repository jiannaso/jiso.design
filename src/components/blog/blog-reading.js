import '../../App.css';
import Header from '../header';
import ReadingList from './readingList';
import InfoList from '../infoList';
import books from './reviews';
function BlogReading() {

  return (
    <div className="App">
      <Header pos={''} blend={'normal'} />
      <div className="blog-container">

        <h1 className="blog-title">
          Reading journal
        </h1>
        <h3>
          Reviews + quotes
        </h3>


        <p>
          <br></br>
        
        </p>
        <p id="left">
        <ReadingList books={books} />

        </p>

      </div>
    </div>
  );
}

export default BlogReading;