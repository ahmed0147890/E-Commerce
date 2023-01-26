import Image4 from "./images/image4.jpg"
function About() {
  return (
    <div className="hero">
      <h1 className="my-4 text-center">E-Commerce Page</h1>
      <div className="card text-bg-dark">
        <img src={Image4} className="card-img" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-4 fw-bolder mb-0">NEW SEEISION ARRIVALS</h5>
            <p className="card-text lead fs-2">CHECK OUT ALL THRENDS</p>
          </div>



        </div>
      </div>
    </div>
  )
}
export default About