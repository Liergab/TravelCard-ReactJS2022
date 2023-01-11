

const TravelList = (props) => {
    console.log(props)
    const {img, location, link, title, startDate, endDate, description} = props
  
    return (
      <div className="Travel-list-container">
        <div className="travel-img-container">
            <img src={`../src/image/${img}`} alt="" className="img" />
        </div>
        <div className="details-container">
            <div className="location-container">
                
                <i class="fa-solid fa-location-dot"></i>
                <h3 className="location">{location}</h3>
                <a href={link} className="link">view in google maps</a>
                
            </div>
            <h1 className="title">{title}</h1>
            <h4 className="date">{startDate} - end {endDate}</h4>
            <p className="description">{description}</p>
        </div>
      </div>
    )
  }
  
  export default TravelList
  