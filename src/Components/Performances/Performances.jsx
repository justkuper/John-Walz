import React from 'react'
import './Performances.css'
import performances from '../../assets/performancesData.js'

const Performances = () => {
  return (
    <div id='performances' className='performances'>
      <div className="title-box">
        <h1>Upcoming Performances</h1>
        
      </div>
      <div className="performances-container">
        {performances.map((performance,index)=>{
          return <div key={index} className='performances-format'>
             <h3>{performance.date}</h3>
             <h2>{performance.event}</h2>
             <p>{performance.location}</p>
              <p>{performance.details}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default Performances