import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className='app'>
    <Nav/>
    <Banner/>
    <Row title='Netflix Originals' fetchurl={requests.fetchNetflixOriginals} isLargeRow={true} />
    <Row title='Top Rated' fetchurl={requests.fetchTopRated} />
    <Row title='Trending' fetchurl={requests.fetchTrending} />
    <Row title='Romance Movies' fetchurl={requests.fetchRomanceMovies} />
    <Row title='Comedy Movies' fetchurl={requests.fetchComedyMovies} />
    <Row title='Horror Movies' fetchurl={requests.fetchHorrorMovies} />
    </div>
  );
}

export default App;
