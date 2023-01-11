
import './App.css'
import Nav from './assets/Component/Nav'
import TravelList from './assets/Component/TravelList'
import Data from './Data/data'


function App() {
  const dataTravel = Data.map(d => {
    return <TravelList  
      key={d.id}
      img={d.img}
      location={d.location}
      link={d.link}
      title={d.title}
      startDate={d.date.startDate}
      endDate={d.date.endDate}
      description={d.description}

    />
  })
  return (
    <div className='main-container'>
      <Nav/>
      <div className="section">
        {dataTravel}
      </div>
     
    </div>
  )
}

export default App
