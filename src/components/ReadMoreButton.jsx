const ReadMoreButton = ({ readMore, short}) => {
  return (
    <button type="button" className="read-more" onClick={readMore}>
      {short ? 'Read More' : 'Show Less'}
    </button>
  )
}
export default ReadMoreButton;