import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import Button from "./components/Button";
import LeftPannel from "./components/LeftPannel";
import LatestGames from "./LatestGames";
import Footer from "./components/footer";
import GameContainer from "./components/GameContainers";
import axios from 'axios';

function App() {
  const currentYear = new Date().getFullYear();


  const [alertVisible, setAlertVisibility] = useState(false);
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('https://api.rawg.io/api/games', {
          params: {
            key: 'dff1ebb552c24052b03e6f79755f6b42',
            page_size: 6 // Fetch 6 games to distribute among containers
          },
        });

        setGames(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  const handleSelectItem = (item) => {
    console.log(item);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Distribute games data to each GameContainer
  const gameDisplayed = [];
  const gameDisplayedAmount = Math.ceil(games.length / 3);
  for (let i = 0; i < games.length; i += gameDisplayedAmount) {
    gameDisplayed.push(games.slice(i, i + gameDisplayedAmount));
  }

  return (
    <Router>
      <div>
        <React.Fragment>
          <NavBar />
        </React.Fragment>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
        )}
        <div className="banner"> 
          <img src="./Images/DoomEternal.jpg" className="banner-img" alt="Vortex Gaming Logo"/>
        </div>
        <div className="parent">
          <div className="Left-side-panel">
            <LeftPannel/>
          </div>
          <div className="Right-side-panel">
            {gameDisplayed.map((games, index) => (
              <div className="Game-container-outer" key={index}>
                <GameContainer games={games} />
              </div>
            ))}
          </div>
        </div>
        <div className="banner"> 
          <Button onClick={() => setAlertVisibility(true)}>
            <a href="/#">A world awaits, sign up</a>
          </Button>
          <img src="./Images/VortexGamingLogo.png" className="banner-img" alt="Vortex Gaming Logo"/>
        </div>
        <Footer/>
        <div className='clause-footer-container'>
          <p>Rawg.io is in no way affiliated or associated however to spread the love I've included, them please may you follow them for their content.</p>
        </div>
        <Routes>
          <Route path="/latest-games" element={<LatestGames />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
