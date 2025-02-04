import React from 'react'

const Movie = () => {
  return (
    <div>
        <div className="card" style={{ width: '18rem' }}>
        <img 
          src="https://th.bing.com/th/id/OIP.fkpcMRPqhK6yfy1glBg-7QAAAA?rs=1&pid=ImgDetMain"
          className="card-img-top" 
          alt="Card" 
        />
        <div className="card-body">
          <h5 className="card-title">Movie</h5>
          <p className="card-text">A film, also called a movie or a motion picture, is a series of still photographs on film projected onto a screen using light in rapid succession.</p>
          <a href="#" className="btn btn-primary">Go film page</a>
        </div>
      </div>
    </div>
  )
}

export default Movie