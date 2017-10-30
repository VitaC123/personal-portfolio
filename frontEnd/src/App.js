import React from 'react';

import { ConnectedRouter } from 'react-router-redux';
import { history } from './redux/store';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actionCreators';

import Main from './components/Main/Main';


const App = props => (
  <ConnectedRouter history={history}>
    <Main {...props} />
  </ConnectedRouter>
);

const mapStateToProps = state => ({
  siteText: state.siteText,
  selectedProject: state.selectedProject,
  projects: state.projects,
  selectedMusic: state.selectedMusic,
  musics: state.musics,
  testimonial: state.testimonial,
  errors: state.errors,
  routing: state.routing
});

const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(App);
