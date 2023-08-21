import { useState } from "react";
import ReadMoreButton from "./ReadMoreButton";

const Content = ({ title, description }) => {
  const isSmallText = description.length < 181;
  const shortDescription = isSmallText ? description.substring(0, 180) : description.substring(0, 180) + "...";
  const [short, setShort] = useState(true);

  const readMore = () => {
    setShort(!short);
  };

  return (
    <>
      <div className="content">
        <h2 className="card-title">{title}</h2>
        <p className="description">
          {short ? shortDescription : description}
        </p>
        {!isSmallText && <ReadMoreButton readMore={readMore} short={short} />}
      </div>
    </>
  )
}

export default Content;