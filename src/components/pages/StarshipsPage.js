import React, {Component} from 'react';
import Row from '../row/Row';
import {StarshipList} from '../swСomponents/itemLists';
import {StarshipDetails} from '../swСomponents/details/details';

export default class StarshipsPage extends Component {
  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem});
  }

  render() {
    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected}/>}
        right={<StarshipDetails itemId={this.state.selectedItem}/>}
      />
    )
  }
}
