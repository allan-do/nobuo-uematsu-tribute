//Don't worry about the errors in Glitch. React should still work.
//to figure out how to export https://glitch.com/edit/#!/starter-react?path=app/components/UnorderedList.jsx:5:0

const historyList = [
                    "1959 - Nobuo Uematsu is born in Kochi, Kochi Prefecture, Japan",
                     "1985 - Joins Square to begin on his first project, Cruise Chaser", 
                    "1987 - Collaborated with Sakaguchi on Final Fantasy",
                    "1994 - Signed to complete Chrono Trigger soundtrack after Yasunori Mitsuda required medical attention",
                     "2004 - Uematsu leaves Square to begin his freelancing work",
                    "2006 - Created Dog Ear Records",
                    "2008 - Created the main theme for Super Smash Bros. Brawl"
                    ];

const UnorderedList = ({ items }) => {
  return (
    <ul>
      {items.map((item, i) => {
        return <li key={i}><strong>{item.slice(0,4)}</strong>{item.slice(4,item.length)}</li>;
      })}
    </ul>
  );
}

const Footer = () => {
  return (
    <div id="footer" className="text-center">
      <hr />
      <h3>
        If you have time, you should read more about this incredible human being on his <a className="link" href="https://en.wikipedia.org/wiki/Nobuo_Uematsu" target="_blank">Wikipedia entry</a>.
      </h3>
      <p>Coded by <a className="link" target="_blank" href="https://github.com/allan-do">Allan Do</a>. Information source from Wikipedia.</p>
    </div>
  );
}


const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
      <a class="navbar-brand" href="http://www.dogearrecords.com/">Official Site</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#About">About<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#Timeline">Timeline<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#Samples">Samples<span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <div className="top-page">
      </div>
      <main id="main-doc">
        <section id='About' className='main-section'>
          <header>
            <h2>About</h2>
          </header>
          <p>Nobuo Uematsu (植松 伸夫 Uematsu Nobuo, born March 21, 1959) is a Japanese video game composer, best known for scoring most of the titles in the Final Fantasy series by Square Enix. He is considered to be one of the most well known composers in the video game industry. Sometimes referred to as the "Beethoven of video games music", he appeared five times in the top 20 of the annual Classic FM Hall of Fame.</p>
          <p>Uematsu, a self-taught musician, began playing the piano at the age of twelve, with English singer-songwriter Elton John as his biggest influence. Uematsu joined Square in 1986, where he first met Final Fantasy creator Hironobu Sakaguchi. The two later worked together on many titles at the company, most notably in the Final Fantasy series. After nearly two decades with Square, Uematsu left in 2004 to create his own production company, which included the Dog Ear Records music label. He has since composed music as a freelancer for other games, including ones developed by Square Enix and Sakaguchi's development studio, Mistwalker.</p>
          
        </section>
        <section id='Timeline' className='main-section'>
          <div className="section-box">
            <header>
              <h2>Timeline</h2>
            </header>
            <div className='grid2x1'>
              <div>
                <UnorderedList items={historyList} />
              </div>
              <div>
                 <img className="rounded" alt="Uematsu jamming on a keyboard" src="https://cdn.glitch.com/99473d57-ca95-47ba-b8bb-bc65a0761f74%2FtimeLineNobuo.jpg?1533339211333" height="199" width="375"></img>
              </div>
            </div>
          </div>
        </section>
        <section id='Samples' className='main-section'>
          <header>
            <h2>Samples</h2>
          </header>
          <div className='grid2x1'>
            <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/t7wJ8pE2qKU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ZMYisFOaz1s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div>
                <p id="quote">"He has paved the way for a new generation of composers to embrace what can be done with new technologies, and new forms of entertainment."</p>
                  <p id="quoteAuth">— Sara Winegardner, Goombastomp.com</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top}, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});


const application = <App />;
const main = document.getElementById('root');


ReactDOM.render(application,main);