import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';

import './itemDetails.css';

const ItemDetails = (props) => {
  const {data, image, loading, error} = props;

  if (loading) {
    return <Spinner/>;
  }
  if (error) {
    return <ErrorIndicator/>;
  }

  if (!data) {
    return <span>Selected person</span>;
  }

  return (
    <>
      <div className="image">
        <img
          src={image}
          alt="Details"
        />
      </div>
      <div className="description">
        <h1 className="title">{data.name}</h1>
        {
          React.Children.map(props.children, (child) => {
            return React.cloneElement(child, {data})
          })
        }
      </div>
    </>
  );
}

ItemDetails.propTypes = {
  props: PropTypes.exact({
    data: PropTypes.object,
    image: PropTypes.string,
    loading: PropTypes.bool,
    error: PropTypes.bool
  })
}

export default ItemDetails;
