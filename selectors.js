import { createSelector } from 'reselect';

const resources = state => state.resources;

export const getResourceIds = createSelector(
  resources,
  resources => resources.map(r => r.id)
);

const getResourceId = (state, props) => props.id;

export const getResourceById = createSelector(
  resources,
  getResourceId,
  (resources, id) => resources.find(r => r.id === id)
);
