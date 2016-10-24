import React, { PropTypes } from 'react';
import classNames from 'classnames';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
      <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" className="active" />
        <li data-target="#carousel-example-generic" data-slide-to="1" />
        <li data-target="#carousel-example-generic" data-slide-to="2" />
      </ol>
      {props.children}
    </div>
    );
};
Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
export default Carousel;
