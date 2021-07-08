import React from 'react';
import {SwapiServiceConsumer} from '../serviceСontext/swapiServiceСontext';

const hocWithSwapiService = (Wrapped, mapMethodsToProps) => {
  return (props) => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapMethodsToProps(swapiService)

          return (
            <Wrapped
              {...props}
              {...serviceProps}
            />
          )
        }}
      </SwapiServiceConsumer>
    )
  }
}

export default hocWithSwapiService;