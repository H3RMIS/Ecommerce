// use rafce to display react boilerplate code to start us off
// install es7 snippet extension for this
import React from 'react'

const Home = () => {
  return (  
    <>
      HeroBanner 

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {
          ['Product 1', 'Product 2'].map((product) => product)
        }
      </div>

      Footer
    </>
  )
}

export default Home;