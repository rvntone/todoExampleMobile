import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addTask } from '../../actions/todo';

const styles = StyleSheet.create({
  field: {
    flexDirection: 'row',
  },
  label: {
    width: 100,
    padding: 12,
    fontSize: 20,
  },
  input: {
    flex: 1,
    fontSize: 20,
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
  },
  action: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
  addButton: {
    flex: 1,
  },
  cancelButton: {
    flex: 1,
  },
});
class NewItem extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Add New',
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
    };
    this.onChange = this.onChange.bind(this);
    this.backToList = this.backToList.bind(this);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    if (!this.onFocus) {
      this.onFocus = this.props.navigation.addListener('didFocus', () => {
        this.inputRef.focus();
      });
    }
  }
  componentWillUnmount() {
    if (this.onFocus) {
      this.onFocus.remove();
    }
  }
  onChange(value) {
    this.setState({
      taskName: value,
    });
  }
  onAddNew() {
    const { taskName } = this.state;
    this.props.addTask(taskName);
    const { goBack } = this.props.navigation;
    goBack();
  }
  backToList() {
    const { goBack } = this.props.navigation;
    goBack();
  }
  shouldBeDisabled() {
    const { taskName } = this.state;
    return taskName.trim() === '';
  }
  render() {
    const { taskName } = this.state;
    return (
      <View>
        <View style={styles.field}>
          <Text style={styles.label} htmlFor="taskName">
            Task:
          </Text>
          <TextInput
            ref={input => {
              this.inputRef = input;
            }}
            style={styles.input}
            name="taskName"
            value={taskName}
            onChangeText={this.onChange}
          />
        </View>
        <View style={styles.actions}>
          <View style={styles.action}>
            <Button
              style={styles.addButton}
              disabled={this.shouldBeDisabled()}
              onPress={this.onAddNew.bind(this)}
              title="Add"
            />
          </View>
          <View style={styles.action}>
            <Button
              style={styles.cancelButton}
              onPress={this.backToList}
              title="Cancel"
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
export default connect(
  mapStateToProps,
  { addTask }
)(NewItem);
