//Don't worry about the errors in Glitch. React should still work.
//to figure out how to export https://glitch.com/edit/#!/starter-react?path=app/components/UnorderedList.jsx:5:0

const historyList = ["1959 - Nobuo Uematsu is born in Kochi, Kochi Prefecture, Japan.","1985 - Joins Square to begin on his first project, Cruise Chaser","2004 - Uematsu leaves Square to begin his freelancing work."];

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
    <div className="text-center">
      <hr />
      <p>Written and coded by <a href="#">Allan Do</a>.</p>
    </div>
  );
}


const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <a class="navbar-brand" href="http://www.dogearrecords.com/">Official Site</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">About<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Timeline<span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#">Sample Work<span class="sr-only">(current)</span></a>
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
        <section id='About' class='main-section'>
          <header>
            <h2>About</h2>
          </header>
          <p>Nobuo Uematsu (植松 伸夫 Uematsu Nobuo, born March 21, 1959) is a Japanese video game composer, best known for scoring most of the titles in the Final Fantasy series by Square Enix. He is considered to be one of the most well known composers in the video game industry. Sometimes referred to as the "Beethoven of video games music", he appeared five times in the top 20 of the annual Classic FM Hall of Fame.</p>
        </section>
        <section id='Timeline' class='main-section'>
          <header>
            <h2>Timeline</h2>
          </header>
          <UnorderedList items={historyList} />
        </section>
        <section id='Main_Games' class='main-section'>
          <header>
            <h2>Main Games</h2>
          </header>
          <ul>
            <li>Final Fantasy I</li>
            <li>Final Fantasy II</li>
            <li>Final Fantasy III</li>
            <li>Final Fantasy IV</li>
          </ul>
          <code>
            <p>Other notable games:</p>
            <ul>
              <li>"Final Fantasy Tactics Advance"</li>
            </ul>
          </code>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const application = <App />;
const main = document.getElementById('root');


ReactDOM.render(application,main);