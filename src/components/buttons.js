import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  touchableView: {
    backgroundColor: 'green',
    height: 100,
  },
  touchableText: {
    color: 'white',
  },
});
export default class Buttons extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Button title="Botón" />
        <Button title="Botón" />
        <TouchableHighlight style={{ backgroundColor: 'black' }}>
          <View style={styles.touchableView}>
            <Text style={styles.touchableText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity>
          <View style={styles.touchableView}>
            <Text style={styles.touchableText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        <TouchableNativeFeedback>
          <View style={styles.touchableView}>
            <Text style={styles.touchableText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.touchableView}>
            <Text style={styles.touchableText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
