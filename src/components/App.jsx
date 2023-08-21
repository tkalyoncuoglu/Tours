import { useState, createContext } from 'react'
import Card from './Card'
import tours from '../tours'
import RefreshButton from './RefreshButton'

const AppContext = createContext();

function App() {
  const [myTours, setMyTours] = useState(tours);

  const removeTour = (id) => {
    const newTourList = myTours.filter((tour) => tour.id !== id);
    setMyTours(newTourList);
  };

  return (
    <AppContext.Provider value={{removeTour}}>
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
            />
          ))
        }
      </main>
      </AppContext.Provider>
  )
}

export default App;

export {AppContext};
