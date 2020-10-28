import React from 'react';
import ItemDetails from '../../itemDetailsView/ItemDetailsView';
import Record from '../../record/Record';

const StarshipDetailsView = (props) => (
  <ItemDetails {...props}>
    <Record field="model" label="Model: "/>
    <Record field="length" label="Length: "/>
    <Record field="passengers" label="Passengers: "/>
  </ItemDetails>
);

export default StarshipDetailsView;
