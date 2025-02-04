import React from 'react'

const Food = () => {
  return (
    <div>
<div className="card" style={{ width: '18rem' }}>
        <img 
          src="https://wallpapers.com/images/hd/food-4k-spdnpz7bhmx4kv2r.jpg"
          className="card-img-top" 
          alt="Card" 
        />
        <div className="card-body">
          <h5 className="card-title">Food </h5>
          <p className="card-text">Food is any substance consumed to provide nutritional support and energy to an organism. It can be raw, processed, or formulated and is consumed orally by animals for growth, health, or pleasure.</p>
          <a href="#" className="btn btn-primary">Go food page</a>
        </div>
      </div>
    </div>
  )
}

export default Food