import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import List from './list';

class Todo extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Todo List',
      headerRight: (
        <View style={{ paddingRight: 10 }}>
          <Button
            onPress={() => {
              navigation.navigate('TodoNewItem');
            }}
            title="Add New"
          />
        </View>
      ),
    };
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { addListener } = this.props.navigation;
    this.didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        console.log('didFocus', payload);
        console.log(this.state);
      }
    );
    this.didBlurSubscription = addListener('didBlur', payload => {
      console.log('didBlur', payload);
      console.log(this.state);
    });
  }
  componentWillUnmount() {
    if (this.didFocusSubscription) {
      this.didFocusSubscription.remove();
    }
    if (this.didBlurSubscription) {
      this.didBlurSubscription.remove();
    }
  }
  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1, padding: 10 }}>
        <List />
      </View>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(Todo);
