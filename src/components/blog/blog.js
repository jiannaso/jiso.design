import '../../App.css';
import Header from '../header';
import InfoList from '../infoList';

function BlogMain() {
  const blogs = [{
    id: 0,
    title: 'Filipino language is hyperlocal',
    name: 'On my family\'s dialect, heritage languages, and a lifetime of intentional cultural learning',
    desc: 'October 2025',
    link: '/blog/bikol',
    linkname: 'Read',
  },
  {
    id: 1,
    title: 'Resources',
    name: 'On community, mentorship, grad school apps, and references',
    desc: 'Last updated: November 2025',
    link: '/blog/resources',
    linkname: 'Read',
  }, {
    title: 'How love shapes time, how time scales, how we make the invisible tangible',
    name: 'Stream of consciousness on breakups, ocd, and disease. Also hopecore!',
    desc: 'October 2025',
    link: '/blog/love',
    linkname: 'Read',
  },
  {
    title: 'Reading journal',
    name: 'Short book reviews, favorite quotes',
    desc: 'Last updated: November 2025',
    link: '/blog/reading',
    linkname: 'Read',
  },

  {
    title: 'Crafting this website',
    name: 'Frameworks, philosophy, and tools',
    desc: 'August 2025',
    link: '/blog/handcrafted',
    linkname: 'Read',
  }

  ]

  return (
    <div className="App" style={{ paddingBottom: '' }}>
      <Header pos={''} blend={'normal'} />
      <div className="blog-container">

        <h1 className="blog-title">
          jiso.design.blog
        </h1>
        <h3>
          {/* jiso.blog */}
        </h3>
        <p className="blog-meta">
          Frequently updated:
          <br></br> 
          <a href='blog/resources'>Resources</a>
          <br></br>
          <a href='blog/reading'>Reading journal</a>
          
           {/* <a href='blog/philosophy'>Design philosophy</a> */}
          {/* Total posts: {blogs.length} */}
        </p>


        <p>
          <br></br>
          <div className="blog-quote">
            <h2>When you’re writing, you’re trying to find out something which you don’t know. The whole language of writing for me is finding out what you don’t want to know, what you don’t want to find out. But something forces you to anyway. </h2>
            - James Baldwin
          </div>

          <p id="left">
            Just as Baldwin says, writing is a core part of how I understand myself. I write when moments feel urgent or fleeting. <b>Urgent</b> as in: there is some swelling feeling that I have to put somewhere beyond my head and body. <b>Fleeting</b> as in: this thought is so sweet or so special that I want to remember it forever. I journal physically often, and document some of it here.




          </p>
        </p>
      </div>
      <div id='left' style={{ backgroundColor: "#F3F3F3", paddingBottom: '6rem',marginTop: '5rem', paddingTop: '3rem' }}>

        <div style={{ width: "60%", margin: 'auto' }}>
          <h2 style={{ textAlign: 'center',}}>Latest</h2>

          <InfoList people={blogs} />
        </div>

      </div>
    </div>
  );
}

export default BlogMain;