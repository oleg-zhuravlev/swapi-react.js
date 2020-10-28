import React, {Component} from 'react';
import Row from '../row/Row';
import {PersonList} from '../swСomponents/itemLists';
import {PersonDetails} from '../swСomponents/details/details';

export default class PeoplePage extends Component {
  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({selectedItem});
  }

  render() {
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected}/>}
        right={<PersonDetails itemId={this.state.selectedItem}/>}
      />
    )
  }
}
