import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';
import ErrorIndicator from '../errorIndicator/ErrorIndicator';

import './itemList.css';

const ItemList = (props) => {
  const {
    data,
    loading,
    error,
    renderItem,
    onItemSelected
  } = props;

  const renderItems = () => {
    return data.map(item => {
      const {id} = item;
      const label = renderItem(item);

      return (
        <li
          className="item"
          key={id}
          onClick={() => onItemSelected(id)}
        >
          <span className="item-text">{label}</span>
        </li>
      );
    });
  }

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator/>;
  }

  return(
    <ul className="item-list">
      {renderItems()}
    </ul>
  );
}

ItemList.defaultProps = {
  renderItem: ({name}) => name
}

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  renderItem: PropTypes.func,
  onItemSelected: PropTypes.func.isRequired
}

export default ItemList;
