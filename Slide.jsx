/*import React from 'react'

const Slide = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
</div>
    </div>
  )
}

export default Slide*/

import React from 'react'
const Slide = () => {
  return (
    <div>
        <div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://wallpapers.com/images/hd/food-4k-spdnpz7bhmx4kv2r.jpg" className="d-block w-100" alt="First slide" height={300}/>
          </div>
          <div className="carousel-item">
            <img src="https://th.bing.com/th/id/OIP.fkpcMRPqhK6yfy1glBg-7QAAAA?rs=1&pid=ImgDetMain " className="d-block w-100" alt="Second slide" height={300}/>
          </div>
          <div className="carousel-item">
            <img src="https://th.bing.com/th/id/OIP.89uvk8TA6-reQ7koKTfAwwHaEX?rs=1&pid=ImgDetMain" className="d-block w-100" alt="Third slide" height={300} />
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>


    </div>
  )
}

export default Slide

/*import React from 'react'

const Slide = () => {
  return (
    <div>
     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Background-Beautiful-Nature-Images-HD.jpg" className="d-block w-100" alt="First slide" height={300}/>
    </div>
    <div className="carousel-item">
      <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/3D-Nature-Images-Free-Download.jpg" className="d-block w-100" alt="Second slider" height={300}/>
    </div>
    <div className="carousel-item">
      <img src="https://wallpaperaccess.com/full/233324.jpg" className="d-block w-100" alt="Third slider" height={300}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default */