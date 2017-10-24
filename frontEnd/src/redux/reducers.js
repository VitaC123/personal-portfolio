import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import initialState from './initialState';
import * as types from './actionTypes';


// Sync
export const selectedProject = (state = initialState.selectedProject, action) => {
  switch (action.type) {
    case types.MAKE_SELECTED_PROJECT:
      return action.payload;
    default:
      return state;
  }
};

export const selectedMusic = (state = initialState.selectedMusic, action) => {
  switch (action.type) {
    case types.MAKE_SELECTED_MUSIC:
      return action.payload;
    default:
      return state;
  }
};

// Async
export const projects = (state = initialState.projects, action) => {
  switch (action.type) {
    case types.FETCH_PROJECTS_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
};

export const musics = (state = initialState.musics, action) => {
  switch (action.type) {
    case types.FETCH_MUSICS_SUCCEEDED:
      return action.payload;
    default:
      return state;
  }
};

export const errors = (state = initialState.errors, action) => {
  if (action.type && action.type.indexOf('FAILED') !== -1) {
    console.error(action);
    return [...state, action];
  }
  return state;
};

const rootReducer = combineReducers({
  selectedProject,
  projects,
  selectedMusic,
  musics,
  errors,
  routing: routerReducer
});


export default rootReducer;