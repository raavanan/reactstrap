import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  active: PropTypes.bool,
  img: PropTypes.string,
  captionHeader: PropTypes.string,
  captionText: PropTypes.string
};

const CarouselItem = (props) => {
  const {
   active,
   img,
   captionHeader,
   captionText
  } = props;

  const classes = classNames(
    'carousel-item',
    active ? 'active' : ''
  );

  const caption = () => {
    if (captionHeader || captionText) {
      return (<div className="carousel-caption">
        { captionHeader ? <h3>{captionHeader}</h3> : ''}
        { captionText ? <p>{captionText}</p> : ''}
      </div>);
    } else {
      return '';
    }
  };

  return (
    <div className="carousel-inner" role="listbox">
      <div className={classes} >
        <img src={img} alt="First slide" />
      </div>
      {caption()}
    </div>
  );

};

CarouselItem.propTypes = propTypes;
export default CarouselItem;
