import React from 'react';
import './GamesBoard.css';
import NavBar from '../NavBar/NavBar';
import Sidebar from '../SideBar/SideBar';

const gamesData = [
  {
    id: 1,
    name: 'Word Wise',
    imageUrl: 'https://wallpaperaccess.com/full/1260521.jpg',
    description: 'Embark on a thrilling language journey! A game, not a boring lesson. Solve Quizzes, unlock new words, and become a language legend!',
    isActive: true,
  },
  {
    id: 2,
    name: 'Rest of the games are coming soon!',
    imageUrl: 'https://img.freepik.com/premium-psd/coming-soon-light-sign_35913-1383.jpg?w=996',
    description: 'Other games will be added soon, thanks for your patience!',
    isActive: false,
  },
  // Add more game data as needed
];

const GamesBoard = () => {
  return (
    <>
      <NavBar/>
      <Sidebar/>
    <div className="games-board">
      {gamesData.map((game) => (
        <div key={game.id} className="game-card">
          <img src={game.imageUrl} alt={game.name} />
          <div className="game-details">
            <h2>{game.name}</h2>
            <p>{game.description}</p>
          </div>
          {game.isActive ? ( 
            <button className="play-button">Play Now</button>
          ) : (
            <button className="deactivated-button" disabled>
              Deactivated
            </button>
          )}        
          </div>
      ))}
    </div>
    </>
  );
};

export default GamesBoard;
