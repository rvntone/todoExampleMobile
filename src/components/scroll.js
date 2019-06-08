import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  block: {
    height: 100,
    width: 100,
  },
  container: {
    backgroundColor: 'grey',
    flex: 1,
  },
  red: {
    backgroundColor: 'red',
  },
  blue: {
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
});
const colors = ['red', 'blue', 'green'];
export default class Scroll1 extends Component {
  componentDidMount() {
    console.log('componentDidMount Scroll1');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount Scroll1');
  }
  renderItems() {
    const result = [];
    let select = 0;
    for (let i = 0; i < 10; i++) {
      result.push(
        <View key={i} style={[styles.block, styles[colors[select]]]}>
          <Text>{i}</Text>
        </View>
      );
      select++;
      select = select === 3 ? 0 : select;
    }
    return result;
  }
  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>{this.renderItems()}</ScrollView>
      </View>
    );
  }
}
