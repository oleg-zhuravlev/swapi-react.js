import React from 'react';
import PropTypes from 'prop-types';

import './record.css';

const Record = ({data, field, label}) => (
  <div className="block-info">
    <span className="info">{label}</span>
    <span className="info">{data[field]}</span>
  </div>
);

Record.propTypes = {
  data: PropTypes.object,
  field: PropTypes.string,
  label: PropTypes.string
}

export default Record;
