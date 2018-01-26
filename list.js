import React from 'react';
import { connect } from 'react-redux';
import { getResourceIds } from './selectors';
import ListItem from './listItem';

const mapStateToProps = (state, props) => ({
  ids: getResourceIds(state, props)
});

const List = ({ ids }) => (
  <ul>
    {ids.map(id => <ListItem key={id} id={id} />)}
  </ul>
);

export default connect(mapStateToProps)(List);
