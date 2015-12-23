import _ from 'lodash';
import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import * as actions from '../actions/action-types';

const adminSubregions = function (state = {adminAreas: [], fetching: false}, action) {
  state = _.cloneDeep(state);

  switch (action.type) {
    case actions.REQUEST_ADMIN_SUBREGIONS:
      console.log('REQUEST_ADMIN_SUBREGIONS');
      state.fetching = true;
      break;
    case actions.RECEIVE_ADMIN_SUBREGIONS:
      console.log('RECEIVE_ADMIN_SUBREGIONS');
      state = action.json;
      state.fetching = false;
      break;
  }
  return state;
};

const aaStats = function (state = {activeTab: null}, action) {
  state = _.cloneDeep(state);

  switch (action.type) {
    case actions.CHANGE_AA_STATS_TAB:
      console.log('CHANGE_AA_STATS_TAB');
      state.activeTab = action.tab;
      break;
    case actions.RECEIVE_ADMIN_SUBREGIONS:
      // Reset to null so the default will be picked up.
      state.activeTab = null;
      break;
  }
  return state;
};

const search = function (state = {results: [], fetching: false, query: '', searching: false}, action) {
  state = _.cloneDeep(state);

  switch (action.type) {
    case actions.REQUEST_SEARCH_RESULTS:
      console.log('REQUEST_SEARCH_RESULTS');
      state.fetching = true;
      state.query = action.query;
      state.searching = true;
      break;
    case actions.RECEIVE_SEARCH_RESULTS:
      console.log('RECEIVE_SEARCH_RESULTS');
      state.results = action.json;
      state.fetching = false;
      break;
    case actions.CLEAN_SEARCH_RESULTS:
      console.log('CLEAN_SEARCH_RESULTS');
      state.results = [];
      state.fetching = false;
      state.query = '';
      state.searching = false;
      break;
  }
  console.log('state', state);
  return state;
};

export default combineReducers({
  adminSubregions,
  aaStats,
  search,
  routing: routeReducer
});