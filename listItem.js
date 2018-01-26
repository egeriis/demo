import React from 'react';
import { connect } from 'react-redux';
import { getResourceById } from './selectors';

const mapStateToProps = (state, props) => ({
  resource: getResourceById(state, props)
});

const ListItem = ({ resource }) => (
  <li>
    {resource.title}
  </li>
);

export default connect(mapStateToProps)(ListItem);
