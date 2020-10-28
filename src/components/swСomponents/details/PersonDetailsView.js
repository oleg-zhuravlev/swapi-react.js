import React from 'react';
import ItemDetails from '../../itemDetailsView/ItemDetailsView';
import Record from '../../record/Record';

const PersonDetailsView = (props) => (
  <ItemDetails {...props}>
    <Record field="gender" label="Gender: "/>
    <Record field="birthYear" label="Birth Year: "/>
    <Record field="eyeColor" label="Eye Color: "/>
  </ItemDetails>
);

export default PersonDetailsView;
