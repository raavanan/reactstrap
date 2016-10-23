import React, { PropTypes } from 'react';
import classNames from 'classnames';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const propTypes = {
  interval: PropTypes.number,
  className: PropTypes.any,
  pause: PropTypes.string,
  wrap: PropTypes.bool,
  keyboard: PropTypes.bool
};

const defaultProps = {
  interval: 5000,
  className: 'slide',
  pause: 'hover',
  wrap: true,
  keyboard: true
};

const Carousel = (props) => {
  const classes = classNames('carousel', props.className);
  return (
    <div id="carousel-example-generic" className={classes} data-ride="carousel">
        {props.children}
    </div>
    );
};
Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
export default Carousel;
