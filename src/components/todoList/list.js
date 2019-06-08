import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';

import Item from './item';

class List extends Component {
  renderItems() {
    const { list = [] } = this.props;
    if (list.length === 0) {
      return <Text>No items</Text>;
    }
    return list.map((item, pos) => {
      return <Item key={pos} pos={pos} item={item} />;
    });
  }
  render() {
    return <ScrollView>{this.renderItems()}</ScrollView>;
  }
}
const mapStateToProps = state => {
  return { list: state };
};
export default connect(
  mapStateToProps,
  {}
)(List);
