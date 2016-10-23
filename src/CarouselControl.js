import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  direction: PropTypes.string
};

const CarouselControl = (props) => {
  const {
   direction
  } = props;
  const classes = classNames(
    direction,
    'carousel-control'
  );

  return (
    <a className={classes} href="#carousel-example-generic" role="button" data-slide={direction}>
      <span className={`icon-${direction === 'left' ? 'prev' : 'next'}`} aria-hidden="true" />
      <span className="sr-only">{direction === 'left' ? 'Previous' : 'Next'}</span>
    </a>
  );
};

CarouselControl.propTypes = propTypes;
export default CarouselControl;
