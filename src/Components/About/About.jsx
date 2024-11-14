import React from 'react'
import './About.css'
import profile_img from '../../assets/cat_about.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About John</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                  <p>John Walz is a renowned soloist and chamber musician, celebrated for his virtuosity and musicianship. A student of the legendary cellist Pierre Fournier, he has performed as a soloist with over 150 orchestras across four continents.</p>
                  <p>His performances include a wide range of concertos, from standard works to rarities like Martinu’s Concerto #1 and Schuman’s Song of Orfeus. Walz has played 25 different concertos with major orchestras worldwide.</p>
                  <p>In 1979, Walz co-founded the Pacific Trio with pianist Edith Orloff. Now performing with violinist Roger Wilkie, the trio has played more than 900 concerts throughout North America and Europe.</p>
                  <p>Walz is the principal cellist for the Los Angeles Opera and was previously the principal cellist with the Long Beach Symphony. His discography includes works by Dvorak, Haydn, Shostakovich, and Beethoven’s Triple Concerto. He is also a faculty member at the Idyllwild Arts program.</p>
                </div> 
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>30+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>1000+</h1>
                <p>CONCERTS PLAYED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>2</h1>
                <p>NOTES MISSED</p>
            </div>
        </div>
    </div>
  )
}

export default About