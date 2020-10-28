import React, {Component} from 'react';

export default (Wrapped) => {
  return class extends Component {
    state = {
      data: {},
      image: null,
      loading: true,
      error: false
    }

    componentDidMount() {
      this.update();
      this.interval = setInterval(this.update, 10000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    onLoaded(data, image) {
      this.setState({
        data,
        image,
        loading: false,
      });
    }

    update = async () => {
      try {
        const id = Math.floor(Math.random()*15+2);

        const data = await this.props.getData(id);
        const image = await this.props.getImage(data);

        this.onLoaded(data, image);
      } catch (err) {
        console.error(err);

        this.setState({error: true});
      }
    }

    render() {
      return (
        <div className="random-planet wrapper d-flex">
          <Wrapped {...this.state}/>
        </div>
      );
    }
  }
}
