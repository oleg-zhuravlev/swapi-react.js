import React, {Component} from 'react';

const hocDetails = (Wrapped) => {
  return class extends Component {
    state = {
      data: null,
      image: null,
      loading: false,
      error: false
    }

    componentDidMount() {
      this.update();
    }

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.update();
      }
    }

    async update() {
      const {itemId} = this.props;

      if (itemId) {
        this.setState({loading: true});

        try {
          const data = await this.props.getData(itemId);
          const image = await this.props.getImage(data);

          this.setState({
            data,
            image,
            loading: false
          });
        } catch (err) {
          console.error(err);

          this.setState({
            error: true,
            loading: false
          });
        }
      }
    }

    render() {
      return (
        <div className="details wrapper d-flex">
          <Wrapped {...this.state}/>
        </div>
      );
    }
  }
}

export default hocDetails;