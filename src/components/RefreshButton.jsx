import tours from '../tours'

const RefreshButton = ({ setMyTours }) => {

  const refresh = () => {
    setMyTours(tours);
  };

  return (
    <button onClick={refresh} type="button" className="refresh">
      Refresh
    </button>
  )
}

export default RefreshButton;
