import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  active: PropTypes.bool,
  img: PropTypes.string
};

const CarouselItem = (props) => {
  const {
   active,
   img
  } = props;
  const classes = classNames(
    'carousel-item',
    active ? 'active' : ''
  );

  return (
    <div className="carousel-inner" role="listbox">
      <div className={classes} >
        <img src={img} alt="First slide" />
      </div>
    </div>
  );
};

CarouselItem.propTypes = propTypes;
export default CarouselItem;
