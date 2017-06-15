// @flow

import { SET_SEARCH_TERM } from './actions';

// prettier-ignore
export function setSearchTerm(searchTerm) { // eslint-disable-line import/prefer-default-export
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}
