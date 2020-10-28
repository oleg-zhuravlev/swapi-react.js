import React, {Component} from 'react';
import Row from '../row/Row';
import {PlanetList} from '../swСomponents/itemLists';
import {PlanetDetails} from '../swСomponents/details/details';

export default class PlanetsPage extends Component {
  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem});
  }

  render() {
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected}/>}
        right={<PlanetDetails itemId={this.state.selectedItem}/>}
      />
    )
  }
}
