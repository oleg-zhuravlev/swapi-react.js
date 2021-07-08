import React, {Component} from 'react';

const hocList = (Wrapped, renderItem) => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false
    }

    componentDidMount() {
      this.props.getData()
        .then(data => {
          this.setState({
            data,
            loading: false
          })
        })
        .catch((err) => {
          console.log(err);

          this.setState({
            error: true,
            loading: false
          });
        });
    }

    render() {
      const {onItemSelected} = this.props;

      return (
        <Wrapped
          {...this.state}
          renderItem={renderItem}
          onItemSelected={onItemSelected}
        />
      )
    }
  }
}

export default hocList;