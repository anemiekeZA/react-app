import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/LeftPannel";
import GameContainer from "./components/GameContainers";
import axios from 'axios';

function App() {

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

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Distribute games data to each GameContainer
  const gameChunks = [];
  const chunkSize = Math.ceil(games.length / 3);
  for (let i = 0; i < games.length; i += chunkSize) {
    gameChunks.push(games.slice(i, i + chunkSize));
  }

  return (
    <div>
      <React.Fragment>
        <NavBar />
      </React.Fragment>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <div className="banner"> 
        <Button onClick={() => setAlertVisibility(true)}>
          <a href="/#">A world awaits, sign up</a>
        </Button>
        <img src="./Images/VortexGamingLogo.png" className="banner-img" alt="Vortex Gaming Logo"/>
      </div>
      <div className="parent">
        <div className="Left-side-panel">
          <ListGroup items={items} onSelectItem={handleSelectItem} />
        </div>
        <div className="Right-side-panel">
          {gameChunks.map((chunk, index) => (
            <div className="Game-container-outer" key={index}>
              <GameContainer games={chunk} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
