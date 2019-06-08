import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

const styles = {
  tipo1: {
    color: 'red',
  },
  tipo2: {
    color: 'green',
  },
};

const data = [];
export default class FlatList1 extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
    for (let i = 0; i < 10000; i++) {
      data.push({
        key: `key-${i + 1}`,
        type: 'tipo1',
      });
    }
  }
  renderTipo1(item) {
    return <Text style={styles[item.type]}>Tipo1: {item.key}</Text>;
  }
  renderTipo2(item) {
    return <Text style={styles[item.type]}>Tipo2: {item.key}</Text>;
  }
  keyExtractor(item, index) {
    return item.key;
  }
  renderItem({ index, item, separators }) {
    if (item.type === 'tipo1') {
      return this.renderTipo1(item);
    }
    return this.renderTipo2(item);
  }
  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={data}
        renderItem={this.renderItem}
      />
    );
  }
}
