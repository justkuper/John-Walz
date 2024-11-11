import React from 'react';
import './Recordings.css';

const Recordings = () => {
  return (
    <div className="recordings">
      <h1>Recordings</h1>
      
      {/* Recording 1 */}
      <div className="recording-card">
        <h2>A Tribute to Pierre Fournier</h2>
        <p>Works by Martinu, Vivaldi, and Couperin</p>
        <p><strong>Edith Orloff, piano; Czech National Symphony Orchestra</strong></p>
        <button>Play Martinu Concerto I, Mvmt III</button>
        <button>Play Vivaldi Concerto I, Mvmt II & III</button>
        <button className="buy-button">Buy CD</button>
      </div>

      {/* Recording 2 */}
      <div className="recording-card">
        <h2>Antonin Dvorak</h2>
        <p>Cello Concerto in B Minor, Op. 104; Sonatine in G Major, Op.100; Rondo in G Minor, Op.94</p>
        <p><strong>Paul Freeman, conductor; Czech National Symphony Orchestra</strong></p>
        <button>Play Cello Concerto I, Mvmt I</button>
        <button className="buy-button">Buy CD</button>
      </div>

      {/* Recording 3 */}
      <div className="recording-card">
        <h2>Shostakovich Cello Concerto</h2>
        <p>Works by Shostakovich, Bruch, and Bloch</p>
        <p>Shostakovich Cello Concerto; Bloch Schelomo; Bruch Kol Nidre</p>
        <p><strong>Joanne Falletta, conductor; Czech National Symphony Orchestra</strong></p>
        <button>Play Cello Concerto I, Mvmt I</button>
        <button className="buy-button">Buy CD</button>
      </div>

      {/* Recording 4 */}
      <div className="recording-card">
        <h2>John Walz Plays Kol Nidre and Other Cello Favorites</h2>
        <p><strong>Edith Orloff, piano; Czech National Symphony Orchestra</strong></p>
        <button>Play Ravel Piece en Forme de Habanera</button>
        <button>Play Bruch Kol Nidre</button>
        <button>Play Chopin Introduction and Polonaise</button>
        <button className="buy-button">Buy CD</button>
      </div>
    </div>
  );
};

export default Recordings;
