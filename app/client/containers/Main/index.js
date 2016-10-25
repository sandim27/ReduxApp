import { default as React, Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import './assets/main.scss'

class Main extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    return (
      <div>
        <Header defaultSettings={this.props.defaultSettings}/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos,
    defaultSettings: state.defaultSettings,
    uploadedImage: state.uploadedImage
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispachToProps)(Main);
