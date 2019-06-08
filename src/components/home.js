import React, { Component } from 'react';
import { Text, View, TextInput, Image, Button } from 'react-native';

import styles from './home.styles';
const images = {
  image1: require('../assets/1.png'),
  image2: require('../assets/2.png'),
  image3: require('../assets/3.png'),
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: false,
      userUnavailable: '',
      timer: null,
    };
    this.onChange = this.onChange.bind(this);
    this.setUserUnavailable = this.setUserUnavailable.bind(this);
    this.goToScroll = this.goToScroll.bind(this);
  }
  componentDidMount() {
    console.log('componentDidMount Home');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount Home');
  }
  goToScroll() {
    const { navigation } = this.props;
    navigation.push('Scroll', { value: 212 });
  }
  setUserUnavailable(value) {
    console.log('setUserUnavailable');
    this.setState({
      userUnavailable: 'NO DISPONIBLE' + value,
    });
  }
  onChange(value) {
    const error = value.includes('a');
    let j = 0;
    clearTimeout(this.state.timer);

    const timer = setTimeout(this.setUserUnavailable, 300);
    this.setState({ value, error, userUnavailable: '', timer });
  }
  render() {
    console.log(this.props);
    const textStyles = [styles.common];
    const { value, error, userUnavailable } = this.state;
    if (error) {
      textStyles.push(styles.error);
    }
    /*
    default
    number-pad
    decimal-pad
    numeric
    email-address
    phone-pad
    */
    /*ios
    ascii-capable
    numbers-and-punctuation
    url
    name-phone-pad
    twitter
    web-search
   */
    /* android
  visible-password
  */
    return (
      <View style={styles.container}>
        <Button onPress={this.goToScroll} title="Scroll" />
        <Text style={textStyles}>Home</Text>
        <TextInput
          keyboardType="visible-password"
          value={value}
          style={{ width: 100 }}
          onChangeText={this.onChange}
        />
        <Text>{userUnavailable}</Text>
        <Image style={{ width: 100, height: 100 }} source={images.image1} />
        <Image
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }
}
