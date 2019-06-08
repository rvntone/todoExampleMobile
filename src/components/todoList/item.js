import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { deleteTask, changeTask } from '../../actions/todo';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  taskName: {
    width: 100,
    padding: 12,
    fontSize: 20,
    flexGrow: 1,
  },
  actions: {
    flexDirection: 'row',
    padding: 10,
    width: 230,
  },
  action: {
    paddingRight: 10,
    paddingLeft: 10,
  },
  changeButton: {
    width: 130,
  },
  deleteButton: {
    flexGrow: 1,
  },
  inProgress: {},
});

class Item extends Component {
  onRemoveMe() {
    const { pos } = this.props;
    this.props.deleteTask(pos);
  }
  onChangeStatus() {
    const { pos } = this.props;
    this.props.changeTask(pos);
  }
  addStatus(itemClassName) {
    const { item } = this.props;
    const { status } = item;
    if (status === 2) {
      itemClassName.push(styles.done);
      return;
    }
    if (status === 1) {
      itemClassName.push(styles.inProgress);
      return;
    }
  }
  getStatus() {
    const { item } = this.props;
    if (item.status === 0) {
      return 'to do';
    }
    if (item.status === 1) {
      return 'in progress';
    }
    return 'done';
  }
  getColor() {
    const { item } = this.props;
    if (item.status === 0) {
      return '#f7ce74';
    }
    if (item.status === 1) {
      return '#54a656';
    }
    return '#04A0FF';
  }
  render() {
    const { item } = this.props;
    console.log(item);
    return (
      <View style={styles.row}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.taskName}>
          {item.taskName}
        </Text>
        <View style={styles.actions}>
          <View style={[styles.action, styles.changeButton]}>
            <Button
              color={this.getColor()}
              onPress={this.onChangeStatus.bind(this)}
              title={this.getStatus()}
            />
          </View>
          <View style={[styles.action, styles.deleteButton]}>
            <Button
              color="#D22"
              onPress={this.onRemoveMe.bind(this)}
              title="x"
            />
          </View>
        </View>
      </View>
    );
  }
}
Item.propTypes = {
  item: PropTypes.object.isRequired,
  pos: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => {
  const { pos } = props;
  return { item: state[pos] };
};
export default connect(
  mapStateToProps,
  { deleteTask, changeTask }
)(Item);
