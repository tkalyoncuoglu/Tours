const NotInterestedButton = ({ id, myTours, setMyTours }) => {

  const removeTour = () => {
    // delete tour when pressing the remove button
    const newTourList = myTours.filter((tour) => tour.id !== id);
    setMyTours(newTourList);
  };

  return (
    <div className="not-interested-container">
      <button onClick={() => removeTour(id)} className="not-interested" type="button">
        Not Interested
      </button>
    </div>
  )
}

export default NotInterestedButton;