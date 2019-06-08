import React, { Component } from 'react';
import { Text, View, SectionList, Platform } from 'react-native';

const styles = {
  tipo1: {
    color: 'red',
  },
  tipo2: {
    ...Platform.select({
      ios: {
        color: 'yellow',
      },
      android: {
        color: 'blue',
      },
    }),
  },
};

const sections = [];
export default class SectionList1 extends Component {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.keyExtractor = this.keyExtractor.bind(this);
    for (let j = 0; j < 10; j++) {
      const section = {
        title: `Sección ${j + 1}`,
        data: [],
      };
      for (let i = 0; i < 10; i++) {
        section.data.push({
          key: `key-${i + 1}`,
          type: 'tipo2',
        });
      }
      sections.push(section);
    }
    console.log(sections);
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
  renderHeader({ section }) {
    console.log(section);
    return <Text>{section.title}</Text>;
  }
  renderItem({ index, item, separators }) {
    if (item.type === 'tipo1') {
      return this.renderTipo1(item);
    }
    return this.renderTipo2(item);
  }
  render() {
    console.log(Platform);
    return (
      <SectionList
        stickySectionHeadersEnabled
        keyExtractor={this.keyExtractor}
        sections={sections}
        renderItem={this.renderItem}
        renderSectionHeader={this.renderHeader}
      />
    );
  }
}
