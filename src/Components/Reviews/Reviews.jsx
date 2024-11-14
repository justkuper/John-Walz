import React from 'react'
import './Reviews.css'
import reviewData from '../../assets/reviewData.js'

const Reviews = () => {
  return (
    <div id='reviews' className='reviews'>
      <div className="title-box">
        <h1>My Reviews</h1>
        
      </div>
      <div className="reviews-container">
        {reviewData.map((review,index)=>{
          return <div key={index} className='peviews-format'>
             <h3><a href={review.link} target="_blank" rel="noopener noreferrer">
    {review.publisher}
  </a></h3>
             <h2>{review.date}</h2>
             {/* <p>{review.location}</p>
              <p>{review.details}</p> */}
          </div>
        })}
      </div>
    </div>
  )
}

export default Reviews