const ReadMoreButton = ({ readMore, text}) => {
  return (
    <button type="button" className="read-more" onClick={readMore}>
      {text.length < 181 ? 'Read More' : 'Show Less'}
    </button>
  )
}
export default ReadMoreButton;