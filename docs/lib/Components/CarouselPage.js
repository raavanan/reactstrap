/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Carousel } from 'reactstrap';
import Helmet from 'react-helmet';

import CarouselExample from '../examples/Carousel';
const CarouselExampleSource = require('!!raw!../examples/Carousel');

export default class CarouselPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Carousel" />

        <h3>Carousel</h3>
        <div className="docs-example">
          <CarouselExample />
        </div>
        <pre>
          <PrismCode className="language-jsx">
            {CarouselExampleSource}
          </PrismCode>
        </pre>
      </div>
    );
  }
}
