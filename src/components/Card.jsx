import Content from './Content'
import Image from './Image'
import NotInterestedButton from './NotInterestedButton'

const Card = ({ id, title, price, imgUrl, description }) => {
  return (
    <>
      <div className="card">
        <span className="price">{price}</span>
        <Image imgUrl={imgUrl} title={title} />
        <Content title={title} description={description} />
        <NotInterestedButton id={id} />
      </div>
    </>
  )
}

export default Card;
