import { useContext } from "react";
import { AppContext } from "./App";



const NotInterestedButton = ({ id, myTours, setMyTours }) => {

  const context = useContext(AppContext);


  return (
    <div className="not-interested-container">
      <button onClick={() => context.removeTour(id)} className="not-interested" type="button">
        Not Interested
      </button>
    </div>
  )
}

export default NotInterestedButton;