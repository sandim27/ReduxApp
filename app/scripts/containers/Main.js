import { default as React, Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions';

class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
    photo: state.photo
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Main);
