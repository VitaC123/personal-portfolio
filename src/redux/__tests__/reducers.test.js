import { projects, musics, selectedProject, selectedMusic, errors } from '../reducers';
import initialState from '../initialState';
import * as types from '../actionTypes';


describe('reducers: `projects`', () => {
  it('should return the initial state', () => {
    expect(projects(undefined, {})).toEqual(initialState.projects)
  });

  it(`should handle ${types.FETCH_PROJECTS_SUCCEEDED}`, () => {
    const stubData = [{}];
    expect(projects(stubData, types.FETCH_PROJECTS_SUCCEEDED)).toEqual(stubData);
  });
});


describe('reducers: `musics`', () => {
  it('should return the initial state', () => {
    expect(musics(undefined, {})).toEqual(initialState.projects)
  });

  it(`should handle ${types.FETCH_MUSICS_SUCCEEDED}`, () => {
    const stubData = [{}];
    expect(projects(stubData, types.FETCH_PROJECTS_SUCCEEDED)).toEqual(stubData);
  });
});


describe('reducers: `selectedProject`', () => {
  it('should return the initial state', () => {
    expect(selectedProject(undefined, {})).toEqual(initialState.selectedProject)
  });

  it(`should handle ${types.MAKE_SELECTED_PROJECT}`, () => {
    const stubData = {};
    expect(projects(stubData, types.MAKE_SELECTED_PROJECT)).toEqual(stubData);
  });
});


describe('reducers: `selectedMusic`', () => {
  it('should return the initial state', () => {
    expect(selectedMusic(undefined, {})).toEqual(initialState.selectedMusic)
  });

  it(`should handle ${types.MAKE_SELECTED_MUSIC}`, () => {
    const stubData = {};
    expect(projects(stubData, types.MAKE_SELECTED_MUSIC)).toEqual(stubData);
  });
});


describe('reducers: `errors`', () => {
  it('should return the initial state', () => {
    expect(errors(undefined, {})).toEqual(initialState.errors)
  });

  it('should handle any `FAILED` actionType', () => {
    const stubError = new Error();
    expect(projects(stubError, types.FETCH_PROJECTS_FAILED)).toEqual(stubError);
    expect(projects(stubError, types.FETCH_MUSICS_FAILED)).toEqual(stubError);
  });
});
