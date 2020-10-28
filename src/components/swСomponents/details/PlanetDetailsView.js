import React from 'react';
import ItemDetails from '../../itemDetailsView/ItemDetailsView';
import Record from '../../record/Record';

const PlanetDetailsView = (props) => (
  <ItemDetails {...props}>
    <Record field="population" label="Population: "/>
    <Record field="rotationPeriod" label="Rotation period: "/>
    <Record field="diameter" label="Diameter: "/>
  </ItemDetails>
);

export default PlanetDetailsView;
