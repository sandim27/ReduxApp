import { default as React, Component } from 'react';
import {connect} from 'react-redux';
import Header from '../components/Header';

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

function mapStateToProps() {
  return {
    photos: ['photo1', 'photo2']
  };
}

export default connect(mapStateToProps)(Main);
