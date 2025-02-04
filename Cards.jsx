/*import React from 'react'

const Cards = () => {
  return (
    
<div>
<div className="card" style="width: 18rem;">
  <img src="https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg" class="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
        

  )
}

export default Cards*/

import React from 'react'

const Cards = () => {
  return (
    <div style={{display:'flex',justifyContent:"space-around"}}>
      <div className="card" style={{ width: '18rem' }}>
        <img 
          src="https://wallpapers.com/images/hd/food-4k-spdnpz7bhmx4kv2r.jpg"
          className="card-img-top" 
          alt="Card" 
        />
        <div className="card-body">
          <h5 className="card-title">Food </h5>
          <p className="card-text">Food is any substance consumed to provide nutritional support and energy to an organism. It can be raw, processed, or formulated and is consumed orally by animals for growth, health, or pleasure.</p>
          <a href="http://localhost:3004/Food" className="btn btn-primary">Go food page</a>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img 
          src="https://th.bing.com/th/id/OIP.fkpcMRPqhK6yfy1glBg-7QAAAA?rs=1&pid=ImgDetMain"
          className="card-img-top" 
          alt="Card" 
        />
        <div className="card-body">
          <h5 className="card-title">Movie</h5>
          <p className="card-text">A film, also called a movie or a motion picture, is a series of still photographs on film projected onto a screen using light in rapid succession.</p>
          <a href="http://localhost:3004/Movie" className="btn btn-primary">Go film page</a>
        </div>
      </div>
      <div className="card" style={{ width: '18rem' }}>
        <img 
          src="https://th.bing.com/th/id/OIP.89uvk8TA6-reQ7koKTfAwwHaEX?rs=1&pid=ImgDetMain" 
          className="card-img-top" 
          alt="Card" 
        />
        <div className="card-body">
          <h5 className="card-title">Technology</h5>
          <p className="card-text">Technology is the application of conceptual knowledge to achieve practical goals, especially in a reproducible way. The word technology can also mean the products resulting from such efforts, including both tangible tools such as utensils or machines, and intangible ones such as software.</p>
          <a href="http://localhost:3004/Technology" className="btn btn-primary">Go technology page</a>
        </div>
      </div>
    </div>
  )
}

export default Cards
