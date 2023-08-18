import { useState } from 'react'
import Card from './Card'
import tours from '../tours'
import RefreshButton from './RefreshButton'

function App() {
  const [myTours, setMyTours] = useState(tours)

  return (
    <>
      <h1 className="main-title">
        {myTours.length > 0 ? 'Our Tours' : 'No Tours Left'}
        {myTours.length > 0 ? <span className="main-title-border"></span> : ''}
      </h1>

      <div className="refresh-container">
        {/* if the array is empty, the refresh button appears */}
        {myTours.length === 0 && <RefreshButton setMyTours={setMyTours} />}
      </div>

      <main>
        {
          myTours.map((tour) => (
            <Card
              key={tour.id}
              {...tour}
              myTours={myTours}
              setMyTours={setMyTours}
            />
          ))
        }
      </main>
    </>
  )
}

export default App
