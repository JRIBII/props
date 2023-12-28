import './App.css';
import Product from './components/Product';

function App() {
  const handleName = (name) => {
    (name !== 'Default name') ? (alert(`hi i am ${name}`)) : alert("plz edit your profile")
  }
  return (
    <div className="App">
      <div>
        <h1>who's your favorite player</h1>
      </div>

      <div className='allCARD'>
        <Product name="mbappé" profession="psg" age="27" handleName={handleName} img="https://i2-prod.football.london/incoming/article28183500.ece/ALTERNATES/s1200/0_Mbappe-2.jpg" />
        <Product name="ronaldo" profession="al nasser" age="40" handleName={handleName} img="https://static01.nyt.com/images/2022/12/30/multimedia/30soccer-ronaldo-1-76fd/30soccer-ronaldo-1-76fd-mediumSquareAt3X.jpg" />
        <Product name="messi" profession="inter miami" age="30" handleName={handleName} img="https://media.newyorker.com/photos/64bc4330ef09d4a0e04cb249/master/pass/Rosen-Messi-Miami.jpg" />
    </div>



    </div>
  );
}

export default App;
