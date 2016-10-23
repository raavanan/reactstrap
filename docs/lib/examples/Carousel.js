import React from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Carousel interval={400}>
        <CarouselItem active img="https://placeholdit.imgix.net/~text?txtsize=54&txt=900%C3%97500&w=900&h=500" />
        <CarouselItem img="https://placeholdit.imgix.net/~text?txtsize=54&txt=900%C3%97500&w=900&h=500" />
        <CarouselItem img="https://placeholdit.imgix.net/~text?txtsize=54&txt=900%C3%97500&w=900&h=500" />
        <CarouselControl direction="left" />
        <CarouselControl direction="right" />
      </Carousel>
  );
  }
}

