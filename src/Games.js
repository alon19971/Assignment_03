import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const Games = () => {
  const [games, setGames] = useState([]);
  const [searchParams] = useSearchParams();
  const year = searchParams.get('year');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('http://fs1.co.il/bus/xbox1.php');
        const data = await response.json();
        console.log('Fetched data:', data);
        const filteredGames = data.filter(game => game.Year.toString() === year);
        console.log('Filtered games:', filteredGames);
        setGames(filteredGames);
      } catch (error) {
        console.error('Error fetching games data:', error);
      }
    };

    if (year) {
      fetchGames();
    }
  }, [year]);

  return (
    <div>
      <h2>Games from {year}</h2>
      {games.length === 0 ? (
        <p>No games found for the year {year}</p>
      ) : (
        <ul>
          {games.map(game => (
            <li key={game.Game}>
              <a href={game.GameLink} target="_blank" rel="noopener noreferrer">
                {game.Game}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Games;
