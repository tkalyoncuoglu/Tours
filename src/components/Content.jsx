import { useState } from "react";
import ReadMoreButton from "./ReadMoreButton";

const Content = ({ title, description }) => {
  // set the maximum number of characters in the description to 180
  const shortDescription = description.substring(0, 180);
  const [text, setText] = useState(shortDescription);

  const readMore = () => {
    text.length < 181 ? setText(description) : setText(shortDescription);
  };

  return (
    <>
      <div className="content">
        <h2 className="card-title">{title}</h2>
        <p className="description">
          {text + (text.length < 181 ? '... ' : '')}
        </p>
        <ReadMoreButton readMore={readMore} text={text} />
      </div>
    </>
  )
}

export default Content;